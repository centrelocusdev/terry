import React from "react";
import note from "../assets/note.png"

const EndBanner = () => {
  return (
    <section className="bg-indigo-dark md:py-16 p-8">
      <div className="md:flex justify-between items-center md:w-2/3 mx-auto">
        <div>
          <h2 className="uppercase text-sky-500 flex items-center text-sm text">
            Collaborate with us
          </h2>
          <h2 className="text-4xl text-gray-100 font-semibold my-3">Start building a high-performing website</h2>

          <button className="px-6 py-2 text-white bg-sky-500 rounded-full">Get started for free</button>
        </div>
        <img src={note} alt="" className="" />
      </div>
    </section>
  );
};

export default EndBanner;
