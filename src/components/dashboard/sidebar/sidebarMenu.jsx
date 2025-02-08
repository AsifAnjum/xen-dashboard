import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <ul className="space-y-4 mt-20 text-slate-600 font-semibold whitespace-nowrap">
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
  );
};
export default SidebarMenu;
