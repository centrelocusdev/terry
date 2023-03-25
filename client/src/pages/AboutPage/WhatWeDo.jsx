import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import help from "../../assets/help.svg"

const WhatWeDo = () => {
  const tabs = ["our WhatWeDo", "our vission", "our goal"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleCurrentTab = (e) => {
    setCurrentTab(e.target.textContent);
  };

  return (
    <div className="md:flex md:p-16 gap-8 justify-center">
      <div className="md:w-1/2">
        <h4 className="text-sky-500 font-semibold text-sm uppercase">
          what we do
        </h4>
        <h2 className="md:text-4xl text-2xl font-semibold ">
         How{" "}
          <span className="bg-yellow-200 rounded-tr-2xl px-4 ml-2 leading-normal">
            Invoice management
          </span>{" "}
          <h2> system can help you</h2>
        </h2>

        <div className="text-gray-500 leading-7 mt-8">
          <p className="text-gray-500 my-5">
          With our software, you can create beautiful invoices in minutes, freeing up time to focus on other aspects of your business. Our customized solution will make it easy to create professional invoices that reflect your brand, and our automated invoice generation and payment tracking features help you get paid faster. 
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="w-[20rem] h-[22rem] rounded-br-full">
          <img src={help} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
