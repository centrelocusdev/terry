import React from "react";
import { FiUser } from "react-icons/fi"

const Profile = ({user}) => {
  return <div className="bg-white rounded flex flex-col justify-center gap-4 items-center py-5 text-gray-600">
    <div className="p-5 rounded-full text-4xl bg-gray-100 border-4">
    <FiUser />
    </div>

    <div className="text-center">
      <h3 className="text-2xl font-semibold">{user.name}</h3>

      <h3 className="text-lg">{user.email}</h3>
    </div>
  </div>
}

export default Profile

