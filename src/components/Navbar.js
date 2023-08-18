import React, { useState, useEffect, useRef } from "react";
import { a } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar({ sections }) {
  const [activeTab, setActiveTab] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting:", entry.target.id); // Debugging
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as per your requirement
    );

    sections.forEach((section) => {
      const target = document.querySelector(`#${section.id}`);
      if (target) {
        observer.current.observe(target);
      }
    });

    return () => {
      observer.current.disconnect();
    };
  }, [sections]);

  return (
    <>
      <nav className="fixed flex w-screen md:hidden backdrop-blur-sm">
        {sections.map((section) => (
          <NavHashLink
            smooth
            key={section.id}
            className={`flex items-center justify-center w-28 h-12 text-lg cursor-pointer transition duration-400 md:hover:text-tertiary  ${
              activeTab === section.id ? "text-accent bg-gradient-to-r from-transparent via-white to-transparent font-bold rounded" : ""}`}
            to={`#${section.id}`}
            activeClassName="selected"
          >
            {section.label}
          </NavHashLink>
        ))}
      </nav>
      <nav className="fixed bg-secondary pb-6 w-20 h-screen hidden md:flex flex-col justify-end items-center z-20">
        {sections.map((section) => (
          <NavHashLink
            smooth
            key={section.id}
            className={`flex items-center justify-center tracking-widest my-12 w-36 h-12 rounded-lg text-xl cursor-pointer transition duration-75 -rotate-90 origin-center hover:text-tertiary ${
              activeTab === section.id ? "bg-accent text-primary" : ""
            }`}
            to={`#${section.id}`}
            activeClassName="selected"
          >
            {section.label}
          </NavHashLink>
        ))}
      </nav>
    </>
  );
}
