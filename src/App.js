import "./App.scss";
import React, { useRef, useEffect } from "react";
import NavBar from "components/navbar";
import Main from "components/main";
import About from "components/about";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const about = useRef(null);

  useEffect(() => {
    console.log(about);
  }, [about]);

  return (
    <div className="App">
      <div>
        <NavBar aboutRef={about} />
      </div>
      <div>
        <Main />
      </div>
      <div ref={about}>
        <About />
      </div>
    </div>
  );
};

export default App;
