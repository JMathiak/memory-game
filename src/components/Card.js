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
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    let shuffArr = dcArr;
    for (let i = shuffArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffArr[i], shuffArr[j]] = [shuffArr[j], shuffArr[i]];
    }
    console.log(shuffArr);
    setdcArr((curArr) => {
      return [...shuffArr];
    });
    if (member.clicked === false) {
      setCurrentScore(currentScore + 1);
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
      };
      setdcArr([...memberArrCopy]);
      console.log(pos);
    }
  };
  return (
    <div onClick={handleClick} className="card">
      {name}
    </div>
  );
};

export default Card;
