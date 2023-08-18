import React, { useState, useEffect } from "react";

function Progressbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to update scroll progress
  const updateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight - windowHeight;
    const scrollY = window.scrollY;
    const progress = (scrollY / fullHeight) * 100;
    setScrollProgress(progress);
  };

  // scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-secondary md:hidden">
      <div
        className="h-full bg-accent transition-width duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default Progressbar;
