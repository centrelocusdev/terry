import React from "react";

const ButtonPrimary = ({icon, text }) => {
  return (
    <button className="px-4 py-2 rounded text-white bg-indigo-900 mt-3 md:float-right capitalize">
      {text}
    </button>
  );
};

export default ButtonPrimary;
