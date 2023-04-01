import React from "react";

const DashHeading = ({text}) => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold uppercase text-gray-600 underline">
        {text}
      </h2>
    </div>
  );
};

export default DashHeading;
