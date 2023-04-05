import React, { useState } from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import { getUserByToken } from "../../config/api";
import { createContactPerson } from "../../config/api";

const Contact = ({setContactPerson}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    enable_portal: true
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const user = await getUserByToken()
    const res = await createContactPerson({contact_id: user.contact_id, ...formData})
    setContactPerson(res.contact_person)
  }

  return (
    <div onChange={onChange}>
      <div className="md:flex gap-5 justify-between mt-4">
        <InputPrimary
          label={"first name"}
          name={"first_name"}
          placeholer={""}
        />
        <InputPrimary
          label={"last name"}
          name={"last_name"}
          placeholer={""}
        />
      </div>
      <div className="md:flex gap-5 justify-between mt-4">
      <InputPrimary
          label={"email"}
          name={"email"}
          placeholer={""}
        />
        <InputPrimary
          label={"phone"}
          name={"phone"}
          placeholer={""}
        />
      </div>
      <ButtonPrimary text={'Save'} handleClick={onSubmit} />
    </div>
  );
};

export default Contact;
