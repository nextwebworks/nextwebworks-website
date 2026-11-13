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
  const args = payload?.toolCall?.args || {};
  const filePath = args.Path || args.TargetFile || args.AbsolutePath || '';
  const cmd = args.CommandLine || '';

  // 1. Check file path arguments for editor/view tools
  if (filePath) {
    const isEnvFile = /(?:^|[\\/])\.env(?:\.[^\\/]+)?$/i.test(filePath);
    const isEnvExample = /(?:^|[\\/])\.env\.example$/i.test(filePath);

    if (isEnvFile && !isEnvExample) {
      console.log(
        JSON.stringify({
          decision: 'deny',
          reason: `Reading or modifying environment secrets (${filePath}) is strictly forbidden. Refer to .env.example for variable templates.`,
        })
      );
      process.exit(0);
    }
  }

  // 2. Check shell command arguments for attempts to dump .env
  if (cmd) {
    const envDumpPattern = /(?:cat|type|Get-Content|head|tail|more)\s+.*\.env(?:\.[a-zA-Z0-9]+)?(?!\.example)/i;
    if (envDumpPattern.test(cmd)) {
      console.log(
        JSON.stringify({
          decision: 'deny',
          reason: `Commands reading environment secret files are strictly forbidden by repository security guard.`,
        })
      );
      process.exit(0);
    }
  }

  console.log(JSON.stringify({ decision: 'allow' }));
  process.exit(0);
} catch (err) {
  console.log(
    JSON.stringify({
      decision: 'ask',
      reason: `secret-guard parser error: ${err.message}`,
    })
  );
  process.exit(0);
}

