import React from "react";
import { Reveal } from "./Reveal";

const projects = [
  {
    imageSrc: "/assets/images/spryze.png",
    altText: "project image spryze",
    category: "ux design",
    title: "spryze",
    position: " sm:ml-[5rem] lg:mt-[5rem]",
  },
  {
    imageSrc: "/assets/images/plantify.png",
    altText: "project image plantify",
    category: "app development",
    title: "plantify",
    position: "ml-auto sm:mr-[7rem] lg:-mt-[12rem]",
  },
  {
    imageSrc: "/assets/images/vrbus2.png",
    altText: "project image vr",
    category: "vr research",
    title: "shuttle bus",
    position: " sm:mt-[10rem] sm:ml-[14rem] mb-[10rem] sm:mb-[20rem]",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="relative font-MSLight uppercase overflow-hidden w-full h-fit"
    >
      <div className="pl-[3rem] pr-[3rem] sm:pl-[5rem] sm:right-[10vw]">
        <div className="relative ml-auto sm:pr-[5rem] w-fit ">
          <Reveal>
            <h1 className="text-[4rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem]">
              Work
            </h1>
          </Reveal>
        </div>
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative mt-[3rem] max-w-[10rem] sm:max-w-[30vw] ${project.position}`}
            >
              <Reveal width="w-fit">
                <img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="object-cover w-full h-auto mb-2"
                />
                <p className="text-[0.6rem] sm:text-[0.6rem] mt-2 flex flex-col">
                  <span className="font-MSMedium">{project.category}</span>
                  {project.title}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
