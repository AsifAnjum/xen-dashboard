import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/dashboard/sidebar/sidebar";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6 flex max-lg:flex-col gap-14">
        <Sidebar />

        <div className="hidden lg:block bg-slate-500 mt-20 h-40 w-0.5 "></div>
        <div className=" container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Home;
