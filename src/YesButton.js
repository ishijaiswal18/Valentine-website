// YesButton.js
import React from 'react';

const YesButton = ({ onClick }) => {
  return (
    <button className="yes-button" onClick={onClick}>
      Yes
    </button>
  );
}

export default YesButton;
