"use client";

import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu(); // Close the menu after navigation
    }
  };

  return (
    <div className="bg-black w-full z-10 p-2 mt-2">
      <div className="max-w-screen-xl container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
          <Image alt="logo" src="/H (5).png" width={80} height={50} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden font-semibold md:flex space-x-8 ml-10 text-white">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            Home
          </a>
          <a href="#aboutt" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col p-6">
            <button className="self-end mb-4 text-black focus:outline-none" onClick={closeMenu}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col gap-6 mt-24 items-center">
              <a className="text-black" href="#home" onClick={(e) => handleScroll(e, "home")}>
                Home
              </a>
              <a className="text-black" href="#about" onClick={(e) => handleScroll(e, "about")}>
                About
              </a>
              <a className="text-black" href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                Projects
              </a>
              <a className="text-black" href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
