import SidebarIcon from "../../icon/sidebar";
import { useState } from "react";
import CloseIcon from "../../icon/close";
import SidebarMenu from "./SidebarMenu";

const SidebarMobile = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

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
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
};
export default SidebarMobile;
