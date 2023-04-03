import React from "react";

const ButtonPrimary = ({icon, text, handleClick }) => {
  return (
    <button onClick={handleClick} className="px-4 py-2 rounded text-white bg-indigo-900 mt-3 capitalize">
      {text}
    </button>
  );
};

export default ButtonPrimary;
