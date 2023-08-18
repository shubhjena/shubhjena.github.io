import React from "react";

export default function Projects() {
  console.log("Projects");

  // array to store the project information
  const projects = [
    // {
    //   title: "Classic Snake Game",
    //   desc: "The classic snake game presented in JAVA GUI",
    //   link: "https://github.com/shubhjena/SnakeGame",
    // },
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
    {
      title: "Quick Cart",
      desc: "An online shopping mart",
      link: "https://quick-cart-kohl.vercel.app/",
    },
    {
      title: "My Dental Clinic",
      desc: "Website for a dental clinic",
      link: "https://my-dental-clinic.vercel.app/",
    },
    {
      title: "Expense Tracker",
      desc: "An expense tracker web-app to store and display transactions",
      link: "https://github.com/shubhjena/ExpenseTracker",
    },

    // Add more sections as needed
  ];
  return (
    <div
      className="flex flex-col md:flex-row w-screen md:h-screen md:justify-end bg-primary"
      id="projects"
    >
      <span className="md:hidden pt-10 pb-6 px-7 text-3xl">Projects</span>
      {/* Project list container */}
      <div className="pb-5 md:py-56 px-7 flex-col overflow-y-scroll">
        {projects
          .slice(0)
          .reverse()
          .map((project, index) => (
            // Individual project card
            <a key={index} href={project.link} target="blank">
              <div className="flex flex-col px-10 py-3 justify-center transition duration-400  bg-opacity-75 rounded-xl hover:bg-gradient-to-r from-transparent via-secondary to-transparent hover:translate-y-0.5 ">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-light ">
                  {project.title}
                </h1>
                <p className=" text-lg italic font-light">{project.desc}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
