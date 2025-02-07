import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { userLoggedOut } from "../features/auth/authSlice";
import MenuIcon from "./icon/menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <header className="shadow-xl w-screen">
      <nav className="max-w-7xl  mx-auto px-4 py-6">
        <div className="flex md:justify-between items-center">
          <Link
            to="/"
            className="font-bold flex-1 max-md:text-center text-4xl max-sm:text-2xl font-serif bg-gradient-to-b from-pink-400 to-red-500 bg-clip-text text-transparent"
          >
            Xen Dashboard
          </Link>

          <div className="md:flex hidden gap-4 items-center">
            <p className="bg-slate-300 hover:bg-slate-700 transition-colors hover:text-white duration-300 rounded p-2">
              {email}
            </p>
            <button
              onClick={() => dispatch(userLoggedOut())}
              className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded transition-colors duration-300"
            >
              Logout
            </button>
          </div>
          <div>
            <div onClick={handleOpenNav} className=" md:hidden">
              <MenuIcon />
            </div>
          </div>
        </div>
        {openNav && (
          <ul className="md:hidden shadow-2xl rounded-2xl p-4 space-y-4 items-center">
            <li>{email}</li>
            <li
              className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded transition-colors duration-300"
              onClick={() => dispatch(userLoggedOut())}
            >
              Logout
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
