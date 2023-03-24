import React from "react";
import { BsLightning, BsBoundingBoxCircles } from "react-icons/bs"
import { MdOutlineAccountTree } from "react-icons/md"

const Features = () => {
  return (
    <section className="md:px-16 px-4">
      {/* <div className="text-center py-8">
        <h4 className="text-gray-600 font-semibold text-lg">
          Big & Small business trusted us
        </h4>
        <div className="flex overflow-hidden gap-4 justify-center text-2xl font-semibold text-gray-500">
          <div>jQuery</div>
          <div>GitHub</div>
          <div>Portis</div>
          <div>envato</div>
          <div>TrustGo</div>
        </div>
      </div> */}

      <div className="text-center mt-8">
        <h4 className="text-sky-500 font-semibold text-sm uppercase">
          features
        </h4>
        <h2 className="text-4xl font-semibold">Get amazing benefits</h2>

        <div className="md:flex gap-5 justify-center md:my-8">
          {
            features.map((f, i) => (
              <div className="md:w-1/4 flex flex-col gap-2 items-center text-center justify-center text-gray-600 border-2 border-blue-300 rounded-lg px-4 py-6 hover:-translate-y-3 transition-all cursor-pointer shadow-lg md:my-0 my-6">
            {f.icon} {" "}
            <h5 className="font-semibold text-xl">{f.title}</h5>
            <p className="text-gray-400 tracking-4">{f.desc}</p>
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
    icon: <BsLightning  className="text-3xl text-blue-500" />,
    title: 'Fast  Performance ',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit culpa ab voluptatem'
  },
  {
    icon: <MdOutlineAccountTree  className="text-3xl text-blue-500" />,
    title: 'Easy to setup',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit culpa ab voluptatem'
  },
  {
    icon: <BsBoundingBoxCircles  className="text-3xl text-blue-500" />,
    title: 'Simple and clean UI',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit culpa ab voluptatem'
  }
]

export default Features;
