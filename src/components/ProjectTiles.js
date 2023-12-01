import React from "react";
import { PROJECTS } from "../lib/data";

function ProjectTiles() {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 md:px-5 bg-primary pt-5 md:pt-16">
      <h1 className="text-left text-3xl pb-4">projects</h1>
      <section className="grid md:grid-flow-col mx-auto md:grid-rows-2 gap-5 mb-auto mt-2">
        {PROJECTS.slice(0)
          .reverse()
          .map((project, index) => (
            // Individual project card
            <a
              key={index}
              href={project.link}
              target="blank"
              className="border border-accent mr-auto"
            >
              <div className="bg-tertiary w-60 h-56 p-4">
                <h1 className="text-2xl md:text-2xl pb-2">{project.title}</h1>
                <p className="text-base md:text-lg italic font-light">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
      </section>
    </div>
  );
}

export default ProjectTiles;
