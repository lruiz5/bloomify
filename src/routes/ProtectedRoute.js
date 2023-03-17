import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("bloomifyToken"));
  return token ? children : <Navigate to={"/login"} />;
};
