import React, { useEffect } from "react";
import { countStore } from "../store/ScrollStatus";

function Progressbar() {
  const { scrollProgress, updateScrollProgress } = countStore();

  // scroll event listener -wheel
  useEffect(() => {
    const interval = setInterval(updateScrollProgress, 30);
    return () => {
      clearInterval(interval);
    };
  }, [scrollProgress,updateScrollProgress]);

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
