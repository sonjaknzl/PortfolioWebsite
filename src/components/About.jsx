import React from "react";
import { Reveal } from "./Reveal";

const icons = [
  {
    src: "/assets/stackicons/html.png",
    alt: "html icon",
    size: "h-[3vh] md:h-[3vh]",
  },
  {
    src: "/assets/stackicons/css.png",
    alt: "css icon",
    size: "h-[3vh] md:h-[3vh]",
  },
  {
    src: "/assets/stackicons/js.png",
    alt: "javascript icon",
    size: "h-[2vh] md:h-[3vh]",
  },
  {
    src: "/assets/stackicons/ts.png",
    alt: "typescript icon",
    size: "h-[2vh] md:h-[3vh]",
  },
  {
    src: "/assets/stackicons/mongodb.png",
    alt: "mongodb icon",
    size: "h-[3vh] md:h-[4vh]",
  },
  {
    src: "/assets/stackicons/node2.png",
    alt: "node icon",
    size: "h-[2vh] md:h-[2vh]",
  },
  {
    src: "/assets/stackicons/react.png",
    alt: "react icon",
    size: "h-[2.5vh] md:h-[3vh]",
  },
  {
    src: "/assets/stackicons/tailwind.png",
    alt: "tailwind icon",
    size: "h-[2vh] md:h-[2.5vh]",
  },
  {
    src: "/assets/stackicons/git.png",
    alt: "git icon",
    size: "h-[2.5vh] md:h-[3vh]",
  },
];

const renderIcons = () => {
  return icons.map((icon, index) => (
    <img
      key={index}
      className={`opacity-40 ${icon.size}`}
      src={icon.src}
      alt={icon.alt}
    />
  ));
};

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-[140vh] h-fit font-MSRegular uppercase overflow-x-hidden w-full pl-10 pr-10"
    >
      <div className="relative pt-[5rem] md:pt-0 md:absolute md:ml-[60vw] md:top-[15vh] lg:top-[65vh] lg:ml-[50vw] z-10">
        <Reveal>
          <h1 className="text-[3rem] sm:text-[4rem] lg:text-[8rem]  text-gray-800">
            About
          </h1>
        </Reveal>
      </div>
      <div className="relative pt-[0.5rem] md:pr-[2rem] text-[0.6rem] w-full sm:w-[65vw] md:w-[33vw] md:top-[30vh] md:ml-[60vw] z-10 text-justify text-gray-800">
        <Reveal>
          <p className="relative">
            I‘m a UX Design student & frontend developer with a passion for
            creating beautiful and functional digital experiences. <br />
            <br />
          </p>
        </Reveal>
        <Reveal>
          <p className="relative">
            I believe that combining my skills in design and programming allows
            me to approach projects from a unique perspective. This allows me to
            come up with solutions that are both visually appealing and
            technologically modern.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <div className="relative w-full sm:w-[65vw] md:w-[33vw] flex justify-between items-center pt-4">
            {renderIcons()}
          </div>
        </Reveal>
      </div>
      <div className="absolute w-full pt-20 sm:pt-0 sm:w-[65vw] sm:top-[60vh] md:top-[40vh] md:left-[5vw] md:w-[50vw]">
        <Reveal>
          <img src="/assets/images/sonjakuenzl.jpeg" alt="photo of sonja" />
        </Reveal>
      </div>
    </div>
  );
};

export default About;
