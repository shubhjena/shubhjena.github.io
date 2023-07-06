import React, { useState, useEffect, useRef } from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar({ sections }) {
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
    <nav className="main-nav">
      {sections.map((section) => (
        <NavHashLink
          smooth
          key={section.id}
          className={`flex items-center justify-center text-white tracking-widest my-12   w-xl  w-36 h-12 rounded-lg text-xl cursor-pointer transition duration-75 transform -rotate-90 origin-center hover:text-yellow-400 ${
            activeTab === section.id ? "bg-rose-600 text-white" : ""
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
