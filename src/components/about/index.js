import React, { forwardRef } from "react";
import "./about.scss";

const About = forwardRef((_, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="left" />
      <div className="right">
        <h1 data-aos="fade-right" data-aos-duration="1400">
          About
        </h1>
        <p data-aos="fade-down" data-aos-duration="1400" data-aos-delay="200">
          Hello, my name is Edwin Urbaniak, I am currently working as a
          Front-end engineer at the barking dog entertainment, programming is my
          passion, which gives me great pleasure, I like to learn new things, I
          have over a year of experience on the frontend field, my favorite
          technology is React, I also like to use Typescript, GraphQL, recently
          I even started to like the backend, hence the desire to master Elixir
          and Phoenix as best as possible.
        </p>
      </div>
    </div>
  );
});

export default About;
