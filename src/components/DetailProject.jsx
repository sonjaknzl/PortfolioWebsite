// DetailProject.js
import React from "react";

const DetailProject = ({ project, onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <button
        className="mt-8 bg-gray-700 text-white px-4 py-2 rounded-md"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default DetailProject;
