import React, { useState, useEffect } from 'react';
import './SlideShow.css';

const SlideShow = () => {
  const greetings = ['Welcome', 'to', 'my', 'portfolio,', 'where', 'creativity', 'meets', 'innovation']; // Array of greeting words
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // State to track the current word index

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < greetings.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      }
    }, 1000); // Change word every second

    return () => clearTimeout(timer);
  }, [currentWordIndex, greetings.length]);

  return (
    <div className="slideshow">
      {/* Display all words */}
      {greetings.map((word, index) => (
        <span className='display-word' key={index} style={{ display: index <= currentWordIndex ? 'inline' : 'none' }}>
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default SlideShow;
