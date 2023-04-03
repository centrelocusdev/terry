import React, { useState } from "react";
import DashHeading from "../../components/DashHeading";
import InputPrimary from "../../components/InputPrimary";
import Item from "./Item";
import { FiPlus } from "react-icons/fi";
import Contact from "./Contact";
import ButtonPrimaryLight from "../../components/ButtonPrimaryLight";
import ButtonPrimary from "../../components/ButtonPrimary";
import { create_invoice } from "../../config/ZohoApi";

const CreateInvoice = () => {
  const [contactForms, setContactForms] = useState(1);
  const [itemForms, setItemForms] = useState(1);
  const handleAddItemsClick = (e) => {
    e.preventDefault();
    setItemForms(itemForms+1);
  };

  const handleAddContactsClick = (e) => {
    e.preventDefault();
    setContactForms(contactForms+1);
  };

  const [formData, setFormData] = useState({
    invoice_number: "",
    discount: "",
    dueDate: "",
    date: "",
  });

  const handleInvDataChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleInvDataSubmit = async (e) => {
    e.preventDefault()
    // const res = await create_invoice(formData)
    console.log(formData)
  }

  return (
    <div className="">
      <DashHeading text="Create invoice" />

      <form
        action=""
        onChange={handleInvDataChange}
        onSubmit={handleInvDataSubmit}
        className="mx-auto bg-white md:p-16 p-5 rounded flex flex-col gap-8 mt-5"
      >
        <div className="">
          <h4 className="font-semibold text-xl text-gray-600 border-b">
            Invoice Details
          </h4>
          <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"invoice number"}
              name={"invoice_number"}
              placeholer={"#INV-001"}
            />
            <InputPrimary
              label={"discount(%)"}
              name={"discount"}
              placeholer={""}
            />
          </div>
          <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"due date"}
              name={"due date"}
              placeholer={""}
              type="date"
            />
            <InputPrimary
              label={"date"}
              name={"date"}
              placeholer={""}
              type="date"
            />
          </div>
        </div>

        <div className="">
          <h4 className="font-semibold text-xl text-gray-600 border-b">
            Item Details
          </h4>
          {Array(itemForms).fill(null).map((item,index)=>(
              <Item key={index} /> 
            ))}
          <ButtonPrimaryLight
            icon={<FiPlus />}
            text={"Add Item"}
            handleClick={handleAddItemsClick}
          />
        </div>

        <div className="">
          <h4 className="font-semibold text-xl text-gray-600 border-b">
            Customer Details
          </h4>
          {Array(contactForms).fill(null).map((item,index)=>(
            <Contact/>
          ))}
          <ButtonPrimaryLight
            icon={<FiPlus />}
            text={"Add Item"}
            handleClick={handleAddContactsClick}
          />
        </div>

        <div className="md:flex items-end justify-end">
          <ButtonPrimary text={'create invoice'} />
        </div>
      </form>
    </div>
  );
};

export default CreateInvoice;
