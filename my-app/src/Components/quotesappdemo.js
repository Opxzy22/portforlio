import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

function QuotesDemoVideo() {
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

  const handleContextMenu = (event) => {
        event.preventDefault(); // Prevent the context menu from appearing
    };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', zIndex: 999, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100vw', maxHeight: '100vh' }}>
      <div onContextMenu={handleContextMenu}>
      <ReactPlayer
        url="https://youtu.be/YII-vPs1RE0"
        controls
        width="auto"
        height="auto"
      />
    </div>
      </div>
    </div>
  );
}

export default QuotesDemoVideo;
