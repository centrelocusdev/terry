import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const API_URL = 'https://terry.thedelvierypointe.com' //prod
// const API_URL = 'http://127.0.0.1:8085'  //dev

const headers = {
  headers: {
    Authorization: `Token ${Cookies.get("terri-auth")}`,
  }
}

//register
export const register = async (formData) => {
  const res = await axios.post(`${API_URL}/register`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success('user registered')
    const user_res = await axios(`${API_URL}/user/${res.data.user.insertId}`)
    Cookies.set('terri-auth', user_res.data.user[0].token)
    return res.data
  } 
}

export const login = async (formData) => {
  const res = await axios.post(`${API_URL}/login`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success('user logged in')
    const user_res = await axios(`${API_URL}/user?email=${formData.email}`)
    Cookies.set('terri-auth', user_res.data.user[0].token)
    return res.data
  }
}

export const logout = async () => {
  Cookies.remove('terri-auth')
  toast.success('User logged out')
  return true
}

export const getUserByToken = async () => {
  const res = await axios.get(`${API_URL}/user-by-token/${Cookies.get('terri-auth')}`)
  if(res.data?.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data.user[0]
  }
}

export const insertContact = async (email, contact_id) => {
  const res = await axios.post(`${API_URL}/insert-contact?email=${email}&contact_id=${contact_id}`)

  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success('Contact inserted')
    return res
  }
}

/**Invoice api */
export const createContact = async (formData) => {
  const res = await axios.post(`${API_URL}/create-contact`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const createContactPerson = async (formData) => {
  const res = await axios.post(`${API_URL}/create-contact-person`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const createItem = async (formData) => {
  const res = await axios.post(`${API_URL}/create-item`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const createInvoice = async (formData) => {
  const res = await axios.post(`${API_URL}/create-invoice`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    console.log(res.data)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const getItems = async () => {
  const res = await axios.get(`${API_URL}/items`)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data
  }
}

export const getContactPersons = async (conatct_id) => {
  const res = await axios.get(`${API_URL}/contact-persons/${conatct_id}`)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data
  }
}

export const getInvoices = async () => {
  const res = await axios.get(`${API_URL}/invoices`)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data
  }
}

