// site/components/ResponsiveImage.js
import manifest from '@/public/assets/manifest.json';

export default function ResponsiveImage({
  assetId,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading,
  ...props
}) {
  const asset = manifest?.assets?.[assetId];

  if (!asset) {
    return null;
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={asset.src}
      srcSet={asset.srcset || undefined}
      sizes={sizes}
      alt={alt}
      width={asset.width}
      height={asset.height}
      loading={priority ? 'eager' : loading || 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`w-full h-auto object-cover ${className}`}
      {...props}
    />
  );
}
