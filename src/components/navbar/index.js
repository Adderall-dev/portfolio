import React, { useState } from "react";
import "./navbar.scss";
import { FiGithub } from "react-icons/fi";

const NavBar = ({ aboutRef, projectsRef }) => {
  const [background, setBackground] = useState(false);

  const changeNavBackgroundColor = () => {
    if (!background && window.pageYOffset > 200) {
      setBackground(true);
    } else if (background && window.pageYOffset <= 200) {
      setBackground(false);
    }
  };

  const scrollTo = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", changeNavBackgroundColor);

  return (
    <nav className={background ? "navbar-dark" : "navbar"}>
      <div
        data-aos="fade-down"
        data-aos-duration="1100"
        className="logo"
        onClick={scrollToTop}
      >
        <span>Edwin</span>
      </div>
      <div className="links" data-aos="fade-down" data-aos-duration="1200">
        <ul>
          <li onClick={() => scrollTo(aboutRef)}>About</li>
          <li onClick={() => scrollTo(projectsRef)}>Projects</li>
        </ul>
      </div>
      <a
        data-aos="fade-down"
        data-aos-duration="1300"
        href="https://github.com/Adderall-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        GitHub &nbsp; <FiGithub />
      </a>
    </nav>
  );
};

export default NavBar;
