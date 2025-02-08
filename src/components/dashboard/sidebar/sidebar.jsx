import SidebarDesktop from "./sidebarDesktop";
import SidebarMobile from "./sidebarMobile";

const Sidebar = () => {
  return (
    <aside>
      <SidebarDesktop />

      {/* mobile navigation */}
      <SidebarMobile />
    </aside>
  );
};
export default Sidebar;
