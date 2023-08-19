import React, { useEffect } from "react";
import { countStore } from "../store/ScrollStatus";

function Progressbar() {
  const { scrollProgress, updateScrollProgress } = countStore();

  // scroll event listener -wheel
  useEffect(() => {
    window.addEventListener("wheel", updateScrollProgress);
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("wheel", updateScrollProgress);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);


  return (
    <div className="fixed bottom-0 md:top-4 left-0 md:left-3/4 w-full md:w-1/5 h-1.5 md:h-2 bg-transparent md:border border-black">
      <div
        className="h-full bg-gradient transition-width duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default Progressbar;
