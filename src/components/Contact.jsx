import React from "react";

const Contact = () => {
  const gradientStyle = {
    background:
      "radial-gradient(circle at 80% 80%, rgba(50, 50, 50, 1) 0%, rgba(20, 20, 20, 1) 100%)",
    height: "100vh",
  };
  return (
    <div
      id="contact"
      style={gradientStyle}
      className="relative font-MSLight uppercase text-[0.6rem] text-gray-200"
    >
      <h1 className="absolute text-right right-8 text-[3rem] md:text-[12vw] bottom-[15vh] text-gray-200">
        Contact me
      </h1>
      <div className="absolute text-[8vw] md:text-[3rem] top-[20vh] left-[26vw]">
        <a
          className="block pb-4"
          href="https://www.linkedin.com/in/sonja-künzl-879aba172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="block pb-4"
          href="https://github.com/sonjaknzl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="block pb-4"
          href="mailto:sonjakuenzl@aol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mail
        </a>
      </div>
    </div>
  );
};

export default Contact;
