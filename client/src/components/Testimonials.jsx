import React from "react";
import { BsHeartFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className="md:p-16 p-2">
      <div className="lg:w-2/3 w-fit mx-auto md:flex gap-8 rounded-2xl bg-indigo-dark md:p-12 p-5 text-gray-100">
        <div className="md:w-fit hidden md:block">
          <div className="bg-indigo-900 w-[13rem] h-[13rem] rounded-full"></div>
        </div>
        <div className="md:w-1/2 md:ml-6">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            testimonails
          </h4>
          <h2 className="md:text-3xl text-2xl font-semibold flex items-center gap-2">
            We <BsHeartFill className="text-rose-400" /> Feedbacks
          </h2>

          <p className="my-2 text-gray-300 md:text-left text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ea sapiente excepturi nobis, aliquid sed. Mollitia placeat, eaque a corrupti autem eius expedita accusamus perspiciatis nisi eos ipsa culpa vitae.
          </p>

          <div className="flex gap-4 font-semibold mt-4">
            <h5>- John Doe</h5>
            <h5>Director Growth Flag</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
