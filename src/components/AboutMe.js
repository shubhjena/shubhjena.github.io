import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <div className="md:w-2/5 flex flex-col border-s-2 border-white pb-10 px-5 md:px-10">
      <h1 className="mr-auto text-3xl md:pt-16 pb-4">about me</h1>
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
        <p className="md:mt-2 text-base font-normal font-sans mr-auto tracking-wider hover:bg-tertiary hover:text-white transform duration-200 select-none w-fit">
          <a href="https://github.com/shubhjena" target="blank">
            <FontAwesomeIcon icon={faGithubAlt} className="pr-1.5" />
            <span>shubhjena</span>
          </a>
        </p>
      </div>
    </div>
  );
}
