import React from "react";
import profilePic from "../assets/Profile picture.jpeg";
export default function About() {
  console.log("About");
  return (
    <div
      className="flex flex-col w-screen max-h-screen bg-tertiary z-10 pl-20"
      id="about"
    >
      <div className="mt-24 text-8xl font-normal tracking-wider text-left indent-96 last-name-info ">
        Jena
      </div>
      <div className="flex pt-8">
        <img
          src={profilePic}
          className=" h-72 rounded-full ml-8 mr-8"
          alt="profile picture"
        />
        <div className="flex items-center justify-center w-screen text-3xl">
          👷‍♂️Section under construction! ⚒
        </div>
      </div>
    </div>
  );
}
