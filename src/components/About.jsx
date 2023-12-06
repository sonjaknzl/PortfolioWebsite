import React from "react";

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
    <div id="about" className="relative h-[130vh] font-MSRegular uppercase">
      <div className="absolute left-10 text-[0.6rem] w-[65vw] md:w-[33vw] top-[25vh] md:top-[30vh] md:left-[60vw] z-10 text-justify text-gray-800">
        <p className="relative">
          I‘m a UX Design student & frontend developer with a passion for
          creating beautiful and functional digital experiences. <br />
          <br />I believe that combining my skills in design and programming
          allows me to approach projects from a unique perspective. This allows
          me to come up with solutions that are both visually appealing and
          technologically modern.
        </p>
        <div className="relative flex justify-between items-center pt-4">
          {renderIcons()}
        </div>
      </div>
      <h1 className="absolute text-[3rem] left-10 md:left-[60vw] md:top-[15vh] top-[13vh] lg:text-[8rem] lg:top-[65vh] lg:left-[50vw] z-10 text-gray-800">
        About
      </h1>
      <img
        className="absolute w-full top-[60vh] md:top-[40vh] md:left-[5vw] md:w-[50vw]"
        src="/assets/images/sonjakuenzl.jpeg"
        alt="photo of sonja"
      />
    </div>
  );
};

export default About;
