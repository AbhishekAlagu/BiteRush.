import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isopen, setisopen] = useState(false);
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  const status = useOnlineStatus();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-amber-400 shadow-lg">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            className="w-16 sm:w-20 rounded-xl shadow-lg"
            src={LOGO_URL}
            alt="logo"
          />
          <span className="text-2xl font-medium text-white ml-2">
            BiteRush.
          </span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setisopen(!isopen)}
        >
          {isopen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6 text-white">
            <li>{status ? "🟢 Online" : "🔴 Offline"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="py-2 font-bold">
              <Link to="/cart"> Cart ({cartItems.length})</Link>
            </li>
            <li
              className="cursor-pointer"
              onClick={() =>
                setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </li>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      {isopen && (
        <div className="sm:hidden bg-white shadow-md">
          <ul className="text-black divide-y divide-gray-200 text-center">
            <li className="py-2">{status ? "🟢 Online" : "🔴 Offline"}</li>
            <li className="py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2">
              <Link to="/about">About</Link>
            </li>
            <li className="py-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="py-2 font-bold">
              <Link to="/cart"> Cart ({cartItems.length})</Link>
            </li>
            <li
              className="py-2 cursor-pointer"
              onClick={() =>
                setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </li>
            <li className="p-4 hidden">{loggedInUser}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
