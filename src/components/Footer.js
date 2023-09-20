import React, { Component } from "react";
import "../styles/footer.css";
const Footer = ({ setShowHelp, setShowCredit }) => {
  return (
    <footer className="footer">
      <div className="footer-link" onClick={() => setShowHelp(true)}>
        Help
      </div>
      <div className="footer-link" onClick={() => setShowCredit(true)}>
        Credits
      </div>
    </footer>
  );
};

export default Footer;
