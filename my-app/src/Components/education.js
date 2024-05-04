// EducationDisplay.js

import React, { useEffect, useState } from 'react';
import '../CSS/education.css';

function EducationDisplay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      const element = document.querySelector('.education-container');
      if (isInViewport(element)) {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`education-container ${isVisible ? 'visible' : ''}`}>
      <div className='education-title'>
        <h2>Alx</h2>
        <p>Software engineering</p>
        <div className='duration'>12 months</div>
      </div>
      <ul>
        <li>Ubuntu, Linux, Unix programming</li>
        <li>Data Structures and algorithms</li>
        <li>Reverse engineering and security</li>
        <li>Graphic Programming</li>
        <li>Object-Oriented</li>
        <li>Databases</li>
        <li>Backend</li>
      </ul>
    </div>
  );
}

export default EducationDisplay;
