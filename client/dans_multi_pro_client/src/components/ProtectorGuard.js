import { Navigate } from "react-router-dom";

export function ProtectToLogin({children}) {
  if (localStorage.access_token) {
    return <Navigate to="/"/>
  }
  return children
}

export function ProtectToHome({children}) {
  if (!localStorage.access_token) {
    return <Navigate to="/login"/>
  }
  return children
}