import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navColor, setNavColor] = useState("text-gray-200");
  const [borderColor, setBorderColor] = useState("border-gray-200");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const triggerPosition = screenHeight * 0.92;
      const triggerPosition2 = screenHeight * 3.3 * 0.94;

      // Change the color when scrolled below the calculated trigger position
      if (
        scrollPosition >= triggerPosition &&
        scrollPosition <= triggerPosition2
      ) {
        setNavColor("text-gray-800");
        setBorderColor("border-gray-800");
      } else {
        setNavColor("text-gray-200");
        setBorderColor("border-gray-200");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-10 lg:p-12 fixed w-[100vh] z-10">
      <div
        className={`md:origin-top-right md:rotate-[-90deg] md:-translate-x-full font-MSRegular uppercase flex md:justify-end text-[0.6rem] text-gray-200 md:mt-4 ${navColor}`}
      >
        <div className="w-[50vw] md:w-[55vh] flex justify-between">
          <div
            className={`hidden md:block mt-[0.4rem] w-[15vh] border-t-[0.05rem] ${borderColor}`}
          ></div>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
