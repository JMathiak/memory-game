import React, { Component, useEffect, useState } from "react";
import Card from "./Card";
import "../styles/gameArea.css";
import jiuPic from "../img/jiuAMPC.jpg";
import suaPic from "../img/SuaAMPC.jpg";
import siyeonPic from "../img/siyeonAMPC.jpg";
import handongPic from "../img/HandongAMPC.jpg";
import yooPic from "../img/YooAMPC.jpg";
import damiPic from "../img/DamiAMPC.jpg";
import gahPic from "../img/GahAMPC.jpg";
const GameArea = ({ setCurrentScore, currentScore }) => {
  useEffect(() => {
    shuffMethod();
  }, []);

  const shuffMethod = () => {
    let shuffArr = dcArr;
    for (let i = shuffArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffArr[i], shuffArr[j]] = [shuffArr[j], shuffArr[i]];
    }
    console.log(shuffArr);
    setdcArr((curArr) => {
      return [...shuffArr];
    });
  };
  const origArray = [
    {
      name: "Jiu",
      clicked: false,
      pic: jiuPic,
      id: 0,
    },
    {
      name: "Sua",
      clicked: false,
      pic: suaPic,
      id: 1,
    },
    {
      name: "Siyeon",
      clicked: false,
      pic: siyeonPic,
      id: 2,
    },
    {
      name: "Handong",
      clicked: false,
      pic: handongPic,
      id: 3,
    },
    {
      name: "Yoohyeon",
      clicked: false,
      pic: yooPic,
      id: 4,
    },
    {
      name: "Dami",
      clicked: false,
      pic: damiPic,
      id: 5,
    },
    {
      name: "Gahyeon",
      clicked: false,
      pic: gahPic,
      id: 6,
    },
  ];
  const [dcArr, setdcArr] = useState(origArray);
  return (
    <div className="game-area">
      {dcArr.map((member) => (
        <Card
          dcArr={dcArr}
          member={member}
          setdcArr={setdcArr}
          name={member.name}
          memberId={member.id}
          memberPhoto={member.pic}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          originalArray={origArray}
          shuffle={shuffMethod}
        />
      ))}
    </div>
  );
};

export default GameArea;
