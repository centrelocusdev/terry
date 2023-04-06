import React, { useEffect, useState } from "react";
import DashHeading from "../../components/DashHeading";
import TableLayout from "../../components/TableLayout";
import { getInvoices } from "../../config/api";

const ListInvoices = () => {
  const [data, setData] = useState([]);
  const [billingAddress, setBillingAddress] = useState();
  const getInv = async () => {
    const invoices = await getInvoices();
    const invoicesFiltered = invoices.invoices.map((invoice) => {
      const {
        invoice_number,
        company_name,
        created_by,
        customer_name,
        date,
        due_date,
        email,
        billing_address: { address, city, country, state, zipcode },
      } = invoice;

      return {
        invoice_number,
        company_name,
        created_by,
        customer_name,
        date,
        due_date,
        email,
        // billing_address: {
        //   address,
        //   city,
        //   country,
        //   state,
        //   zipcode,
        // },
      };
    });

    setData(invoicesFiltered.reverse());
  };

  console.log(data);
  useEffect(() => {
    getInv();
  }, []);

  return (
    <>
      <DashHeading text={"List invoices"} />
      {data?.length > 0 ? (
        <div className="flex md:flex-row flex-col w-full gap-5 justify-between mt-5">
          {data.map((d) => (
            <div className="bg-white md:w-1/2 rounded-lg text-gray-600 md:p-5 p-2 shadow border">
              {Object.keys(d).map((key) => (
                <div className="flex md:p-2 py-2 gap-5 justify-between md:text-lg capitalize">
                  <div className="md:w-1/2">
                    <h2>{key.split("_").join(" ")}</h2>
                  </div>
                  <span>:</span>
                  <div className="md:w-1/2">
                    <p className="text-left">{d[key]}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
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
