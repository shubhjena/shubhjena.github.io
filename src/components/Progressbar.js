import React, { useState, useEffect } from "react";

function Progressbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to update scroll progress
  const updateScrollProgress = () => {
    let fullHeight;
    let scrollAmount;

    //to calculate scroll amount for small scrrens
    if (window.innerWidth < 768) {
      const windowHeight = window.innerHeight;
      fullHeight = document.body.clientHeight - windowHeight;
      scrollAmount = window.scrollY;
    }
    //to calculate scroll amount for md and above screens
    else {
      const containerElement = document.querySelector(".home");
      if (!containerElement) {
        console.log("Container element not found.");
        return;
      }
      fullHeight =
        containerElement.scrollHeight - containerElement.offsetHeight;
      scrollAmount = containerElement.scrollTop;
    }
    //setting scroll progress state to calculated progress
    const progress = (scrollAmount / fullHeight) * 100;
    setScrollProgress(progress);
  };

  // scroll event listener
  useEffect(() => {
    window.addEventListener("wheel", updateScrollProgress);
    return () => {
      window.removeEventListener("wheel", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-secondary">
      <div
        className="h-full bg-accent transition-width duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default Progressbar;
