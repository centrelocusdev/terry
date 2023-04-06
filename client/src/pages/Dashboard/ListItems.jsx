import React, {useState, useEffect} from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";
import { getItems } from "../../config/api";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const getAllItems = async () => {
    const data = await getItems();
    const itemsFiltered = data.items.map(item => {
      const {
        name,
        status,
        description,
        rate
      } = item

      return {
        name,
        status,
        description,
        rate
      }
    })

    setItems(itemsFiltered);
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