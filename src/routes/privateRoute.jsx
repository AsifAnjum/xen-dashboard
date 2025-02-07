import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute() {
  const isLoggedIn = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
