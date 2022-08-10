import React, { Component } from "react";
import "../styles/header.css";

const Header = ({ currentScore }) => {
  return (
    <div className="header">
      <div className="title">Dreamcatcher Memory Game</div>
      <div className="score">{currentScore}</div>
    </div>
  );
};

export default Header;
