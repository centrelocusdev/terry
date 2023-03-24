import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Marketing = () => {
  return (
    <section className="md:p-16 p-8">
      <div className="flex justify-center gap-16 my-16">
        <div className="md:w-fit mx-8 hidden md:block">
          <div className="w-[20rem] h-[22rem] rounded-t-full bg-gray-200"></div>
        </div>
        <div className="md:w-1/2">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            marketing
          </h4>
          <h2 className="md:text-4xl text-2xl font-semibold ">
            Powerful alone{" "}
            <h2>
              unbeatable{" "}
              <span className="bg-yellow-200 rounded-tr-2xl px-4 leading-normal">
                Marketing
              </span>
            </h2>
          </h2>

          <p className="leading-relaxed md:w-2/3 md:text-normal text-justify text-gray-500 my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            nostrum neque nemo. Amet sapiente culpa esse repellat quasi
            laudantium soluta architecto, eveniet quidem optio cumque ut nihil
            ullam quaerat? Ex, eveniet sed.
          </p>

          <div className="font-semibold text-sky-500">
            <div className="flex gap-1 items-center">
              <FaCheck className="" />{" "}
              <span>Share multiple screens at a time</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaCheck className="" /> <span>High Quality screen</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-16">
        <div className="md:w-1/2">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            team management
          </h4>
          <h2 className="md:text-4xl text-2xl font-semibold">
            Manage team{" "}
            <h2>
              increase{" "}
              <span className="bg-sky-200 rounded-tr-2xl px-4 leading-normal">
                Productivity
              </span>
            </h2>
          </h2>

          <p className="leading-relaxed md:w-2/3 md:text-normal text-justify text-gray-500 my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            nostrum neque nemo. Amet sapiente culpa esse repellat quasi
            laudantium soluta architecto, eveniet quidem optio cumque ut nihil
            ullam quaerat? Ex, eveniet sed.
          </p>

          <div className="flex gap-1 items-center text-sky-500 font-semibold  ">
            <span>View case studies</span>  {" "}
            <FaArrowRight />
          </div>
        </div>
        <div className="md:w-fit hidden md:block">
          <div className="w-[20rem] h-[22rem] rounded-b-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
