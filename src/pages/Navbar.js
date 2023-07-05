import React from "react";
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="#home" spy={true} smooth={true} offset={50} duration={500} className="nav-item">
        Home
      </Link>
      <Link to="#projects" spy={true} smooth={true} offset={50} duration={500} className="nav-item">
        Projects
      </Link>
      <Link to="#about" spy={true} smooth={true} offset={50} duration={500} className="nav-item" >
        About
      </Link>
    </nav>
  );
}
