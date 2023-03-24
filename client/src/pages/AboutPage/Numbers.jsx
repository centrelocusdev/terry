import React from "react";

const Numbers = () => {
  return (
    <div className="bg-gray-100 md:-mx-16">
      <div className="md:flex md:p-16 gap-8 md:w-2/3 mx-auto justify-between py-12">
        {numbers.map((num, key) => (
          <div>
            <h4 className="text-3xl font-semibold text-sky-500">
              {num.counts}
            </h4>
            <p className="text-gray-700 text-lg">{num.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const numbers = [
  {
    counts: "200",
    desc: "Countries Worldwide",
  },
  {
    counts: "156k",
    desc: "Registered User",
  },
  {
    counts: "23k",
    desc: "Small & Big Campanies",
  },
];

export default Numbers;
