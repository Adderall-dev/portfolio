import React from "react";
import "./projects.scss";
import projectData from "./data.json";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="title">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects">
        {projectData.map(({ name, description, link, github }, index) => {
          return (
            <div className="card">
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
};

export default Projects;
