import React, { useEffect, useRef } from "react";
import About from "../pages/About";
import Navbar from "../pages/Navbar";
import Hero from "./Hero";

export default function Main() {
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
    <div className="App flex">
      <Navbar sections={sections} />
      <div
        className="flex overflow-x-scroll scrollbar-none"
        ref={scrollContainerRef}
      >
        <Hero />
        <About />
      </div>
    </div>
  );
}
