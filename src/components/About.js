import React from "react";
import profilePic from "../assets/Profile picture.jpeg";
import SocialIcons from "./SocialIcons";

export default function About() {
  console.log("About");

  const skills = [
    "JAVA",
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Tailwind CSS",
    "React",
    "Git",
  ];

  return (
    <div
      className="flex flex-col w-screen max-h-screen bg-tertiary z-10 pl-20"
      id="about"
    >
      {/*Jena Name bar*/}
      <div className="mt-24 text-8xl font-normal tracking-wider text-left indent-96 last-name-info ">
        Jena
      </div>

      {/* body section */}
      <div className="flex items-center justify-center pt-8">
        {/* Profile picture */}
        <div className="pt-12 min-w-fit">
          <img
            src={profilePic}
            className=" h-72 rounded-full mx-14"
            alt="profile picture"
          />
        </div>

        {/* Skills section */}
        <div className="">
          <h1 className="text-xl font-light m-5 tracking-widest uppercase ">
            My Skills
          </h1>
          <ul className="flex flex-wrap gap-4 w-72  justify-center">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="py-3 px-8  bg-secondary rounded-3xl text-lg shadow-md font-mono select-none transition duration-300 hover:bg-primary hover:text-xl hover:px-7 hover:shadow-inner hover:translate-y-1 "
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* Social icons */}
        <SocialIcons />

        {/* Under construction message */}
        {/* <div className="flex items-center justify-center w-screen text-3xl">
          👷‍♂️Section under construction! ⚒
        </div> */}
      </div>
    </div>
  );
}
