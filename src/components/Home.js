import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div>
      <div
        className="bg-secondary min-h-screen md:w-screen flex justify-center pt-24 md:pt-48"
        id="home"
      >
        <div className="p-8 md:w-5/6 max-w-3xl text-xl font-light text-justify">
          <p>
            I'm a passionate software developer based in Hyderabad, India, with
            a strong academic background as a postgraduate from IIT Madras. My
            deep interest in engineering and technology drives me to constantly
            learn and stay at the forefront of the ever-evolving software
            development landscape.
          </p>
          <br />
          <p>
            Through this website, I aim to share my journey and expertise in
            software development. Whether it's building innovative solutions or
            tackling complex problems, I strive for excellence in every project
            I undertake. I firmly believe that technology has the power to
            transform lives, and I am dedicated to leveraging my skills to make
            a positive impact.
          </p>
          <br />
          <span className="font-mono text-lg hover:bg-tertiary opacity-75 hover:opacity-100 select-none">
            <a href="https://github.com/shubhjena" target="blank">
              <FontAwesomeIcon icon={faGithubAlt} />
              _shubhjena
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
