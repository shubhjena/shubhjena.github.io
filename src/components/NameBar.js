import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavHashLink } from "react-router-hash-link";

export default function NameBar() {
  console.log("NameBar");
  return (
    <div className="md:fixed flex justify-start pt-2 md:ml-20 w-screen md:w-auto md:mt-24 backdrop-blur-sm">
      <div className=" pl-4">
        <div className="flex flex-col">
          <NavHashLink smooth to={`#home`}>
            <span className="text-3xl md:text-6xl font-normal font-serif tracking-wider select-none cursor-pointer">
              Shubhashish
            </span>
          </NavHashLink>
          <span className="pl-1 md:mt-1 text-base font-normal font-sans mr-auto tracking-wider hover:bg-tertiary hover:text-white transform duration-200 select-none">
            <a href="https://www.linkedin.com/in/shubhjena" target="blank">
              <FontAwesomeIcon icon={faLinkedin} /> shubhjena
            </a>
          </span>
        </div>
      </div>
      <div className=" pl-1.5">
        <NavHashLink smooth to={`#home`}>
          <span className="text-3xl md:text-6xl font-normal font-serif tracking-wider select-none cursor-pointer">
            Jena
          </span>
        </NavHashLink>
      </div>
    </div>
  );
}
