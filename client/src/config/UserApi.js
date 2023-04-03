import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const base_url = 'https://terry.thedelvierypointe.com'
// const base_url = 'http://127.0.0.1:8085'

const headers = {
  headers: {
    Authorization: `Token ${Cookies.get("terri-auth")}`,
  }
}

//register
export const register = async (formData) => {
  const res = await axios.post(`${base_url}/register`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    Cookies.set('terri-auth', res.data.token)
    toast.success('user registered')
    return res.data
  } 
}

export const login = async (formData) => {
  const res = await axios.post(`${base_url}/login`, formData)
  if(res.data.err) {
    toast.error(res.data.err)
    return
  } else {
    Cookies.set('terri-auth', res.data.token)
    toast.success('user registered')
    return res.data
  }
}

export const logout = async () => {
  try {
    Cookies.remove('terri-auth')
    toast.success("User logged out");
    return true;
  } catch (err) {
    console.log(err, 'logout error')
  }
}