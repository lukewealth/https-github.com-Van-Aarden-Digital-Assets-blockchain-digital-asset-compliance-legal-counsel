import { useEffect } from 'react';

/**
 * Hook to measure and report image loading performance metrics
 * Tracks LCP (Largest Contentful Paint) and image load times
 */
export const useImagePerformance = (componentName: string = 'unknown') => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    // Monitor LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;

      if (process.env.NODE_ENV === 'development') {
        console.log(`[${componentName}] LCP:`, {
          duration: lastEntry.renderTime || lastEntry.startTime,
          size: lastEntry.size,
          url: lastEntry.url,
        });
      }
    });

    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true });

      return () => {
        observer.disconnect();
      };
    } catch (e) {
      // LCP observer not supported
      return;
    }
  }, [componentName]);
};

/**
 * Hook to measure image loading times
 * Useful for performance budgeting
 */
export const useImageLoadMetrics = () => {
  return {
    logImageLoad: (imageName: string, duration: number) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Image Load] ${imageName}: ${duration.toFixed(2)}ms`);
      }
    },
    logImageError: (imageName: string, error: Error) => {
      console.error(`[Image Error] ${imageName}:`, error);
    },
  };
};

export default {
  useImagePerformance,
  useImageLoadMetrics,
};
