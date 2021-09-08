import React, { forwardRef } from "react";
import "./projects.scss";
import projectData from "./data.json";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = forwardRef((_, ref) => {
  return (
    <div className="projects-wrapper" ref={ref}>
      <div className="title">
        <h1 data-aos="fade-down" data-aos-duration="1200">
          PROJECTS
        </h1>
      </div>
      <div className="projects" data-aos="fade-right" data-aos-duration="1500">
        {projectData.map(({ name, description, link, github }, index) => {
          return (
            <div className="card" key={index}>
              <div className="preview">
                <h2>{name}</h2>
              </div>
              <div className="card-data">
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={github} target="_blank" rel="noreferrer">
                  <AiOutlineGithub size={55} />
                </a>
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Projects;
