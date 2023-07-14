import React, { useState, useEffect, useRef } from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar({ sections }) {
  console.log("Navbar");
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
    <nav className="fixed bg-secondary pb-6 w-20 h-screen flex flex-col justify-end items-center z-20">
      {sections.map((section) => (
        <NavHashLink
          smooth
          key={section.id}
          className={`flex items-center justify-center tracking-widest my-12 w-36 h-12 rounded-lg text-xl cursor-pointer transition duration-75 transform -rotate-90 origin-center hover:text-tertiary ${
            activeTab === section.id ? "bg-accent text-primary" : ""
          }`}
          to={`#${section.id}`}
          activeClassName="selected"
        >
          {section.label}
        </NavHashLink>
      ))}
    </nav>
  );
}