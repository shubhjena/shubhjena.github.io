import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHouse } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const styles = {
  body: {
    margin: 0,
    height: "100vh",
    background: "linear-gradient(45deg, #e0a4e5, #84fab0, #a0a1f1, #e0a4e5)",
    // backgroundColor: "#A9A9A9",
    overflow: "hidden",
  },
  pdfPage: {
    width: "210mm" /* A4 width */,
    height: "297mm" /* A4 height */,
    margin: "0px auto",
    backgroundColor: "#fff",
    // border: '1px solid #030303',
    padding: "44px",
  },
};

const projects = [
  {
    title: "Portfolio Website",
    technologies: ["React", "Tailwind CSS", "Zustand", "GitHub Pages"],
    urlText: "/shubhjena.github.io",
    url: "https://shubhjena.github.io/",
    problemStatement:
      "Develop a portfolio website to showcase my skills and projects.",
    description:
      "Developed a portfolio website with home, projects, and about sections.#The website showcases my skills, projects, and contact information.",
  },
  {
    title: "Expense Tracker",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "GitHub"],
    urlText: "/github/expense-tracker",
    url: "https://github.com/shubhjena/ExpenseTracker",
    problemStatement:
      "Build a web application for recording and tracking expenses.",
    description:
      "Created an 'Expense Tracker' web app with React.js and Express.js. #Users can add, view, edit, and delete their expense records. It can be used for expense monitoring. #Data is stored and fetched from a MongoDB database using Mongoose.",
  },
  {
    title: "Quiz Application",
    technologies: ["Spring Boot", "Java", "Maven", "PostgreSQL", "REST API"],
    urlText: "/github/Quizapp",
    url: "https://github.com/shubhjena/Quizapp",
    problemStatement: "Develop a quiz app with RESTful API endpoints.",
    description:
      "Created RESTful API endpoints for quiz creation, submission, and management. #Quiz questions are maintained in a PostgreSQL database to which questions can be added or deleted. #Users can generate a quiz with a requested number of questions in any of the given topics.",
  },
  {
    title: "My Dental Clinic",
    technologies: ["React", "Material UI", "Tailwind CSS", "GitHub", "Vercel"],
    urlText: "/my-dental-clinic.vercel.app",
    url: "https://my-dental-clinic.vercel.app",
    problemStatement: "Create a front-end for a dental clinic website.",
    description:
      "Developed a website for a dental clinic that provides information about their services. #The website also shows their contact information, patient testimonials, doctor’s profiles, equipment, etc.",
  },
];
export default function Resume() {
  return (
    <div
      style={styles.body}
      className="min-w-min flex flex-col h-full"
      id="resume"
    >
      <div className="fixed right-6 top-6 w-24 h-12 p-0.5 flex text-white  bg-black bg-opacity-60 rounded-full">
        <NavLink
          className="m-auto bg-accent  bg-opacity-60 rounded-full p-2 pl-3 pr-3 my-auto"
          to="/"
          download={"Shubhashish_Resume_SDE.pdf"}
          title="Home"
        >
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <a
          className="m-auto  bg-accent bg-opacity-60 rounded-full p-2 pl-3 pr-3"
          href={process.env.PUBLIC_URL + "/files/Shubhashish_Resume_SDE.pdf"}
          download={"Shubhashish_Resume_SDE.pdf"}
          title="Download PDF"
        >
          <button>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </a>
      </div>
      <div id="pageContainer" className="pt-6 pb-64 overflow-y-auto">
        <div
          style={styles.pdfPage}
          id="pdfPage"
          className="shadow-2xl "
        >
          {/* Heading */}
          <div className=" text-center">
            <h1 className="text-4xl font-semibold">
              <a href="https://shubhjena.github.io/" target="blank">
                Shubhashish Jena
              </a>
            </h1>
            <p className="text-sm">
              +91-762-189-0244 |{" "}
              <a href="mailto:shubh.jena@gmail.com">
                <u>shubh.jena@gmail.com</u>
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/shubhjena" target="blank">
                <u>linkedin.com/shubhjena</u>
              </a>{" "}
              |{" "}
              <a href="https://github.com/shubhjena" target="blank">
                <u>github.com/shubhjena</u>
              </a>
            </p>
          </div>
          {/* Technical Skills */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Technical Skills</h2>
            <hr />
            <ul className="list-none ml-6 mt-1">
              <li>
                <b className="font-semibold ">Languages:</b>{" "}
                <span className="text-sm">Java, JavaScript, HTML/CSS</span>
              </li>
              <li>
                <b className="font-semibold">Frameworks:</b>{" "}
                <span className="text-sm">
                  Spring, React, Zustand, Tailwind CSS, Radix, Material UI
                </span>
              </li>
              <li>
                <b className="font-semibold">Databases:</b>{" "}
                <span className="text-sm">MySQL, PostgreSQL</span>
              </li>
              <li>
                <b className="font-semibold">Developer Tools:</b>{" "}
                <span className="text-sm">
                  Vercel, Postman, GitHub, VS Code, IntelliJ
                </span>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold">Projects</h2>
            <hr />
            <ul className="list-none  ml-6 mr-2 ">
              {projects.map((project, index) => (
                <li key={index} className="mt-2">
                  <h3 className="text-md font-semibold">
                    <span>{project.title} </span>
                    <span className="font-normal italic text-sm">
                      | {project.technologies.join(", ")}
                    </span>
                    <span className="font-normal float-right text-sm">
                      <a href={project.url} target="blank">
                        {project.urlText}
                      </a>
                    </span>
                  </h3>
                  <ul className="text-sm list-disc ml-8 space-y-0.5">
                    <li>Problem Statement: {project.problemStatement}</li>
                    {project.description.split("#").map((part, i) => (
                      <li key={i}>{part.trim()}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold">Experience</h2>
            <hr />
            <ul className="list-none ml-6 mr-2 mt-2">
              <li>
                <div>
                  <h3 className="text-md font-semibold inline-block">
                    Senior Planning Engineer
                  </h3>
                  <span className="text-sm float-right">
                    Aug. 2021 -- Jan. 2023
                  </span>
                </div>
                <p>
                  <span className="italic text-sm">
                    Larsen & Toubro Ltd. - HPCL Rajasthan Refinery Ltd.
                  </span>
                  <span className="float-right text-sm">Barmer, RJ</span>
                </p>
                <ul className="list-disc text-sm ml-8 space-y-0.5">
                  <li>
                    Coordinated cross-functional teams for timely procurement
                    processes and client billing worth 636 Cr.
                  </li>
                  <li>
                    Used Primavera project management tool for scheduling and
                    resource management.
                  </li>
                  <li>
                    Analysed weekly & monthly risk mitigation and progress
                    monitoring reports for corrective actions.
                  </li>
                </ul>
                {/* Add more experience details here */}
              </li>
              {/* Add more experiences here */}
            </ul>
          </div>

          {/* Education */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold">Education</h2>
            <hr />
            <ul className="list-none ml-6">
              <li className="mt-2 mr-2">
                <h3 className="text-md font-semibold inline-block">
                  Great Learning
                </h3>
                <span className="float-right text-sm">Online</span>
                <p className="italic text-sm mt-0.5">
                  <span></span>Coding Bootcamp for PGP SDE
                  <span className="float-right">Nov. 2022 -- Present</span>
                </p>
              </li>
              <li className="mt-2 mr-2">
                <h3 className="text-md font-semibold inline-block">
                  IIT Madras
                </h3>
                <span className="float-right text-sm">Chennai, TN</span>
                <p className="italic text-sm mt-0.5">
                  <span></span>Master of Technology in Construction Tech. &
                  Management - CGPA 8.92
                  <span className="float-right">Aug. 2019 -- June 2021</span>
                </p>
              </li>
              <li className="mt-2 mr-2">
                <h3 className="text-md font-semibold inline-block">
                  LD College of Engineering
                </h3>
                <span className="float-right text-sm">Ahmedabad, GJ</span>
                <p className="italic text-sm mt-0.5">
                  <span></span>Bachelor of Engineering in Civil Engineering -
                  CGPA 8.45
                  <span className="float-right">Aug. 2015 -- June 2019</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
