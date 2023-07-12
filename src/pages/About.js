import React from "react";
import profilePic from "./Profile picture.jpeg";
export default function About() {
  return (
    <div className="flex-col min-w-full bg-zinc-600 z-10" id="about">
      <div className=" last-name-info text-left ">Jena  </div>
      <div className="flex pt-8">
        <img
          src={profilePic}
          className="profile-pic rounded-full ml-8 mr-8"
          alt="profile picture"
        />
        <div>
          This is about section This is about sectionThis is about section This
          is about section This is about section This is about section This is
          about section This is about section This is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about
          sectionThis is about sectionThis is about sectionThis is about section
        </div>
      </div>
    </div>
  );
}
