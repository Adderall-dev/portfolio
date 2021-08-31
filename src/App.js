import "./App.scss";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "components/projects";
import NavBar from "components/navbar";
import Main from "components/main";
import About from "components/about";
import Footer from "components/footer";

AOS.init();

const App = () => {
  const about = useRef(null);
  const projects = useRef(null);

  useEffect(() => {
    return null;
  }, [about, projects]);

  return (
    <div className="App">
      <div>
        <NavBar aboutRef={about} projectsRef={projects} />
      </div>
      <div>
        <Main />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div className="pt" ref={projects}>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
