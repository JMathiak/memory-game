import React, { Component } from "react";
import "../styles/card.css";

const Card = ({
  name,
  member,
  memberId,
  dcArr,
  setdcArr,
  currentScore,
  setCurrentScore,
  originalArray,
  shuffle,
  memberPhoto,
  highScore,
  setHighScore,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    shuffle();
    if (member.clicked === false) {
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > highScore) {
        setHighScore(currentScore + 1);
      }
      if (currentScore + 1 === 7) {
        alert("You win");
      }
      let pos = dcArr
        .map(function (e) {
          return e.id;
        })
        .indexOf(memberId);
      let memberArrCopy = dcArr.slice();
      memberArrCopy[pos] = {
        name: name,
        clicked: true,
        id: memberId,
        pic: memberPhoto,
      };
      setdcArr([...memberArrCopy]);
      console.log(pos);
    } else if (member.clicked === true) {
      setCurrentScore(0);
      setdcArr(originalArray);
    }
  };
  return (
    <div className="card">
      <img src={memberPhoto} alt="" onClick={handleClick}></img>
      <div className="member-name">
        <span className="font-link">{name}</span>
      </div>
    </div>
  );
};

export default Card;
