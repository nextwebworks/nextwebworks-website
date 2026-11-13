export default function Logo({ className = 'h-7 w-auto', markOnly = false, ...props }) {
  if (markOnly) {
    return (
      <svg
        viewBox="120 100 390 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Next Web Works Mark"
        {...props}
      >
        <g fill="#2563EB" className="dark:fill-[#3B82F6] transition-colors">
          <polygon points="394,107 499,107 415,336 322,214" />
          <polygon points="131,107 235,107 419,366 413,375 387,338 327,411 352,466 327,503 223,503 342,338" />
        </g>
        <polygon points="387,339 498,503 394,503 328,411" fill="#AB2ED6" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} {...props}>
      <svg
        viewBox="120 100 390 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0"
        role="img"
        aria-label="Next Web Works Mark"
      >
        <g fill="#2563EB" className="dark:fill-[#3B82F6] transition-colors">
          <polygon points="394,107 499,107 415,336 322,214" />
          <polygon points="131,107 235,107 419,366 413,375 387,338 327,411 352,466 327,503 223,503 342,338" />
        </g>
        <polygon points="387,339 498,503 394,503 328,411" fill="#AB2ED6" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-black tracking-tight text-lg text-slate-900 dark:text-white transition-colors">
          NEXT
        </span>
        <span className="font-mono text-[9px] font-bold tracking-widest text-[#2563EB] dark:text-[#60A5FA] uppercase transition-colors">
          WEB WORKS
        </span>
      </div>
    </div>
  );
}
