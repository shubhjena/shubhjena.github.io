import React from "react";
import profilePic from "../assets/Profile picture.jpeg";
import SocialIcons, {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialIcons";
import { SKILLS } from "../lib/data";

export default function About() {
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
          <ul className="flex flex-wrap gap-4 w-72 justify-center">
            {SKILLS.map((skill, index) => (
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
        <div className="flex flex-wrap justify-center items-center w-screen">
          <EmailIcon />
          <GithubIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
}
