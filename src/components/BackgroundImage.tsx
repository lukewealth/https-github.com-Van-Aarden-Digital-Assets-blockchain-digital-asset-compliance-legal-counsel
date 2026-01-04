import React, { CSSProperties } from 'react';

interface BackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  overlayOpacity?: number;
  overlayColor?: string;
  children?: React.ReactNode;
}

/**
 * Optimized background image component with overlay support
 * Prevents layout shift and improves painting performance
 */
const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  className = '',
  style,
  overlayOpacity = 0,
  overlayColor = 'rgba(11, 28, 45, 0.6)',
  children,
}) => {
  const containerStyle: CSSProperties = {
    ...style,
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
  };

  return (
    <div className={className} style={containerStyle}>
      {/* Overlay for text readability */}
      {overlayOpacity > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      )}

      {/* Content wrapper */}
      <div style={{ position: 'relative', zIndex: 20 }}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
