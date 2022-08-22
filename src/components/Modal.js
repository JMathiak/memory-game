import React, { Component } from "react";
import "../styles/modal.css";
const Modal = ({ setShowHelp, showHelp, text, link }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-text">
          {text} {link}
        </div>
        <button onClick={() => setShowHelp(!showHelp)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
