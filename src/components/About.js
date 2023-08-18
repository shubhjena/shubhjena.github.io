import React from "react";
import profilePic from "../assets/Profile picture.jpeg";
import SocialIcons from "./SocialIcons";

export default function About() {

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
      className="flex flex-col min-h-screen w-screen bg-tertiary md:pl-20 "
      id="about"
    >
      {/* body section */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center pt-16 mt-2 md:mt-40">
        {/* Profile picture */}
        <div className="pt-12 min-w-fit">
          <img
            src={profilePic}
            className="h-28 md:h-48 lg:h-72 rounded-full md:mx-14"
            alt="profile picture"
          />
        </div>

        {/* Skills section */}
        <div className="">
          <h1 className="text-xl font-light p-5 tracking-widest uppercase">
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
