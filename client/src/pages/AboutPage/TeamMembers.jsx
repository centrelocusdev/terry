import React from "react";
import womenAvatar from "../../assets/women-avatar.webp";
import womenAvatar2 from "../../assets/women-avatar2.webp";
import boyAvatar from "../../assets/boy-avatar.webp";
import boyAvatar2 from "../../assets/boy-avatar2.webp";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const TeamMembers = () => {
  return (
    <section className="md:p-16 gap-8 text-center">
      <h4 className="text-sky-500 font-semibold text-sm uppercase">
        team members
      </h4>
      <h2 className="md:text-4xl text-2xl font-semibold ">Meet the crew</h2>

      <div className="md:flex justify-center mt-8">
        {team.map((member) => (
          <div className="md:w-1/5 m-4 justify-center items-center border rounded-t-full rounded p-5 text-gray-500 flex flex-col gap-3">
            <img
              src={member.avatar}
              alt=""
              className="w-32 h-32 rounded-full"
            />

            <h4 className="text-xl font-semibold text-gray-700">
              {member.name}
            </h4>
            <p className="capitalize">{member.role}</p>

            <div className="flex gap-2 justify-center items-center">
              <a href={member.links.twitter}>
                <FaTwitter />
              </a>
              <a href={member.links.facebook}>
                <FaFacebook />
              </a>
              <a href={member.links.instagram}>
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const team = [
  {
    avatar: boyAvatar,
    name: "susan coleman",
    role: "founder",
    links: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    avatar: womenAvatar,
    name: "debra covender",
    role: "co founder",
    links: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    avatar: boyAvatar2,
    name: "axel garcia",
    role: "web developer",
    links: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    avatar: womenAvatar2,
    name: "Lily smith",
    role: "Designer",
    links: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default TeamMembers;
