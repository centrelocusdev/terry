import React, { useEffect, useState } from "react";
import {
  FiUsers,
  FiUserPlus,
  FiPlusSquare,
  FiList,
  FiPieChart,
  FiSettings,
  FiMenu,
  FiX,
  FiFilePlus,
  FiLogOut
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout, getUserByToken } from "../../config/api";
import CreateContactPerson from "./CreateContactPerson";
import CreateInvoice from "./CreateInvoice";
import ListContactPersons from "./ListContacts";
import ListInvoices from "./ListInvoices";
import ListItems from "./ListItems";
import CreateItem from "./CreateItem";
import CreateContact from "./CreateContact";
import Profile from "./Profile";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState()

  useEffect(() => {
    async function runIt () {
      const user_res = await getUserByToken()
      setUser(user_res)
    }

    runIt()
  }, [])

  const tabs = [
    {
      title: "create contact",
      icon: <FiUserPlus />,
    },
    {
      title: "create invoice",
      icon: <FiPlusSquare />,
    },
    {
      title: "create contact person",
      icon: <FiUserPlus />,
    },
    {
      title: "create item",
      icon: <FiFilePlus />,
    },
    {
      title: "list invoices",
      icon: <FiList />,
    },
    {
      title: "list contacts",
      icon: <FiUsers />,
    },
    {
      title: "list items",
      icon: <FiPieChart />,
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  const [currentTab, setCurrentTab] = useState(tabs[0].title);
  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  const handleLogoutClick = async () => {
    const res = await logout()
    res && navigate('/')
  }

  return (
    <section className="md:flex ">
      <div
        className={`${
          toggleMenu ? "block" : "hidden"
        } md:w-1/5 w-2/3 md:block screen h-screen bg-indigo-dark text-gray-100 text-lg capitalize md:relative fixed z-10`}
      >
        <div className="flex flex-col h-full justify-between">
          <ul className="flex flex-col w-full gap-3 ">
            <h3
              onClick={() => navigate("/")}
              className=" text-3xl font-semibold p-5 cursor-pointer hover:bg-indigo-900"
            >
              Terri
            </h3>

            <div onClick={handleToggleMenu}>
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={(e) => handleCurrentTab(e.target.textContent)}
                  className={`${
                    tab.title == currentTab && "bg-indigo-900"
                  } flex gap-2 items-center cursor-pointer hover:bg-indigo-900 px-5 py-3`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </li>
              ))}
            </div>
          </ul>

          <div
            className="flex justify-between items-center bg-gray-900 p-5"
          >
            <button  onClick={() => handleCurrentTab("profile")} className="flex gap-2 items-center cursor-pointer hover:underline">
            <FiSettings />
            <span>Profile</span>
            </button>

            <button onClick={handleLogoutClick} title="Logout"><FiLogOut /></button>

          </div>
        </div>
      </div>
      <div className="md:w-4/5 h-screen overflow-y-scroll md:bg-gray-100 md:p-16">
        <div className="flex justify-between text-2xl font-semibold text-gray-100 bg-indigo-dark p-5 md:hidden top-0 fixed z-10 w-full">
          <h3
            onClick={() => navigate("/")}
            className="cursor-pointer hover:bg-indigo-900 text-3xl"
          >
            Terri
          </h3>
          <button
            onClick={handleToggleMenu}
            className=""
          >
            {toggleMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="md:p-0 p-8 md:m-0 mt-16">
          {tabs[0].title == currentTab && <CreateContact user={user} />}
          {tabs[1].title == currentTab && <CreateInvoice user={user} />}
          {tabs[2].title == currentTab && <CreateContactPerson />}
          {tabs[3].title == currentTab && <CreateItem user={user} />}
          {tabs[4].title == currentTab && <ListInvoices />}
          {tabs[5].title == currentTab && <ListContactPersons user={user} />}
          {tabs[6].title == currentTab && <ListItems />}
          {"profile" == currentTab && <Profile user={user}/>}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
