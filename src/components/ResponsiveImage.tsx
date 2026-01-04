import React, { useState, useEffect, useRef } from 'react';
import { lazyLoadOptions } from '../utils/imageOptimization';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  priority?: boolean; // Skip lazy load for above-the-fold images
  onLoad?: () => void;
  onError?: () => void;
  decoding?: 'async' | 'sync' | 'auto';
}

/**
 * Optimized responsive image component with lazy loading support
 * Automatically handles srcSet, sizes, and async decoding
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes,
  srcSet,
  width,
  height,
  priority = false,
  onLoad,
  onError,
  decoding = 'async',
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      lazyLoadOptions
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  return (
    <img
      ref={imgRef}
      src={isInView || priority ? src : ''}
      srcSet={isInView || priority ? srcSet : ''}
      sizes={sizes}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={decoding}
      onLoad={() => {
        setIsLoaded(true);
        onLoad?.();
      }}
      onError={onError}
    />
  );
};

export default ResponsiveImage;
