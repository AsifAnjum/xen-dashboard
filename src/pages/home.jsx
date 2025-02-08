import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-14">
        <div className="mt-20 hidden lg:block">
          <ul className="space-y-4 text-slate-600 font-semibold">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/users"
              >
                User List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/add-product"
              >
                Add Product
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block bg-slate-500 mt-20 h-36 w-0.5 "></div>
        <div className="mt-20 container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Home;
