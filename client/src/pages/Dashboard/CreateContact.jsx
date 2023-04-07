import React, { useEffect, useState } from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import DashHeading from "../../components/DashHeading";
import { createContact, insertContact } from "../../config/api";

const CreateContact = ({user}) => {
  const [basicInfo, setBasicInfo] = useState({
    contact_name: "",
    company_name: "",
    website: "",
    twitter: "",
    facebook: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    attention: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const onChangeBasicInfo = (e) => {
    setBasicInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeBillingAddress = (e) => {
    setBillingAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await createContact({
      ...basicInfo,
      billing_address: billingAddress,
    });
    if (res) {
      const contact_id = res?.contact.contact_id;
      const insert = await insertContact(user.email, contact_id);
    }
  };
 
  return (
    <>
      {user?.contact_id ? (
        <>
          <h2 className="text-4xl text-center">You Have Already Registered!</h2>
        </>
      ) : (
        <>
          <DashHeading text="create contact" />
          <div className="bg-white md:p-16 p-5 rounded mt-5">
            <div onChange={onChangeBasicInfo}>
              <h4 className="font-semibold text-xl text-gray-600 border-b">
                User Info
              </h4>
              <div className="md:flex gap-5 justify-between mt-4">
                <InputPrimary
                  label={"name"}
                  name={"contact_name"}
                  placeholer={""}
                />
                <InputPrimary
                  label={"company name"}
                  name={"company_name"}
                  placeholer={""}
                />
              </div>
              <div className="md:flex gap-5 justify-between mt-4">
                <InputPrimary
                  label={"twitter"}
                  name={"twitter"}
                  placeholer={""}
                />
                <InputPrimary
                  label={"facebook"}
                  name={"facebook"}
                  placeholer={""}
                />
              </div>
              <div className="md:flex gap-5 justify-between mt-4">
                <InputPrimary
                  label={"website"}
                  name={"website"}
                  placeholer={""}
                />
              </div>
            </div>

            <div onChange={onChangeBillingAddress} className="mt-5">
              <h4 className="font-semibold text-xl text-gray-600 border-b">
                Billing Address
              </h4>

              <div className="md:flex gap-5 justify-between mt-4">
                <InputPrimary
                  label={"attention"}
                  name={"attention"}
                  placeholer={""}
                />
                <InputPrimary
                  label={"address"}
                  name={"address"}
                  placeholer={""}
                />
              </div>
              <div className="md:flex gap-5 justify-between mt-4">
                <InputPrimary
                  label={"country"}
                  name={"country"}
                  placeholer={""}
                />
                <InputPrimary label={"state"} name={"state"} placeholer={""} />
              </div>
              <div className="md:flex gap-5 justify-between mt-4">
                <InputPrimary label={"city"} name={"city"} placeholer={""} />
                <InputPrimary label={"zip"} name={"zip"} placeholer={""} />
              </div>
            </div>
            <ButtonPrimary text={"Save"} handleClick={onSubmit} />
          </div>
        </>
      )}
    </>
  );
};

export default CreateContact;
