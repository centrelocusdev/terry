import React, { useState } from "react";
import { BiToggleRight, BiToggleLeft } from "react-icons/bi";

const Pricing = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="md:p-16 p-8 bg-zinc-800 text-gray-100">
      <div className="md:flex justify-between items-end lg:mx-32">
        <div>
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            Best Value
          </h4>
          <h2 className="text-4xl font-semibold  leading-normal">
            Pricing Plans
          </h2>
        </div>

        <div className="flex gap-2 font-semibold items-center">
          <span className="text-sky-300"> Monthly</span>
          <button
            className={`${
              isActive ? "text-sky-300" : "text-pink-300"
            }  text-4xl`}
            onClick={toggleActive}
          >
            {isActive ? <BiToggleLeft /> : <BiToggleRight />}
          </button>
          <span className="text-pink-300">Yearly</span>
        </div>
      </div>

      <div className="md:flex gap-5 mt-8 justify-center items-center text-gray-600">
        {pricing.map((price, key) => (
          <div className="bg-white p-8 rounded-2xl md:w-1/4 flex flex-col gap-4 mt-4">
            <h2 className="font-bold capitalize text-3xl">{price.type}</h2>
            <p className="text-lg">{price.desc}</p>

            <h4 className="text-lg">
              <span className="text-3xl font-semibold">${price.price}</span> /month
            </h4>

            <ul className="list-disc list-inside translate-x-3 marker:text-sky-300 ">
              {price.features.map((f) => (
                <li className="my-3">{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const pricing = [
  {
    type: "free",
    desc: "create your first call for free",
    price: "0",
    features: [
      "Unlimited meeting",
      "Up to 100 Attendees",
      "40 minute limit",
      "3 whiteboards",
      "Group chat & file sharing",
    ],
  },
  {
    type: "meeting",
    desc: "Team in a growing campany",
    price: "9",
    features: [
      "Unlimited meeting",
      "Up to 100 Attendees",
      "40 minute limit",
      "3 whiteboards",
      "Group chat & file sharing",
    ],
  },
  {
    type: "business",
    desc: "big company choose this",
    price: "25",
    features: [
      "Unlimited meeting",
      "Up to 100 Attendees",
      "40 minute limit",
      "3 whiteboards",
      "Group chat & file sharing",
    ],
  },
];

export default Pricing;
