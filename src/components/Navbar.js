import React, { useState, useEffect, useRef } from "react";
import { NavHashLink } from "react-router-hash-link";
import { SECTIONS } from "../lib/data";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as per requirement
    );

    SECTIONS.forEach((section) => {
      const target = document.querySelector(`#${section.id}`);
      if (target) {
        observer.current.observe(target);
      }
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <>
      {/* nav bar for smaller screens */}
      <nav className="fixed flex w-screen md:hidden bg-secondary">
        {SECTIONS.map((section) => (
          <NavHashLink
            smooth
            key={section.id}
            className={`nav-btn flex items-center justify-center w-28 h-12 text-lg cursor-pointer transition duration-400 md:hover:text-tertiary  ${
              activeTab === section.id
                ? "text-accent bg-gradient-to-r from-transparent via-white to-transparent font-bold rounded"
                : ""
            }`}
            to={`#${section.id}`}
          >
            {section.label}
          </NavHashLink>
        ))}
      </nav>
      {/*nav bar for larger screens */}
      <nav className="fixed bg-secondary pb-6 w-16 h-screen hidden md:flex flex-col justify-end items-center z-20">
        {SECTIONS.map((section) => (
          <NavHashLink
            smooth
            key={section.id}
            className={`nav-btn flex items-center justify-center tracking-widest my-12 w-36 py-2 rounded-lg text-md cursor-pointer transition duration-75 -rotate-90 origin-center hover:text-tertiary ${
              activeTab === section.id ? "bg-accent text-primary" : ""
            }`}
            to={`#${section.id}`}
          >
            {section.label}
          </NavHashLink>
        ))}
      </nav>
    </>
  );
}
