import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoutes = ({children, ...rest}) => {
  let auth = Cookies.get('terri-auth')
  return (
      auth ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes