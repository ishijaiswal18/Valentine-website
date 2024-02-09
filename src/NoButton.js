// NoButton.js
import React, { useState } from 'react';

const NoButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (hovered) {
      const button = event.target;
    //   const buttonRect = button.getBoundingClientRect();
    //   const buttonCenterX = buttonRect.left + 5*buttonRect.width;
    //   const buttonCenterY = buttonRect.top + 2*buttonRect.height;
    //   const cursorX = event.clientX;
    //   const cursorY = event.clientY;
    //   const dx = cursorX - buttonCenterX;
    //   const dy = cursorY - buttonCenterY;
      button.style.transition = 'transform 0.01s ease';
    //    move far away from where it is now
      const randomDx = Math.floor(Math.random() * 100) - 200; // Random value between -100 and 100
      const randomDy = Math.floor(Math.random() * 100) - 100; // Random value between -50 and 50
      button.style.transform = `translate(${randomDx}px, ${randomDy}px)`;
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = (event) => {
    setHovered(false);
    event.target.style.transition = 'transform 0.4s ease';
    event.target.style.transform = '';
  };

  const handleClick = () => {
    // Add any desired functionality when the button is clicked and a heart 
    alert("please please please say yes! <3");
  };

  return (
    <button
      className="no-button"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      No
    </button>
  );
};

export default NoButton;
