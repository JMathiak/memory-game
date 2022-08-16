import React, { Component, useState } from "react";
import GameArea from "./GameArea";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import "../styles/main.css";
const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showHelp, setShowHelp] = useState(true);
  const text =
    "The goal of the game is to click all 7 cards without clicking the same card twice. Everytime you successfully click all 7, you can click all 7 cards again to continue raising your score past 7 points.";
  return (
    <div className="container">
      <Header currentScore={currentScore} highScore={highScore} />
      {showHelp === true && (
        <Modal setShowHelp={setShowHelp} showHelp={showHelp} text={text} />
      )}

      <GameArea
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Footer />
    </div>
  );
};

export default Main;

/*
    -Game area component
    - Card component to display 
    - Header component with a title + score section
    - Footer component for credits
    - DC Theme -> Members + album covers. Could have 2 modes
    - Array of objects that are mapped to card components
    -- Attributes -> Image, Name, Clicked or Not, 
    -- On click checks if the card has been clicked or not. If already clicked --> End game, If not --> Update attribute to clicked + increment score
    -- Need a way to find the correct object in the array
    


*/
