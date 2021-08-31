import React from "react";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div>
      <h3>{currentDate} Edwin Urbaniak© </h3>
    </div>
  );
};

export default Footer;
