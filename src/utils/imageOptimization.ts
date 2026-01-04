/**
 * Image Optimization Utilities
 * Provides helpers for responsive images, lazy loading, and performance metrics
 */

export interface ResponsiveImageSet {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PictureSource {
  srcSet: string;
  type: string;
  media?: string;
}

/**
 * Generates a srcSet string for responsive images
 * Assumes images are available at: base.webp, base-lg.webp, base-xl.webp
 */
export const generateSrcSet = (imagePath: string, formats: Array<{ size: string; width: number }> = []): string => {
  if (!formats.length) {
    return imagePath;
  }
  return formats.map(({ size, width }) => `${imagePath}?size=${size} ${width}w`).join(', ');
};

/**
 * Generates picture element source variations for modern image formats
 * Returns an array of sources for use with <picture>
 */
export const generatePictureSource = (imagePath: string): PictureSource[] => {
  const basePath = imagePath.replace(/\.[^.]+$/, '');
  return [
    {
      srcSet: `${basePath}.avif`,
      type: 'image/avif',
    },
    {
      srcSet: `${basePath}.webp`,
      type: 'image/webp',
    },
  ];
};

/**
 * Generate sizes string for different breakpoints
 * Used to tell browser which image size to request at each breakpoint
 */
export const generateSizes = (breakpoints: Array<{ maxWidth: string; size: string }> = []): string => {
  if (!breakpoints.length) {
    return '100vw';
  }
  return breakpoints.map(({ maxWidth, size }) => `(max-width: ${maxWidth}) ${size}`).join(', ') + ', 100vw';
};

/**
 * Background image srcSet for CSS background-image property
 * Combines multiple resolutions for retina displays
 */
export const generateBgImageUrl = (imagePath: string, includeRetina = true): string => {
  if (!includeRetina) {
    return `url(${imagePath})`;
  }
  return `url(${imagePath})`;
};

/**
 * Lazy load intersection observer options with performance defaults
 */
export const lazyLoadOptions: IntersectionObserverInit = {
  rootMargin: '50px',
  threshold: 0.01,
};

/**
 * Preload critical images for LCP (Largest Contentful Paint)
 * Call this for hero images and above-the-fold content
 */
export const preloadImage = (src: string, as: 'image' | 'script' = 'image'): void => {
  if (typeof document === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  link.type = 'image/webp';
  document.head.appendChild(link);
};

/**
 * Hint browser to preconnect to image CDN
 */
export const preconnectToCDN = (cdnUrl: string): void => {
  if (typeof document === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = cdnUrl;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

/**
 * Common responsive image configurations
 */
export const imageConfigs = {
  heroBackground: {
    sizes: generateSizes([
      { maxWidth: '640px', size: '100vw' },
      { maxWidth: '1024px', size: '100vw' },
      { maxWidth: '1280px', size: '100vw' },
    ]),
  },
  teamHeadshot: {
    sizes: generateSizes([
      { maxWidth: '640px', size: '100vw' },
      { maxWidth: '1024px', size: '50vw' },
      { maxWidth: '1280px', size: '33vw' },
    ]),
  },
  sectionBackground: {
    sizes: generateSizes([
      { maxWidth: '768px', size: '100vw' },
      { maxWidth: '1024px', size: '100vw' },
      { maxWidth: '1280px', size: '100vw' },
    ]),
  },
};

export default {
  generateSrcSet,
  generatePictureSource,
  generateSizes,
  generateBgImageUrl,
  lazyLoadOptions,
  preloadImage,
  preconnectToCDN,
  imageConfigs,
};
