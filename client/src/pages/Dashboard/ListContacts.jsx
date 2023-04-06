import React, {useState, useEffect} from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";
import { getContactPersons, getUserByToken } from "../../config/api";

const ListContacts = () => {
  const [contacts, setContacts] = useState([]);

  const contactPersons = async () => {
    const user = await getUserByToken()
    const data = await getContactPersons(user.contact_id);

    const contactFiltered = data.contact_persons.map(contact => {
      const { first_name, last_name, email, phone} = contact
      return { first_name, last_name, email, phone}
    })
    setContacts(contactFiltered);
  };

  

  useEffect(() => {
    contactPersons();
  }, []);

  return (
    <>
      <DashHeading text={"List Contact Persons"} />
      {contacts?.length > 0 ? (
        <TableLayout data={contacts} />
      ) : (
        <div>No data is available</div>
      )}
    </>
  );
};


export default ListContacts