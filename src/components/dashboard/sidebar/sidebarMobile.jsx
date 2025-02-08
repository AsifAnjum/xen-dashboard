import { NavLink } from "react-router-dom";
import SidebarIcon from "../../icon/sidebar";
import { useState, useEffect } from "react";
import CloseIcon from "../../icon/close";

const SidebarMobile = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      if (sidebar) {
        setSidebar(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div>
      <div className="lg:hidden">
        <button onClick={handleSidebar} className="sidebar-btn">
          <SidebarIcon />
          Sidebar
        </button>
      </div>

      <div className="lg:hidden">
        <div
          className={`absolute top-0 left-0 w-64 h-screen bg-white shadow-lg z-10 px-10 transition-transform transform -translate-x-full ease-in-out duration-600 py-8 ${
            sidebar ? "translate-x-0" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <h1 className="font-sans font-semibold text-3xl">Sidebar</h1>
            <button onClick={() => setSidebar(false)}>
              <CloseIcon />
            </button>
          </div>
          <ul className="space-y-4 mt-20 text-slate-600 font-semibold">
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
      </div>
    </div>
  );
};
export default SidebarMobile;
