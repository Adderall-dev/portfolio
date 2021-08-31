import React from "react";
import "./footer.scss";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>© {currentDate} Edwin Urbaniak </h3>
    </div>
  );
};

export default Footer;
