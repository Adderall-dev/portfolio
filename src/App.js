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
      <NavBar aboutRef={about} projectsRef={projects} />
      <Main />
      <About ref={about} />
      <Projects ref={projects} />
      <Footer />
    </div>
  );
};

export default App;
