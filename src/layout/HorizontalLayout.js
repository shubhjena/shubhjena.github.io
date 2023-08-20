import React from "react";
import "./HorizontalLayout.css";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";
import NameBar from "../components/NameBar";
import Progressbar from "../components/Progressbar";

function HorizontalLayout() {

  return (
    <div className="flex">
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
        <Navbar />
      </div>
      <Progressbar />
    </div>
  );
}

export default HorizontalLayout;
