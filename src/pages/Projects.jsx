import React from "react";
import Tools from "../components/Tools";
import ProjectTiles from "../components/ProjectTiles";

export default function Projects() {
  return (
    <div
      className="flex flex-col md:flex-row gap-10 md:gap-20 md:h-screen bg-primary border-x-2 md:border-black px-5 md:pl-10"
      id="projects"
    >
      <ProjectTiles/>
      <Tools/>
    </div>
  );
}
