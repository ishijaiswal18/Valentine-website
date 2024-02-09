// WelcomeScreen.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
        <video className="animation-video" autoPlay loop muted>
        <source src="/animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <FontAwesomeIcon icon={faHeart} className="heart"/>
      <h1>I've been struck by Cupid's arrow and I hope you have too.</h1>
      <h2>Let's make this Valentine's Day special.</h2>
      <p>Will you be my valentine?</p>
    </div>
  );
}

export default WelcomeScreen;
