import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <div className="w-screen md:w-2/5 flex flex-col border-s-2 border-white px-10 backdrop-blur-lg">
      <h1 className="mr-auto text-3xl pt-16 pb-4">about me</h1>
      <div className="max-w-3xl text-lg font-light text-justify">
        <p>
          I'm a passionate software developer based in Hyderabad, India, with a
          strong academic background as a postgraduate from IIT Madras. My deep
          interest in engineering and technology drives me to constantly learn
          and stay at the forefront of the ever-evolving software development
          landscape.
        </p>
        <p>
          Through this website, I aim to share my journey and expertise in
          software development. Whether it's building innovative solutions or
          tackling complex problems, I strive for excellence in every project I
          undertake. I firmly believe that technology has the power to transform
          lives, and I am dedicated to leveraging my skills to make a positive
          impact.
        </p>
        <p className="font-mono text-lg hover:bg-tertiary opacity-75 hover:opacity-100 select-none pt-2">
          <a href="https://github.com/shubhjena" target="blank">
            <FontAwesomeIcon icon={faGithubAlt} />
            _shubhjena
          </a>
        </p>
      </div>
    </div>
  );
}
