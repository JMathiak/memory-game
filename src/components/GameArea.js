import React, { Component, useState } from "react";
import Card from "./Card";
import "../styles/gameArea.css";
const GameArea = ({ setCurrentScore, currentScore }) => {
  const [dcArr, setdcArr] = useState([
    {
      name: "Jiu",
      clicked: false,
      id: 0,
    },
    {
      name: "Sua",
      clicked: false,
      id: 1,
    },
    {
      name: "Siyeon",
      clicked: false,
      id: 2,
    },
    {
      name: "Handong",
      clicked: false,
      id: 3,
    },
    {
      name: "Yoohyeon",
      clicked: false,
      id: 4,
    },
    {
      name: "Dami",
      clicked: false,
      id: 5,
    },
    {
      name: "Gahyeon",
      clicked: false,
      id: 6,
    },
  ]);
  return (
    <div className="game-area">
      {dcArr.map((member) => (
        <Card
          dcArr={dcArr}
          member={member}
          setdcArr={setdcArr}
          name={member.name}
          memberId={member.id}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      ))}
    </div>
  );
};

export default GameArea;
