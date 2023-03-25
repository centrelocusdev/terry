import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import users from "../../assets/users.svg"
import peace from "../../assets/peace.svg"

const Marketing = () => {
  return (
    <section className="md:p-16 p-8">
      <div className="flex items-center justify-center gap-16 my-16">
        <div className="md:w-fit mx-8 hidden md:block">
          <div className="w-[20rem] rounded-t-full">
            <img src={users} alt="" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            user friendly
          </h4>
          <h2 className="md:text-4xl text-2xl font-semibold ">
            User Friendliness of our{" "}
            <h2>
              Invoice management{" "}
              <span className="bg-yellow-200 rounded-tr-2xl px-4 leading-normal">
                system
              </span>
            </h2>
          </h2>

          <p className="leading-relaxed  md:text-normal text-justify text-gray-500 my-5">
            We understand that managing invoices can be a tedious and
            time-consuming task, which is why we've designed our software to be
            as user-friendly as possible. Our interface is intuitive and easy to
            navigate, and our customizable templates make it simple to create
            professional-looking invoices in minutes. Plus, our mobile-friendly
            design means you can manage your invoices on-the-go.
          </p>

          <div className="font-semibold text-sky-500">
            <div className="flex gap-1 items-center">
              <FaCheck className="" /> <span> Easy to Navigate</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaCheck className="" /> <span>Mobile Friendly</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaCheck className="" /> <span>Fully customized</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-16">
        <div className="md:w-1/2">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            benefits
          </h4>
          <h2 className="md:text-4xl text-2xl font-semibold">
            Get what all you need {" "}
            <h2>
              in your {" "}
              <span className="bg-sky-200 rounded-tr-2xl px-4 leading-normal">
                Pockets
              </span>
            </h2>
          </h2>

          <ul className="md:w-2/3 mt-3 flex flex-col gap-2 list-disc marker:text-sky-300">
            {
              benefits.map(b => (
                <li>{b}</li>
              ))
            }
          </ul>

          <div className="flex gap-1 items-center text-sky-500 font-semibold  ">
            <span>View case studies</span> <FaArrowRight />
          </div>
        </div>
        <div className="md:w-fit hidden md:block">
          <div className="w-[20rem] rounded-b-full">
            <img src={peace} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  'Save time and reduce errors with automated invoice generation',
  'Get paid faster with payment tracking and reminders',
  'Gain better insight into your finances with expense tracking and reporting',
  'Impress your clients with beautiful and professional-looking invoices',
  'Access your account from anywhere with our mobile-friendly design'
]

export default Marketing;
