import "./App.scss";
import NavBar from "components/navbar";
import Main from "components/main";
import About from "components/about";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
    </div>
  );
}

export default App;
