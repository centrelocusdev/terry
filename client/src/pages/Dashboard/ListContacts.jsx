import React, {useState, useEffect} from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";
import { getContactPersons, getInvoices } from "../../config/api";

const ListContacts = () => {
  const [contacts, setContacts] = useState([]);
  const getContactPersons = async () => {
    const data = await getContactPersons();
    setContacts(data);
  };

  useEffect(() => {
    getContactPersons();
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