import React, {useState, useEffect} from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";
import { getItems } from "../../config/api";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const getAllItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <DashHeading text={"List Items"} />
      {items?.length > 0 ? (
        <TableLayout data={items} />
      ) : (
        <div>No data is available</div>
      )}
    </>
  );
};


export default ListItems