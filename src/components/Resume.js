import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHouse } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import resumeData from "../lib/resume.json";

const styles = {
  body: {
    background: "linear-gradient(45deg, #e0a4e5, #7FE9DE, #a0a1f1, #e0a4e5)",
    // background: "#A9A9A9",
  },
  pdfPage: {
    width: "210mm" /* A4 width */,
    // height: "297mm" /* A4 height */,
    backgroundColor: "#f6f6f6",
  },
};

export default function Resume() {
  return (
    <div
      style={styles.body}
      className="m-0 flex flex-col h-screen overflow-hidden"
      id="resume">
      {/* Navigation buttons */}
      <div className="fixed right-6 top-6 w-24 h-12 p-0.5 flex text-white  bg-black bg-opacity-60 rounded-full">
        <NavLink
          className="m-auto bg-accent  bg-opacity-60 rounded-full p-2 pl-3 pr-3 my-auto"
          to="/"
          download={resumeData.person && resumeData.person.downloadFilename}
          title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <a
          className="m-auto  bg-accent bg-opacity-60 rounded-full p-2 pl-3 pr-3"
          href={
            process.env.PUBLIC_URL +
            (resumeData.person && resumeData.person.pdfPath)
          }
          download={resumeData.person && resumeData.person.downloadFilename}
          title="Download PDF">
          <button>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </a>
      </div>
      {/* Page Container */}
      <div id="pageContainer" className="pt-6 pb-64 overflow-y-auto">
        {/* A4 Page */}
        <div
          style={styles.pdfPage}
          id="pdfPage"
          className="shadow-2xl mx-auto p-11 pb-16">
          {/* Heading */}
          <div className=" text-center">
            <h1 className="text-4xl font-semibold">
              <a
                href={resumeData.person && resumeData.person.website}
                target="_blank"
                rel="noreferrer">
                {resumeData.person && resumeData.person.name}
              </a>
            </h1>
            <p className="text-sm">
              {resumeData.person && resumeData.person.phone} |{" "}
              <a
                href={resumeData.person && `mailto:${resumeData.person.email}`}>
                <u>{resumeData.person && resumeData.person.email}</u>
              </a>{" "}
              |{" "}
              <a
                href={resumeData.person && resumeData.person.linkedin}
                target="_blank"
                rel="noreferrer">
                <u>{resumeData.person && resumeData.person.linkedinText}</u>
              </a>{" "}
              |{" "}
              <a
                href={resumeData.person && resumeData.person.github}
                target="_blank"
                rel="noreferrer">
                <u>{resumeData.person && resumeData.person.githubText}</u>
              </a>
            </p>
          </div>
          {/* Technical Skills (from JSON) */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold border-b border-black">
              {resumeData.sections && resumeData.sections.technicalSkills
                ? resumeData.sections.technicalSkills
                : "Technical Skills"}
            </h2>
            <ul className="list-none ml-6 mt-1">
              {Object.entries(resumeData.technicalSkills).map(
                ([category, items]) => (
                  <li key={category} className="mt-0">
                    <b className="font-semibold">{category}:</b>{" "}
                    <span className="text-sm">{items.join(", ")}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Experience (from JSON) */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold border-b border-black">
              {resumeData.sections && resumeData.sections.experience
                ? resumeData.sections.experience
                : "Experience"}
            </h2>
            <ul className="list-none ml-6 mr-2 mt-1">
              {resumeData.experience.map((exp, idx) => (
                <li key={idx} className="mb-1">
                  <div className="flex justify-between">
                    <span className="text-md font-semibold">{exp.title}</span>
                    <span className="text-sm">{exp.dateRange}</span>
                  </div>
                  <p className="flex justify-between mb-1">
                    <span className="italic text-sm">{exp.company}</span>
                    <span className="text-sm">{exp.location}</span>
                  </p>
                  <ul className="list-disc text-[13px] ml-8 space-y-0.4">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects (from JSON) */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold border-b border-black">
              {resumeData.sections && resumeData.sections.projects
                ? resumeData.sections.projects
                : "Projects"}
            </h2>
            <ul className="list-none  ml-6 mr-2 ">
              {resumeData.projects.map((project, index) => (
                <li key={index} className="mt-2">
                  <h3 className="text-md font-semibold">
                    <span>{project.title} </span>
                    <span className="font-normal italic text-sm">
                      | {project.technologies.join(", ")}
                    </span>
                    <span className="font-normal float-right text-sm">
                      {project.url ? (
                        <a href={project.url} target="blank" rel="noreferrer">
                          {project.urlText || project.url}
                        </a>
                      ) : null}
                    </span>
                  </h3>
                  <ul className="text-[13px] list-disc ml-8 space-y-0.4">
                    <li>Problem Statement: {project.problemStatement}</li>
                    {Array.isArray(project.description)
                      ? project.description.map((part, i) => (
                          <li key={i}>{part}</li>
                        ))
                      : (project.description || "")
                          .split("#")
                          .map((part, i) => <li key={i}>{part.trim()}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Education (from JSON) */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold border-b border-black">
              {resumeData.sections && resumeData.sections.education
                ? resumeData.sections.education
                : "Education"}
            </h2>
            <ul className="list-none ml-6">
              {resumeData.education.map((edu, i) => (
                <li key={i} className="mt-1.5 mr-2">
                  <h3 className="text-md font-semibold inline-block">
                    {edu.institution}
                  </h3>
                  <span className="float-right text-sm">{edu.location}</span>
                  <p className="italic text-sm mt-0">
                    <span>{edu.degree}</span>
                    <span className="float-right">{edu.dateRange}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
