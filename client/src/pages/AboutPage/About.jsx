import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurUsers = () => {
  return (
    <div className="md:flex md:p-16 gap-8 justify-center">
      <div className="hidden lg:block">
        <div className="w-[20rem] h-[22rem] rounded-tl-full bg-gray-200"></div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptatem ut nulla, asperiores ipsam molestias sint voluptate.
        </p>

        <p className="text-gray-500 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptatem ut nulla, asperiores ipsam molestias sint voluptate optio
          et assumenda a quas! Voluptatum laboriosam natus laborum quia, commodi
          maxime esse.
        </p>

        <button className="flex gap-1 text-sky-500 items-center font-semibold">
          View Case Stduies <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OurUsers;
