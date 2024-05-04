import React, { useEffect, useRef } from 'react';
import '../CSS/slideAnimation.css'; // Import your CSS file with animation styles

function withSlideAnimation(WrappedComponent) {
  return function WithSlideAnimation(props) {
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add('visible');
          }
        },
        { threshold: 0.1 } // Adjust the threshold as needed
      );

      observer.observe(ref.current);

      // Cleanup
      return () => observer.disconnect();
    }, []);

    return (
      <div className="slide-animation" ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withSlideAnimation;
