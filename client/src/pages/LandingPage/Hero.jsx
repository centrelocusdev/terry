import React from "react";
import { FaCheck } from "react-icons/fa"

const Hero = () => {
  return (
    <div className="bg-indigo-dark h-[80%] text-gray-200 py-8">
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center text-center md:text-left">
        <div className="md:w-1/2 md:p-16 flex flex-col gap-5">
          <h2 className="md:text-5xl text-3xl font-semibold ">One <span className="md:bg-pink-500 px-3 rounded-tr-lg leading-relaxed">Platform</span> {" "}
            <h4>All kinds solution</h4>
          </h2>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis laboriosam reiciendis consequuntur! Nisi illo beatae illum ut! Harum, minus.
          </p>

          <button className="w-fit md:mx-0 mx-auto px-4 py-2 rounded-full bg-sky-500">Get Started for Free</button>

          <div className="md:flex gap-4 md:mx-0 mx-auto md:mx-left">
            <a href="" className="flex items-center gap-1"><FaCheck /> Pro cards required</a>
            <a href="" className="flex items-center gap-1"><FaCheck /> 30 days free trial</a>
          </div>
        </div>
        <div className="w-fit h-full p-16 hidden md:block">
          <div className="w-[15rem] h-[20rem] rounded-full bg-indigo-900">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
