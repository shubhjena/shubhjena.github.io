import React, { useEffect } from "react";
import { countStore } from "../store/ScrollStatus";

function Progressbar() {
  const { scrollProgress, updateScrollProgress } = countStore();

   // Custom throttle function
   const throttle = (func, delay=60) => {
    let throttled = false;
    let lastArgs = null;

    return (...args) => {
      if (!throttled) {
        throttled = true;
        func(...args);
        setTimeout(() => {
          throttled = false;
          if (lastArgs) {
            func(...lastArgs);
            lastArgs = null;
          }
        }, delay);
      }else{
        lastArgs = args;
      }
    };
  };

  // Throttle the scroll event
  const throttledScrollHandler = throttle(updateScrollProgress, 50);

  const handleScroll = () => {
    throttledScrollHandler();
  };

  useEffect(() => {
    // Add wheel event listener
    window.addEventListener('wheel', handleScroll);

    // Cleanup: Remove wheel event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  },[throttledScrollHandler]);

  return (
    <div className="fixed bottom-0 md:bottom-8 right-0 md:right-8 w-full md:w-52 h-1.5 md:h-1 bg-transparent md:border border-accent">
      <div
        className="h-full bg-accent transition-width duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default Progressbar;
