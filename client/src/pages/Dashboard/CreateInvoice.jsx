import React, { useEffect, useState } from "react";
import DashHeading from "../../components/DashHeading";
import InputPrimary from "../../components/InputPrimary";
import Item from "./Item";
import { FiPlus, FiEye } from "react-icons/fi";
import Contact from "./Contact";
import ButtonPrimaryLight from "../../components/ButtonPrimaryLight";
import ButtonPrimary from "../../components/ButtonPrimary";
import { createInvoice, getItems, getContactPersons, getUserByToken } from "../../config/api";
import TableLayout from "../../components/TableLayout";
import { toast } from "react-toastify"

const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    invoice_number: "",
    discount: "",
    due_date: "",
    date: "",
    // tax_treatment: "",
    // recurring_invoice_id: "",
    // invoiced_estimate_id: ""
  });
  const [contactForms, setContactForms] = useState(1);
  const [itemForms, setItemForms] = useState(1);
  const [newItems, setNewItems] = useState([])
  const [newContacts, setINewContacts] = useState([])
  const [items, setItems] = useState([])
  const [contacts, setContacts] = useState([])

  const getAllItems = async () => {
    const res = await getItems()
   setItems(res.items)
  }

  console.log(newItems)

  const getAllContactPersons = async () => {
    const user = await getUserByToken()
    const res = await getContactPersons(user.contact_id)
    setContacts(res.contact_persons)
  }

  useEffect(() => {
    getAllItems()
    getAllContactPersons()
  }, [])

  const handleAddItemsClick = (e) => {
    e.preventDefault();
    setItemForms(itemForms+1);
  };

  const handleAddContactsClick = (e) => {
    e.preventDefault();
    setContactForms(contactForms+1);
  };

  const handleInvDataChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const setItemsArray = (value) => {
    const arr = [...newItems]
    const {item_id, name, rate, description, product_type} = value.item
    arr.push({item_id, name, rate, description, product_type})
    setNewItems(arr)
  }

  const setContactsArray = (value) => {
    const arr = [...newContacts]
    const {contact_person_id, first_name, last_name, email, phone} = value.contact_person
    arr.push({contact_person_id, first_name, last_name, email, phone})
    setINewContacts(arr)
  }

  const handleInvDataSubmit = async (e) => {
    e.preventDefault()
    if(!items.length) {
      toast.error("Add at least one item")
    } else if(!contacts.length ) {
      toast.error("Add at least one contact person")
    } else {
      const contactId = contacts.map(contact =>  contact.contact_person_id)
      const res = await createInvoice({...formData, line_items: newItems, contact_persons: contactId})
      console.log({...formData, line_items: items, contact_persons: contactId})
    }
  }

  return (
    <div className="text-gray-600">
      <DashHeading text="Create invoice" />

      <div
        className="mx-auto bg-white md:p-16 p-5 rounded flex flex-col gap-8 mt-5"
      >
        <div onChange={handleInvDataChange}>
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
              label={"date"}
              name={"date"}
              placeholer={""}
              type="date"
            />
            <InputPrimary
              label={"due date"}
              name={"due_date"}
              placeholer={""}
              type="date"
            />
          </div>
          {/* <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"place of supply"}
              name={"place_of_supply"}
              placeholer={""}
            />
            <InputPrimary
              label={"tax treatment"}
              name={"tax_treatment"}
              placeholer={""}
            />
          </div>
          <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"recurring invoice id"}
              name={"recurring_invoice_id"}
              placeholer={""}
            />
            <InputPrimary
              label={"invoiced estimate id"}
              name={"invoiced_estimate_id"}
              placeholer={""}
            />
          </div> */}
        </div>

        <div className="">
          <div className="flex justify-between border-b items-center">
            <h4 className="font-semibold text-xl text-gray-600">
              Item Details
            </h4>

            {/* <ButtonPrimaryLight icon={<FiEye />} text={'show items'} /> */}
          </div>
          
          {
            newItems.length > 0 && <div>
              <TableLayout data={newItems} />
              <h4 className="mt-6 font-semibold text-lg">Add More</h4>
            </div>
            
          }

          {Array(itemForms).fill(null).map((item,index)=>(
              <Item key={index} setItems={setItemsArray} /> 
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

          {
            newContacts.length > 0 && <div>
              <TableLayout data={newContacts} />
              <h4 className="mt-6 font-semibold text-lg">Add More</h4>
            </div>
            
          }

          {Array(contactForms).fill(null).map((item,index)=>(
            <Contact setContactPerson={setContactsArray} key={index}/>
          ))}
          <ButtonPrimaryLight
            icon={<FiPlus />}
            text={"Add Item"}
            handleClick={handleAddContactsClick}
          />
        </div>

        <div className="md:flex items-end justify-end">
          <ButtonPrimary text={'create invoice'} handleClick={handleInvDataSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
