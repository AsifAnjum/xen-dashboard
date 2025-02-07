import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();

  if (isLoggedIn) return children;
  return <Navigate to="/login" />;
}
