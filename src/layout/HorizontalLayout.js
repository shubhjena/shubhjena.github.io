import React from "react";
import "./HorizontalLayout.css";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";
import NameBar from "../components/NameBar";
import Progressbar from "../components/Progressbar";

function HorizontalLayout() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    // Add more sections as needed
  ];

  return (
    <div className="flex overflow-y-scroll">
      <div className="home scrollable flex scrollbar-none ">
        <div className="slides md:flex text-center">
          <Home />
          <Projects />
          <div>
            <About />
          </div>
        </div>
      </div>
      <div className="fixed">
        <NameBar />
        <Navbar sections={sections} />
      </div>
      <Progressbar />
    </div>
  );
}

export default HorizontalLayout;
