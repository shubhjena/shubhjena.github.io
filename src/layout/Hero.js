import React from "react";
import Topbar from "../pages/Topbar";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export default function Hero() {
  return (
    <div className="main-hero-section">
      <Topbar />
      <main className="main-hero-section-content overflow-x-scroll scrollbar-none">
        <Home />
        <Projects />
      </main>
    </div>
  );
}
