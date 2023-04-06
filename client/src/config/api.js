import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const API_URL_PROD = 'https://terry.thedelvierypointe.com'
const API_URL_DEV = 'http://127.0.0.1:8085'

const headers = {
  headers: {
    Authorization: `Token ${Cookies.get("terri-auth")}`,
  }
}

//register
export const register = async (formData) => {
  const res = await axios.post(`${API_URL_DEV}/register`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success('user registered')
    const user_res = await axios(`${API_URL_DEV}/user/${res.data.user.insertId}`)
    Cookies.set('terri-auth', user_res.data.user[0].token)
    return res.data
  } 
}

export const login = async (formData) => {
  const res = await axios.post(`${API_URL_DEV}/login`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success('user logged in')
    const user_res = await axios(`${API_URL_DEV}/user?email=${formData.email}`)
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
  const res = await axios.get(`${API_URL_DEV}/user-by-token/${Cookies.get('terri-auth')}`)
  if(res.data?.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data.user[0]
  }
}

export const insertContact = async (email, contact_id) => {
  const res = await axios.post(`${API_URL_DEV}/insert-contact?email=${email}&contact_id=${contact_id}`)

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
  const res = await axios.post(`${API_URL_DEV}/create-contact`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const createContactPerson = async (formData) => {
  const res = await axios.post(`${API_URL_DEV}/create-contact-person`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const createItem = async (formData) => {
  const res = await axios.post(`${API_URL_DEV}/create-item`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    toast.success(res.data.message)
    return res.data
  }
}

export const createInvoice = async (formData) => {
  const res = await axios.post(`${API_URL_DEV}/create-invoice`, formData)
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
  const res = await axios.get(`${API_URL_DEV}/items`)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data
  }
}

export const getContactPersons = async (conatct_id) => {
  const res = await axios.get(`${API_URL_DEV}/contact-persons/${conatct_id}`)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data
  }
}

export const getInvoices = async () => {
  const res = await axios.get(`${API_URL_DEV}/invoices`)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    return res.data
  }
}

