import React from "react";

export default function Projects() {
  const projects = [
    { title: "Project1", desc: "Description1" },
    { title: "Project2", desc: "Description2" },
    { title: "Project3", desc: "Description3" },
    { title: "Project3", desc: "Description3" },
    { title: "Project3", desc: "Description3" },
    { title: "Project3", desc: "Description3" },
    // Add more sections as needed
  ];
  return (
    <div
      className="flex w-scr-95 justify-center bg-slate-600"
      id="projects"
    >
      <div className=" flex flex-wrap justify-center bg-transparent max-h-96">
        {projects.map((project) => (
          <div className=" block p-8 m-8  w-1/3 bg-slate-500 bg-opacity-75 rounded-lg">
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
