import React, { Component } from "react";
import GameArea from "./GameArea";
import Header from "./Header";
import Footer from "./Footer";
const Main = () => {
  <div>
    <Header />
    <GameArea />
    <Footer />
  </div>;
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
