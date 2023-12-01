import React from "react";
import "./HorizontalLayout.css";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Progressbar from "../components/Progressbar";
import ResumeButton from "../components/ResumeButton";
import Home from "../pages/Home";

function HorizontalLayout() {
  return (
    <div className="flex">
      <div className="home scrollable flex scrollbar-none ">
        <div className="slides md:flex text-center">
          <Home />
          <Projects />
          <div>
            <Contact />
          </div>
        </div>
      </div>
      <div className="fixed">
        <ResumeButton />
        <Navbar />
      </div>
      <Progressbar />
    </div>
  );
}

export default HorizontalLayout;
