import React, { Component } from "react";
import "../styles/modal.css";
const Modal = ({ setShowHelp, showHelp, text }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>{text}</div>
        <button onClick={() => setShowHelp(!showHelp)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
