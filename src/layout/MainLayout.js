import React, { useEffect, useRef } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import NameBar from "../components/NameBar";
import Home from "../components/Home";
import Projects from "../components/Projects";

/*Main Layout */

export default function MainLayout() {
  console.log("Main");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollSpeed = 75; // Adjust the scroll speed here

    const handleScroll = (event) => {
      const scrollAmount = event.deltaY > 0 ? scrollSpeed : -scrollSpeed;
      scrollContainer.scrollLeft += scrollAmount;
    };

    scrollContainer.addEventListener("wheel", handleScroll);

    return () => {
      scrollContainer.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    // Add more sections as needed
  ];

  return (
    <>
      <div className="md:hidden">
        <NameBar/>
        <Navbar sections={sections} />
      </div>
      <div className="hidden md:flex bg-primary text-black text-center m-0 p-0 ">
        <Navbar sections={sections} />
        <div
          className="flex overflow-x-scroll scrollbar-none"
          ref={scrollContainerRef}
        >
          <NameBar />
          <div className="flex">
            <Home />
            <Projects />
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
