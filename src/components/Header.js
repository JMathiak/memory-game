import React, { Component } from "react";
import "../styles/header.css";

const Header = ({ currentScore }) => {
  return <div className="header">{currentScore}</div>;
};

export default Header;
