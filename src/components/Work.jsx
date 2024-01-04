import React, { useState } from "react";
import { Reveal } from "./Reveal";
import DetailSpryze from "./DetailSpryze";

const projects = [
  {
    imageSrc: "/assets/images/spryze1.png",
    altText: "project image spryze",
    category: "ux design",
    title: "spryze",
    position: " sm:ml-[5rem] lg:mt-[5rem] sm:w-[40vw]",
  },
  {
    imageSrc: "/assets/images/plantify1.png",
    altText: "project image plantify",
    category: "app development",
    title: "plantify",
    position: "ml-auto sm:mr-[7rem] lg:-mt-[8rem] sm:w-[30vw]",
  },
  {
    imageSrc: "/assets/images/vrproject.png",
    altText: "project image vr",
    category: "vr research",
    title: "shuttle bus",
    position:
      " sm:mt-[7rem] sm:ml-[14rem] mb-[10rem] sm:mb-[20rem] sm:w-[35vw]",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };
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
              className={`relative mt-[3rem] w-[10rem] ${project.position}`}
              onClick={() => openProjectDetail(project)}
            >
              <Reveal width="w-fit">
                <div className="overflow-hidden h-auto">
                  <img
                    src={project.imageSrc}
                    alt={project.altText}
                    className="object-cover w-full h-auto grayscale hover:grayscale-0 z-50 transition duration-500 ease-in hover:scale-110 origin-center"
                  />
                </div>
                <p className="text-[0.6rem] sm:text-[0.6rem] mt-4 flex flex-col ">
                  <span className="font-MSMedium">{project.category}</span>
                  {project.title}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <>
          {selectedProject.title === "spryze" && (
            <DetailSpryze
              project={selectedProject}
              onClose={closeProjectDetail}
            />
          )}
          {/* {selectedProject.title === "plantify" && (
            // <DetailPlantify onClose={closeProjectDetail} />
          )}
          {selectedProject.title === "shuttle bus" && (
            <DetailShuttleBus onClose={closeProjectDetail} />
          )} */}
        </>
      )}
    </div>
  );
};

export default Work;
