export default function PreviewBanner() {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD === 'true';

  if (!isPreview) {
    return null;
  }

  return (
    <div
      role="alert"
      className="bg-amber-500/10 border-b border-amber-500/30 text-amber-200 px-4 py-2 text-center text-xs font-mono tracking-wide z-50 relative"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse" />
      Preview Environment — Under Construction. Not for public indexing.
    </div>
  );
}
