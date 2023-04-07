const router = require("express").Router();
const axios = require("axios");
const CronJob = require("cron").CronJob;
const fs = require("fs");
const dotenv = require('dotenv')
const db = require('./connection')

const {
  CODE,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  ORGNIZATION_ID,
  REFRESH_TOKEN,
} = process.env;

var accToken = 'value'

const access_token =  async () => {
  db.query("SELECT * FROM accesstoken", (err, res) => {
    if(err) {
      console.log(err.message)
    } else {
      console.log(res)
      return res 
    } 
  })
}  

access_token()
console.log("access token", access_token())

const base_url = "https://www.zohoapis.in/invoice/v3";

//setting up headers
const headers = {
  headers: {
    Authorization: `Zoho-oauthtoken ${access_token()}`,
    "X-com-zoho-invoice-organizationid": ORGNIZATION_ID,
    "Content-Type": "application/json",
  },
};

console.log(headers)
//generate tokens
const generateTokens = async () => {
  try {
    const zoho_res = await axios.post(
      `https://accounts.zoho.in/oauth/v2/token?code=${CODE}`
    );

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
};
      
//regenerate tokens
const regenerateTokens = async () => {
  try {
    const zoho_res = await axios.post(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${REFRESH_TOKEN}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=refresh_token&redirect_uri=${REDIRECT_URI}`
    );

    //writing into env file
    const envConfig = dotenv.parse(fs.readFileSync('.env'));
    envConfig.ACCESS_TOKEN = zoho_res.data.access_token;
    console.log('token updated') 

    fs.writeFileSync('.env', Object.entries(envConfig).map(([key, value]) => `${key}=${value}`).join('\n'));

    //writing in tables
    const accesstoken = access_token()
    if(!accesstoken) {
      db.query('INSERT INTO accesstoken SET access_token = ? ', [zoho_res.data.access_token], (err, res) => {
        if(err) throw new Error(err)
      }) 
    } else {
      db.query('UPDATE accesstoken SET access_token = ? ', [zoho_res.data.access_token], (err, res) => {
        if(err) throw new Error(err)
      }) 
    }
  } catch (err) {
  }
};

// regenerateTokens()

const job = new CronJob("*/59 * * * *", async () => {
  await regenerateTokens()
});
job.start();

router.post("/regenerate-tokens", async () => {
  try {
    const zoho_res = await axios.post(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${REFRESH_TOKEN}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=refresh_token&redirect_uri=${REDIRECT_URI}`
    );

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//create contact
router.post("/create-contact", async (req, res) => {
  try {
    const zoho_res = await axios.post(
      `${base_url}/contacts`,
      req.body,
      headers
    );

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//create contact person
router.post("/create-contact-person", async (req, res) => {
  try {
    const zoho_res = await axios.post(
      `${base_url}/contacts/contactpersons`,
      req.body,
      headers
    );

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//create invocie
router.post("/create-invoice", async (req, res) => {
  try {
    const zoho_res = await axios.post(
      `${base_url}/invoices`,
      req.body,
      headers
    );

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//create item
router.post("/create-item", async (req, res) => {
  try {
    const zoho_res = await axios.post(`${base_url}/items`, req.body, headers);

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//get invoices
router.get("/invoices", async (req, res) => {
  try {
    const zoho_res = await axios.get(`${base_url}/invoices`, headers);
    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//get items
router.get("/items", async (req, res) => {
  try {
    const zoho_res = await axios.get(`${base_url}/items`, headers);

    res.send(zoho_res.data);
  } catch (err) {
    console.log(err)
    res.send({ err: err.response.data.message });
  }
});

//get all contacts
router.get("/contacts", async (req, res) => {
  try {
    const zoho_res = await axios.get(`${base_url}/contacts`, headers);

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

//get all contact persons
router.get("/contact-persons/:contact_id", async (req, res) => {
  try {
    const zoho_res = await axios.get(
      `${base_url}/contacts/${req.params.contact_id}/contactpersons`,
      headers
    );

    res.send(zoho_res.data);
  } catch (err) {
    res.send({ err: err.response.data.message });
  }
});

module.exports = router;
