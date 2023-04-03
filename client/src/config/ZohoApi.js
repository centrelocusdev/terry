import axios from "axios";
import { toast } from "react-toastify";

const base_url = "https://www.zohoapis.in/invoice/v3";
const {
  VITE_zoho__code,
  VITE_zoho__client_id,
  VITE_zoho__client_secret,
  VITE_zoho__redirect_uri,
  VITE_zoho__orgnization_id,
  VITE_zoho__refresh_token,
} = import.meta.env;

const headers = {
  headers: {
    Authorization: `Zoho-oauthtoken ${localStorage.getItem("access_token")}`,
    "X-com-zoho-invoice-organizationid": VITE_zoho__orgnization_id,
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    mode: "cors",
  },
}

//generate token
export const generate_tokens = async () => {
  try {
    const res = await axios.post(
      `https://accounts.zoho.in/oauth/v2/token?code=${VITE_zoho__code}`
    );
    res.data.code == 0 && toast.success("Tokens generated");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

//regenerate token
export const regenerate_tokens = async () => {
  try {
    const res = await axios.post(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${VITE_zoho__refresh_token}&client_id=${VITE_zoho__client_id}&client_secret=${VITE_zoho__client_secret}&grant_type=refresh_token&redirect_uri=${VITE_zoho__redirect_uri}`
    );
    res.data.code == 0 && toast.success("Tokens regenerated");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

//create contact or orgnization
export const create_contact = async (formData) => {
  try {
    const res = await axios.post(`${base_url}/contacts`, JSON.stringify(formData), headers);
    res.data.code == 0 && toast.success("Created new contact");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

// create contact person
export const create_contact_person = async (formData) => {
  try {
    const res = await axios.post(
      `${base_url}/contacts/contactpersons`,
      formData,
      headers
    );
    res.data.code == 0 && toast.success("Created new contact person");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

// create invoice
export const create_invoice = async (formData) => {
  try {
    const res = await axios.post(`${base_url}/invoices`, formData, headers);
    res.data.code == 0 && toast.success("Invoice created");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

//create item
export const create_item = async (formData) => {
  try {
    const res = await axios.post(`${base_url}/invoices`, formData, headers);
    res.data.code == 0 && toast.success("Item created");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

//get invoices
export const get_invoices = async (formData) => {
  try {
    const res = await axios.get(`${base_url}/invoices`, headers);
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

//get items
export const get_items = async () => {
  try {
    const res = await axios.get(`${base_url}/items`, headers);
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};

// export const refresh_access_token = async (refresh_token) => {
//   const res = await fetch(
//     `https://accounts.zoho.in/oauth/v2/token?refresh_token=${VITE_zoho__refresh_token}&client_id=${VITE_zoho__client_id}&client_secret=${VITE_zoho__client_secret}&grant_type=refresh_token&redirect_uri=${VITE_zoho__redirect_uri}`,
//     {
//       method: "POST",
//       body: JSON.stringify(
//         { refresh_token },
//       ),
//       headers
//     }
//   );

//   const data = await response.json();
//   return data.access_token;
// };

// Function to refresh the access token using the refresh token
async function refreshAccessToken(refreshToken) {
  const response = await fetch(
    `https://accounts.zoho.in/oauth/v2/token?refresh_token=${VITE_zoho__refresh_token}&client_id=${VITE_zoho__client_id}&client_secret=${VITE_zoho__client_secret}&grant_type=refresh_token&redirect_uri=${VITE_zoho__redirect_uri}`,
    {
      method: "POST",
      body: JSON.stringify({ refresh_token: refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.access_token;
}

setInterval(() => {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const expirationTime = parseInt(localStorage.getItem("expiration_time"));

  if (Date.now() >= expirationTime) {
    refreshAccessToken(refreshToken).then((newAccessToken) => {
      const expirationTime = Date.now() + 3600 * 1000;
      localStorage.setItem("access_token", newAccessToken);
      localStorage.setItem("expiration_time", expirationTime);
    });
  }
}, 3300000); // Refresh every 55 minutes (in milliseconds)
