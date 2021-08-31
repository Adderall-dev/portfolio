import React from "react";
import "./main.scss";
import video from "assets/videos/test.mp4";
import { FiChevronsDown } from "react-icons/fi";

const Main = () => {
  return (
    <main className="main">
      <div className="content">
        <h1 data-aos="fade-up" data-aos-duration="1300">
          Hi, I'm Edwin
        </h1>
        <p data-aos="fade-down" data-aos-duration="1400">
          Front-end Engineer
        </p>
      </div>
      <div className="video-overlay"></div>
      <div className="video-wrapper">
        <video src={video} autoPlay playsinline loop muted></video>
      </div>
      <div data-aos="fade-up" className="icon">
        <FiChevronsDown size={50} />
      </div>
    </main>
  );
};

export default Main;
