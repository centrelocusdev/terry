import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:p-16 p-8 md:flex justify-center gap-16 text-gray-600">
      <div className="md:w-fit mx-8">
        <h4 className="text-sky-500 font-semibold text-sm uppercase">
          questions and answers
        </h4>
        <h2 className="text-4xl font-semibold  leading-normal">
          Frequently asked{" "}
          <h4 className="bg-pink-200 rounded-tr-2xl px-4 w-fit">Questions</h4>
        </h2>

        <div className="mt-5">
          <h5 className="font-semibold text-lg">Don't get Answer ?</h5>
          <p className="text-gray-400">
            We will answer you in less than 2 hours
          </p>
        </div>

        <button className="font-semibold text-sky-500 mt-4 flex gap-1 items-center">
          Leave us a message <FaArrowRight />
        </button>
      </div>
      <div className="md:w-1/2">
        {questions.map((q, index) => (
          <div key={index} className="mt-4">
            <div
              className="flex justify-between items-center border px-4 py-1 rounded-lg cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <h3 className="text-lg">{q.question}</h3>
              <span className="ml-3 text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && <p className="mt-2 border p-4 rounded-lg">{q.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

const questions = [
  {
    question: "What is staco?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo deserunt ab ullam explicabo, autem harum sapiente earum numquam cum.",
  },
  {
    question: "Does it support crypto payment?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo deserunt ab ullam explicabo, autem harum sapiente earum numquam cum.",
  },
  {
    question: "When it will come?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo deserunt ab ullam explicabo, autem harum sapiente earum numquam cum.",
  },
  {
    question: "How can I create a call?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo deserunt ab ullam explicabo, autem harum sapiente earum numquam cum.",
  },
  {
    question: "How long I can continue free plan?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo deserunt ab ullam explicabo, autem harum sapiente earum numquam cum.",
  },
];

export default Faqs;
