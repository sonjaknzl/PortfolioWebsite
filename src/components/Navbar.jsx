import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="p-10 lg:p-12 pb-4 fixed w-full md:w-[100vh] z-30 backdrop-blur md:backdrop-blur-none">
      <div
        className={`md:origin-top-right md:rotate-[-90deg] md:-translate-x-full font-MSRegular uppercase flex md:justify-end text-[0.6rem] md:mt-4 text-gray-500`}
      >
        <div className="w-[12rem] sm:w-[15rem] md:w-[65vh] flex justify-between">
          <div
            className={`hidden md:block mt-[0.4rem] w-[15vh] border-t-[0.05rem] border-gray-500`}
          ></div>
          <Link
            className="cursor-pointer transform transition-transform hover:scale-110 ease-in"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="cursor-pointer transform transition-transform hover:scale-110 ease-in"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
          <Link
            className="cursor-pointer transform transition-transform hover:scale-110 ease-in"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
