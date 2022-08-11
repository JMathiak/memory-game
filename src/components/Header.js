import React, { Component } from "react";
import "../styles/header.css";

const Header = ({ currentScore, highScore }) => {
  return (
    <div className="header">
      <div className="title">Dreamcatcher Memory Game</div>
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
};

export default Header;
