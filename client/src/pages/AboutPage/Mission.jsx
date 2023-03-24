import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Mission = () => {
  const tabs = ["our mission", "our vission", "our goal"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleCurrentTab = (e) => {
    setCurrentTab(e.target.textContent);
  };

  return (
    <div className="md:flex md:p-16 gap-8 justify-center">
        <div className="md:w-1/2">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            who we are
          </h4>
          <h2 className="md:text-4xl text-2xl font-semibold ">
            Getting you the {" "}
            <span className="bg-yellow-200 rounded-tr-2xl px-4 leading-normal">
              Best
            </span>{" "}
            <h2>in the world</h2>
          </h2>

          <div className="flex items-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                onClick={handleCurrentTab}
                className={`${
                  tab == currentTab && "text-sky-500 border-sky-500"
                } rounded-full px-4 py-2 font-semibold text-sm border capitalize`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-gray-500 leading-7 mt-8">
            {currentTab === tabs[0] && (
              <div>
                <p className="my-2">
                  Our mission is lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Provident ea voluptate inventore et
                  voluptates reprehenderit cupiditate perferendis ab ipsam
                  maiores. Sequi praesentium repellat nobis quas nihil nemo
                  molestias, libero perspiciatis!
                </p>

                <p className="my-2">
                  Sequi praesentium repellat nobis quas nihil nemo molestias,
                  libero perspiciatis!
                </p>
              </div>
            )}
            {currentTab === tabs[1] && (
              <div>
                <p className="my-2">
                  Our vission is lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Provident ea voluptate inventore et
                  voluptates reprehenderit cupiditate perferendis ab ipsam
                  maiores. Sequi praesentium repellat nobis quas nihil nemo
                  molestias, libero perspiciatis!
                </p>

                <p className="my-2">
                  Sequi praesentium repellat nobis quas nihil nemo molestias,
                  libero perspiciatis!
                </p>
              </div>
            )}
            {currentTab === tabs[2] && (
              <div>
                <p className="my-2">
                  Our goal is lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Provident ea voluptate inventore et
                  voluptates reprehenderit cupiditate perferendis ab ipsam
                  maiores. Sequi praesentium repellat nobis quas nihil nemo
                  molestias, libero perspiciatis!
                </p>

                <p className="my-2">
                  Sequi praesentium repellat nobis quas nihil nemo molestias,
                  libero perspiciatis!
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="w-[20rem] h-[22rem] rounded-br-full bg-gray-200"></div>
        </div>
      </div>
  );
};


export default Mission;
