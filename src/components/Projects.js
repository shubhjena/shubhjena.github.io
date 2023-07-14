import React from "react";

export default function Projects() {
  console.log("Projects");

  // array to store the project information
  const projects = [
    {
      title: "Classic Snake Game",
      desc: "The classic snake game presented in JAVA GUI",
      link: "https://github.com/shubhjena/SnakeGame",
    },
    {
      title: "TaskMeowster",
      desc: "A cat themed task listing app to track your pending tasks.",
      link: "https://github.com/shubhjena/TaskMeowster",
    },
    {
      title: "LinkNest - Chrome extension",
      desc: "A chrome extension for saving and managing web links",
      link: "https://github.com/shubhjena/LinkNestChromeExtension",
    },
    {
      title: "Portfolio Website",
      desc: "My professional portfolio website",
      link: "",
    },

    // Add more sections as needed
  ];
  return (
    <div
      className="flex w-screen justify-center bg-primary pt-48"
      id="projects"
    >
      {/* Project list container */}
      <div className=" flex-col flex-wrap bg-transparent max-h-96 p-7">
        {projects
          .slice(0)
          .reverse()
          .map((project, index) => (
            // Individual project card
            <a key={index} href={project.link} target="blank">
              <div className=" flex flex-col-reverse h-20 px-4 justify-center transition duration-200  bg-opacity-75 rounded-xl hover:bg-secondary hover:px-6 hover:shadow-inner hover:translate-y-0.5   ">
                <p className=" text-lg italic font-light">{project.desc}</p>
                <h1 className=" text-xl font-medium ">{project.title}</h1>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}