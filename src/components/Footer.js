import React, { Component } from "react";
import "../styles/footer.css";
const Footer = ({ setShowHelp, setShowCredit }) => {
  return (
    <div className="footer">
      <div className="footer-link" onClick={() => setShowHelp(true)}>
        Help
      </div>
      <div className="footer-link" onClick={() => setShowCredit(true)}>
        Credits
      </div>
    </div>
  );
};

export default Footer;
