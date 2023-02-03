import React from "react";
import "./Home.css";
import * as Fa from "react-icons/fa";
import { projectData } from "../Data";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects...</h1>
      <div className="projectgroup">
        {projectData.map((item) => (
          <div className="singleproject" key={item.id}>
            <div className="projecttitle"> {`<`}{item.title}{`>`} </div>
            <div className="layer"></div>
            <img className="projectimg" src={"/images/" + item.image} alt="" />
            <div className="projectinfo">
              <div className="links">
                <div className="website">
                  <a href={item.website} target="_blank">
                    Website: <Fa.FaExternalLinkAlt />
                  </a>
                </div>
                <div className="github">
                  <a href={item.github} target="_blank">
                    Github: <Fa.FaGithub />
                  </a>
                </div>
              </div>
              <header>{item.title}</header>
              <p>{item.desc}</p>
              <div className="projectitems">
                <ul>
                  {item.tech.map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
