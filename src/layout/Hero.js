import React from "react";
import Topbar from "../pages/Topbar";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export default function Hero() {
  return (
    <div>
      <Topbar />
      <main className="flex overflow-x-scroll scrollbar-none mt-25vh">
        <Home />
        <Projects />
      </main>
    </div>
  );
}
