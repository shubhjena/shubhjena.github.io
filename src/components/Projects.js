import { PROJECTS } from "../lib/data";

export default function Projects() {
  return (
    <div
      className="flex flex-col md:flex-row w-screen md:h-screen md:justify-end bg-primary"
      id="projects"
    >
      <span className="md:hidden pt-10 pb-6 px-7 text-3xl">Projects</span>
      {/* Project list container */}
      <div className="pb-5 md:py-56 px-7 flex-col overflow-y-scroll">
        {PROJECTS.slice(0)
          .reverse()
          .map((project, index) => (
            // Individual project card
            <a key={index} href={project.link} target="blank">
              <div className="flex flex-col px-10 py-3 justify-center transition duration-400  bg-opacity-75 rounded-xl hover:bg-gradient-to-r from-transparent via-secondary to-transparent hover:translate-y-0.5 ">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold md:font-light ">
                  {project.title}
                </h1>
                <p className="text-base md:text-lg italic font-light">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
