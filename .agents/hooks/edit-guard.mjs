import fs from 'node:fs';

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf-8');
  } catch {
    return '';
  }
}

try {
  const raw = readStdin();
  const payload = raw ? JSON.parse(raw) : {};
  const cmd = payload?.toolCall?.args?.CommandLine || '';

  // 1. Scripted file edits (Deny)
  const scriptEditPatterns = [
    /sed\s+(-i|--in-place)/i,
    /perl\s+-[^\s]*i/i,
    /awk\s+.*inplace/i,
    /jscodeshift/i,
    /(?:>|>>|Out-File|Set-Content|tee)\s+.*(?:\.js|\.jsx|\.ts|\.tsx|\.json|\.md|\.css|\.html)/i,
  ];

  for (const pattern of scriptEditPatterns) {
    if (pattern.test(cmd)) {
      console.log(
        JSON.stringify({
          decision: 'deny',
          reason: `Automated/scripted file modification is prohibited by repository editing rules. Use Antigravity editor tools (write_file, edit_file) instead of shell commands.`,
        })
      );
      process.exit(0);
    }
  }

  // 2. Destructive operations (Ask)
  const destructivePatterns = [
    /rm\s+-[^\s]*r[^\s]*f/i,
    /Remove-Item\s+.*-Recurse/i,
    /git\s+reset\s+--hard/i,
    /git\s+clean\s+-[^\s]*f/i,
    /git\s+push\s+.*--force/i,
    /vercel\s+(?:--prod|deploy)/i,
    /(?:DROP|TRUNCATE)\s+TABLE/i,
  ];

  for (const pattern of destructivePatterns) {
    if (pattern.test(cmd)) {
      console.log(
        JSON.stringify({
          decision: 'ask',
          reason: `Potentially destructive command detected (${cmd}). Explicit user approval is required.`,
        })
      );
      process.exit(0);
    }
  }

  // Allow by default
  console.log(JSON.stringify({ decision: 'allow' }));
  process.exit(0);
} catch (err) {
  console.log(
    JSON.stringify({
      decision: 'ask',
      reason: `edit-guard parser error: ${err.message}`,
    })
  );
  process.exit(0);
}

