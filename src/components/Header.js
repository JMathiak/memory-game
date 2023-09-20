import React, { Component } from "react";
import "../styles/header.css";

const Header = ({ currentScore, highScore }) => {
  return (
    <header className="header">
      <div className="title-holder">
        <div className="title">
          <span className="font-link">DREAMCATCHER MEMORY GAME</span>
        </div>
      </div>
      <div className="score-holder">
        <div className="current-score">
          <span className="font-link">Current Score: {currentScore}</span>
        </div>
        <div className="high-score">
          <span className="font-link">High Score: {highScore}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
