import React from "react";

const ButtonPrimaryLight = ({icon, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-4 py-2 rounded text-indigo-dark bg-gray-100 md:m-3 my-3 md:float-right"
    >
      {icon} {text}
    </button>
  );
};

export default ButtonPrimaryLight;
