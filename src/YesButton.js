// YesButton.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const YesButton = ({ onClick }) => {
  return (
    <button className="yes-button" onClick={onClick}>
      Yes <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}

export default YesButton;
