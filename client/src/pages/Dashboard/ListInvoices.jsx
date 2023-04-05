import React, { useEffect, useState } from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";
import { getInvoices } from "../../config/api";

const ListInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const getInv = async () => {
    const inv = await getInvoices();
    setInvoices(inv);
  };

  useEffect(() => {
    getInv();
  }, []);

  return (
    <>
      <DashHeading text={"List invoices"} />
      {invoices?.length > 0 ? (
        <TableLayout data={invoices} />
      ) : (
        <div>No data is available</div>
      )}
    </>
  );
};

const temp_invoices = [
  {
    invoice_number: "INV-000001",
    status: "draft",
    date: "2023-03-30",
    due_date: "2023-04-01",
    email: "rupali.h@esrotlab.com",
    currency_code: "INR",
    created_by: "Rupali Haldiya",
    balance: "120",
    is_emailed: "false",
  },
  {
    invoice_number: "INV-000002",
    status: "draft",
    date: "2023-03-30",
    due_date: "2023-04-01",
    email: "rupali.h@esrotlab.com",
    currency_code: "INR",
    created_by: "Rupali Haldiya",
    balance: "120",
    is_emailed: "false",
  },
  {
    invoice_number: "INV-000003",
    status: "draft",
    date: "2023-03-30",
    due_date: "2023-04-01",
    email: "rupali.h@esrotlab.com",
    currency_code: "INR",
    created_by: "Rupali Haldiya",
    balance: "120",
    is_emailed: "false",
  },
];

export default ListInvoices;
