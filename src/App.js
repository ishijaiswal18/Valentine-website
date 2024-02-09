// App.js
import React from 'react';
import './App.css';
import WelcomeScreen from './WelcomeScreen';
import YesButton from './YesButton';
import NoButton from './NoButton';

function App() {
  const handleYesClick = () => {
    // Implement functionality for Yes button click
    alert("Yes! Happy Valentine's Day!");
  };

  return (
    <div className="App">
      <WelcomeScreen />
      <div className="button-container">
        <YesButton onClick={handleYesClick} />
        <NoButton />
      </div>
    </div>
  );
}

export default App;


