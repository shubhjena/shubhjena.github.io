import React, {useEffect, useRef} from 'react';
import About from "../pages/About";
import Navbar from "../pages/Navbar";
import Hero from "./Hero";

const scrollContainerRef = useRef(null);

useEffect(() => {
  const scrollContainer = scrollContainerRef.current;

  let scrollSpeed = 5000; // Adjust the scroll speed here

  const handleScroll = (event) => {
    const scrollAmount = event.deltaY > 0 ? scrollSpeed : -scrollSpeed;
    scrollContainer.scrollLeft += scrollAmount;
  };

  scrollContainer.addEventListener('wheel', handleScroll);

  return () => {
    scrollContainer.removeEventListener('wheel', handleScroll);
  };
}, []);

export default function Main() {
  return (
    <div className="App flex">
      <Navbar />
      <div
        className="main-layout overflow-x-scroll scrollbar-none"
        ref={scrollContainerRef}
      >
        <Hero />
        <About />
      </div>
    </div>
  );
}
