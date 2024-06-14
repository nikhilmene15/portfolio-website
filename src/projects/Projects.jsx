import React from "react";
import "./projects.scss";
import ParallaxCard from "./ParallaxCard ";
import data from "./data";
const Projects = () => {
  return (
    <section className="projects_wrapper" id="projects">
      <div className="container">
        <div className="box">
          <h2>Projects</h2>

          <ul className="card-list">
            {data.map((card) => (
              <ParallaxCard key={card.id} cardData={card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
