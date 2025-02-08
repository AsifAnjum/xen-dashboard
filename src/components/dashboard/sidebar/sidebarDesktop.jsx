import { NavLink } from "react-router-dom";

const SidebarDesktop = () => {
  return (
    <div className="my-20 hidden lg:block">
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
  );
};
export default SidebarDesktop;
