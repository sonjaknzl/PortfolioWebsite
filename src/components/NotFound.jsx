import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const gradientStyle = {
    background:
      "radial-gradient(circle at 80% 80%, rgba(50, 50, 50, 1) 0%, rgba(20, 20, 20, 1) 100%)",
    height: "100vh",
  };
  return (
    <div
      style={gradientStyle}
      className="w-screen flex items-center justify-center h-screen bg-white font-MSLight text-[0.6rem] uppercase"
    >
      <div className="text-center">
        <h1 className="text-[4.8rem] font-bold mb-6 text-slate-300">
          404 - Not Found
        </h1>
        <p className=" text-slate-300">
          The page you are looking for might be in another castle.
        </p>
        <Link to="/" className="text-blue-500 hover:underline mt-2 block">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
