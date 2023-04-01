import React from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";

const ListInvoices = () => {
  const headings = [
    "s.n", 
    "invoice number",
    "status",
    "date",
    "due date",
    "email",
    "currency",
    "created by",
    "balance",
    "emailed",
  ];

  return (
    <>
      <DashHeading text={"List invoices"} />
      <TableLayout data={temp_invoices} />
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
