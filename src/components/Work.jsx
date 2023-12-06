import React from "react";

const Work = () => {
  return (
    <div id="work" className="relative h-screen font-MSLight uppercase">
      <h1 className="absolute left-10 text-[5rem] md:text-[18rem] top-[2vh] md:left-auto md:right-[8vw]">
        Work
      </h1>
      <div className="absolute flex flex-col md:flex-row justify-between top-[20vh] md:top-[40vh] left-[10vw] md:left-[20vw] h-[70vh] w-[68vw]">
        <div className="relative">
          <img
            src="/assets/images/spryze.png"
            alt="project image spryze"
            className="object-cover h-[30vw] md:h-[20vw] w-[30vw] md:w-[20vw] z-10"
          />
          <p className="text-[2.5vw] sm:text-[1.2vw] lg:text-sm pt-2 flex flex-col">
            <span className="font-MSMedium">ux design</span> - spryze
          </p>
        </div>
        <div className="relative">
          <img
            src="/assets/images/plantify.png"
            alt="project image plantify"
            className="object-cover h-[30vw] md:h-[20vw] w-[30vw] md:w-[20vw] z-10"
          />
          <p className="text-[2.5vw] sm:text-[1.2vw] lg:text-sm pt-2 flex flex-col">
            <span className="font-MSMedium">app development</span> - plantify
          </p>
        </div>
        <div className="relative">
          <img
            src="/assets/images/vrbus.png"
            alt="project image vr"
            className="object-cover h-[30vw] md:h-[20vw] w-[30vw] md:w-[20vw] z-10"
          />
          <p className="text-[2.5vw] flex sm:text-[1.2vw] lg:text-sm pt-2 flex-col">
            <span className="font-MSMedium">vr research </span> - shuttle bus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
