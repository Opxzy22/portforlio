import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

function MarketplaceDemoVideo() {
  useEffect(() => {
    // Add overflow: hidden to body and html to prevent scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Clean up function to remove styles when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', zIndex: 999, overflow: 'hidden' }}>
      <div style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100vw', maxHeight: '100vh' }}>
        <ReactPlayer
          url="https://youtu.be/tpOUDu5ytkg"
          controls
          width="auto"
          height="auto"
        />
      </div>
    </div>
  );
}

export default MarketplaceDemoVideo;
