import React, { Component, useState } from "react";
import GameArea from "./GameArea";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/main.css";
const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="container">
      <Header currentScore={currentScore} highScore={highScore} />
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
