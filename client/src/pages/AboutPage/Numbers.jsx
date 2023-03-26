import React from "react";

const Numbers = () => {
  return (
    <div className="bg-gray-100 md:-mx-16">
      <div className="flex md:flex-row flex-col items-center mb-5 md:p-16 gap-8 md:w-2/3 mx-auto justify-between py-12">
        {numbers.map((num, key) => (
          <div>
            <h4 className="text-3xl font-semibold text-sky-500">
              {num.counts}
            </h4>
            <p className="text-gray-700 text-lg font-semibold">{num.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const numbers = [
  {
    counts: "100%",
    desc: "Secure",
  },
  {
    counts: "100%",
    desc: "Customized",
  },
  {
    counts: "100%",
    desc: "Quality",
  },
];

export default Numbers;
