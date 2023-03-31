import React, { useState } from "react";
import DashHeading from "../../components/DashHeading";
import InputPrimary from "../../components/InputPrimary";
import Item from "./Item";
import {FiPlus} from "react-icons/fi"
import Contact from "./Contact";
import ButtonPrimaryLight from "../../components/ButtonPrimaryLight";

const CreateInvoice = () => {
  const [itemCount, setItemCount] = useState([{item: <Item />}])
  const handleAddItemsClick = (e) => {
    e.preventDefault()
    setItemCount(itemCount.push({item: <Item />}))
  }

  return (
    <div className="">
      <DashHeading text="Create invoice" />

      <form action="" className="mx-auto bg-white md:p-16 p-5 rounded flex flex-col gap-8 mt-5">
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
          {
            itemCount.map(i => (
              i.item
            ))
          }
          <ButtonPrimaryLight icon={<FiPlus />} text={'Add Item'} handleClick={handleAddItemsClick} />
        </div>

        <div className="">
          <h4 className="font-semibold text-xl text-gray-600 border-b">
            Customer Details
          </h4>
          <Contact />
          <ButtonPrimaryLight icon={<FiPlus />} text={'Add Item'} handleClick={handleAddItemsClick} />
        </div>
        
      </form>
    </div>
  );
};

export default CreateInvoice;
