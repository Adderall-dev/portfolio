import React, { useState } from "react";
import "./navbar.scss";
import { FiGithub } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import resume from "assets/resume.pdf";

const NavBar = ({ aboutRef, projectsRef }) => {
  const [background, setBackground] = useState(false);
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
    document.querySelector(".navbar-mobile").classList.toggle("active");
  };

  const changeNavBackgroundColor = () => {
    if (!background && window.pageYOffset > 100) {
      setBackground(true);
    } else if (background && window.pageYOffset <= 200) {
      setBackground(false);
    }
  };

  const scrollTo = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    if (active) {
      handleToggleActive();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (active) {
      handleToggleActive();
    }
  };

  window.addEventListener("scroll", changeNavBackgroundColor);

  return (
    <>
      <nav className={background ? "navbar-dark-desktop" : "navbar-desktop"}>
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
        <div className="nav-buttons">
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
          <a
            data-aos="fade-down"
            data-aos-duration="1300"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            CV
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}

      <nav className="navbar-mobile">
        <div className={active ? "dnone" : "logo"} onClick={scrollToTop}>
          <span>Edwin</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="hamburger"
          onClick={handleToggleActive}
        >
          {active ? (
            <VscClose color="white" size={40} />
          ) : (
            <VscMenu color="white" size={40} />
          )}
        </div>
        <div className={active ? "links-mobile" : "links-mobile dnone"}>
          <ul>
            <li className="button" onClick={scrollToTop}>
              Home &nbsp; <AiOutlineHome size={20} />
            </li>
            <li className="button" onClick={() => scrollTo(aboutRef)}>
              About &nbsp; <AiFillInfoCircle size={20} />
            </li>
            <li className="button" onClick={() => scrollTo(projectsRef)}>
              Projects &nbsp; <AiOutlineFundProjectionScreen size={20} />
            </li>
            <a
              data-aos="fade-down"
              data-aos-duration="1300"
              href="https://github.com/Adderall-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{ backgroundColor: "transparent" }}
            >
              GitHub &nbsp; <FiGithub />
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="1300"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{ backgroundColor: "transparent" }}
            >
              CV
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
