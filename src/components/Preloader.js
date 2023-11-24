import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 1200);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`fixed w-screen h-screen bg-secondary flex justify-center items-center transition-opacity ease-in-out duration-1000 delay-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-3xl flex gap-3.5">
        <span
          className={`transition-opacity duration-300 ease-out ${
            visible ? "opacity-100" : "opacity-0 "
          }`}
        >
          Shubhashish Jena
        </span>
        <span
          className={`font-thin transition-opacity duration-300 delay-100 ${
            visible ? "opacity-100" : "opacity-0 "
          }`}
        >
          Portfolio
        </span>
      </div>
    </div>
  );
};

export default Preloader;
