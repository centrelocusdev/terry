import React, { useState } from "react";
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
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CreateContact from "./CreateCustomer";
import CreateInvoice from "./CreateInvoice";
import ListCustomers from "./ListContacts";
import ListInvoices from "./ListInvoices";
import ListItems from "./ListItems";
import CreateItem from "./CreateItem";

const Dashboard = () => {
  const navigate = useNavigate();

  const tabs = [
    {
      title: "create invoice",
      icon: <FiPlusSquare />,
    },
    {
      title: "create customer",
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
      title: "list users",
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
            onClick={() => handleCurrentTab("profile")}
            className="flex gap-2 items-center cursor-pointer bg-gray-900 hover:bg-indigo-900 p-5"
          >
            <FiSettings />
            <span>Profile</span>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 h-screen overflow-y-scroll bg-gray-100 md:p-16">
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
          {tabs[0].title == currentTab && <CreateInvoice />}
          {tabs[1].title == currentTab && <CreateContact />}
          {tabs[2].title == currentTab && <CreateItem />}
          {tabs[3].title == currentTab && <ListInvoices />}
          {tabs[4].title == currentTab && <ListCustomers />}
          {tabs[5].title == currentTab && <ListItems />}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
