import React from "react";
import InputPrimary from "../../components/InputPrimary";

const Contact = () => {
  return (
    <section className="md:p-16">
      <div className="md:flex px-8 gap-8 justify-center">
        <div className="hidden lg:block">
          <div className="w-[20rem] h-[22rem] rounded-tl-full bg-gray-200"></div>
        </div>

        <div className="md:w-1/2 mt-6 md:ml-8">
          <h4 className="text-sky-500 font-semibold text-sm uppercase">
            say hello
          </h4>
          <h2 className="md:text-4xl text-2xl font-semibold ">
            We would pleased to hear
          </h2>

          <form action="" className="mt-8">
            <div className="md:flex gap-5 justify-between mt-4">
              <InputPrimary
                label={"your name"}
                name={"name"}
                placeholer={"e.g. Roe Smith"}
              />
              <InputPrimary
                label={"email address"}
                name={"email"}
                placeholer={"example@mail.com"}
              />
            </div>
            <div className="md:flex gap-5 justify-between mt-4">
              <InputPrimary
                label={"phone number"}
                name={"phone"}
                placeholer={"e.g. +55 695 6956"}
              />
              <InputPrimary
                label={"website"}
                name={"website"}
                placeholer={"website.com"}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor={"message"}
                className="uppercase text-md font-semibold text-gray-600"
              >
                Message
              </label>
              <textarea
                name="message"
                className="border w-full h-24 rounded-xl mt-1"
              ></textarea>
            </div>

            <button className="rounded-full px-4 py-2 bg-sky-500 text-white mt-4 hover:bg-sky-400">
              Submit Message
            </button>
          </form>
        </div>
      </div>

      <div className="md:w-2/3 md:h-72 mx-auto mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144060815!2d2.292292615188039!3d48.8583736086627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1679396923518!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full md:rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
