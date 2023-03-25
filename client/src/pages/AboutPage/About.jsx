import React from "react";
import balloons from "../../assets/balloons.svg"

const OurUsers = () => {
  return (
    <div className="md:flex md:p-16 gap-8 justify-center">
      <div className="hidden lg:block">
        <div className="w-[20rem] h-[22rem] rounded-tl-full">
          <img src={balloons} alt="" />
        </div>
      </div>

      <div className="md:w-1/2">
        <h4 className="text-sky-500 font-semibold text-sm uppercase">
          about us
        </h4>
        <h2 className="md:text-4xl text-2xl font-semibold ">
         Get to know {" "}
          <span className="bg-yellow-200 rounded-tr-2xl px-4 leading-normal">
            About us
          </span>{" "}
          <h2>in details</h2>
        </h2>

        <p className="text-gray-500 my-5">
        Our team has years of experience in developing software solutions that simplify business processes. We're passionate about balloonsing construction business owners save time and reduce stress by streamlining their invoice management.
        </p>

        <p className="text-gray-500 my-5">
        Terri is designed with the user in mind, and we're committed to providing exceptional customer service to ensure your success.
        </p>

        {/* <button className="flex gap-1 text-sky-500 items-center font-semibold">
          View Case Stduies <FaArrowRight />
        </button> */}
      </div>
    </div>
  );
};

export default OurUsers;
