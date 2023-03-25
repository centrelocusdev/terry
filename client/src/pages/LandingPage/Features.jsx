import React from "react";
import { BsLightning, BsBoundingBoxCircles, BsAlarm, BsRocket,BsCurrencyExchange } from "react-icons/bs"
import { MdOutlineAccountTree } from "react-icons/md"
import { FaRobot } from "react-icons/fa"

const Features = () => {
  return (
    <section className="md:px-16 px-4">
      <div className="text-center mt-8">
        <h4 className="text-sky-500 font-semibold text-sm uppercase">
          features
        </h4>
        <h2 className="text-4xl font-semibold">Get amazing benefits</h2>

        <div className="md:flex mx-auto flex-wrap gap-5 justify-center md:my-8">
          {
            features.map((f, i) => (
              <div className="md:w-1/4 flex flex-col gap-2 items-center text-center justify-center text-gray-600 border-2 border-blue-300 rounded-lg px-4 py-10 hover:-translate-y-3 transition-all cursor-pointer shadow-lg md:my-0 my-6">
            {f.icon} {" "}
            <h5 className="font-semibold text-xl">{f.title}</h5>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: <BsRocket  className="text-4xl text-blue-500" />,
    title: 'Customizable invoice templates',
  },
  {
    icon: <FaRobot  className="text-4xl text-blue-500" />,
    title: 'Automated  generation',
  },
  {
    icon: <BsAlarm  className="text-4xl text-blue-500" />,
    title: 'Payment tracking and reminders',
  },
  {
    icon: <MdOutlineAccountTree  className="text-4xl text-blue-500" />,
    title: 'Expense tracking and reporting',
  },
  {
    icon: <BsCurrencyExchange  className="text-4xl text-blue-500" />,
    title: 'Multi-currency support',
  },
  {
    icon: <BsLightning  className="text-4xl text-blue-500" />,
    title: 'Mobile-friendly design',
  }
]

export default Features;
