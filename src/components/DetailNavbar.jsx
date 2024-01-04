import React from "react";

const DetailNavbar = ({ onClose }) => {
  return (
    <div className=" p-12 pb-4 fixed w-full md:w-[100vh] z-40 backdrop-blur md:backdrop-blur-none">
      <div className="md:origin-top-right md:rotate-[-90deg] md:-translate-x-full font-MSRegular text-[0.6rem] text-gray-500">
        <div className="flex justify-end">
          <div className="hidden md:block mt-[0.4rem] w-[5rem] border-t-[0.05rem] border-gray-500"></div>
          <button
            className="uppercase z-50 pl-[2rem] pr-[1rem] text-left block transform transition-transform hover:scale-110 "
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailNavbar;
