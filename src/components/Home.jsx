import React from "react";
import { Reveal } from "./Reveal";

const Home = () => {
  const gradientStyle = {
    background:
      "radial-gradient(circle at 80% 80%, rgba(50, 50, 50, 1) 0%, rgba(20, 20, 20, 1) 100%)",
    height: "100vh",
  };

  return (
    <div
      id="home"
      style={gradientStyle}
      className="font-MSLight uppercase text-[0.6rem] text-gray-200 overflow-hidden w-full"
    >
      <div className="absolute bottom-[10vh] right-[6vw] w-[23em] overflow-clip">
        <Reveal>
          <div className="flex justify-end">Welcome to my page.</div>
          <div className="relative text-justify">
            I'm Sonja. I'm a frontend developer and UX designer based in Munich.
          </div>
        </Reveal>
      </div>
      <div className="absolute top-[25vh] sm:top-unset sm:pr-[4rem] sm:left-[10vw] right-[6vw] lg:pr-[4rem] lg:bottom-[10vh] lg:left-[10vw]">
        <div className=" p-4 w-[17rem] sm:w-[28rem] lg:w-[40rem] leading-[2.5rem] text-[2rem] sm:text-[3.5rem] sm:leading-[4rem] lg:text-[4.8rem] lg:leading-[5.5rem]">
          <Reveal>
            <p className="flex text-justify">Sonja Künzl</p>
          </Reveal>
          <Reveal>
            <p>Frontend</p>
          </Reveal>
          <Reveal>
            <div className="flex justify-end w-[17rem] sm:w-[28rem] lg:w-[40rem]">
              UX Design
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Home;
