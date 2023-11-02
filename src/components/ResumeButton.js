import React from "react";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function ResumeButton() {
  return (
    <div>
      <NavLink
        className="bg-accent bg-opacity-60 rounded-full scale-110 p-2 px-3.5 my-auto fixed right-6 bottom-6 md:bottom-auto md:top-6"
        to="/resume"
        download={"Shubhashish_Resume_SDE.pdf"}
        title="Resume"
      >
        <FontAwesomeIcon icon={faFile} />
      </NavLink>
    </div>
  );
}
