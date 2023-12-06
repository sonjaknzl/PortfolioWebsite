import React from "react";

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
      className="font-MSLight uppercase text-[0.6rem] text-gray-200"
    >
      <div className="absolute bottom-[10vh] right-[6vw] w-[23em] ">
        <div className="flex justify-end">Welcome to my page.</div>
        <div className="relative text-justify">
          I'm Sonja. I'm a frontend developer and UX designer based in Munich.
        </div>
      </div>
      <div className="absolute text-justify p-4 leading-[2.5rem] text-[2rem] w-[17rem] top-[25vh] lg:top-unset right-[6vw] lg:pr-[4rem] lg:text-[6rem] lg:w-[55vw] lg:leading-[6.5rem] lg:bottom-[10vh] lg:left-[10vw]">
        Sonja Künzl Frontend
        <div className="flex justify-end">UX Design</div>
      </div>
    </div>
  );
};

export default Home;
