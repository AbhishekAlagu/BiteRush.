//import { LOGO_URL } from "../utils/constants"; // THIS IS HOW WE IMPORT NAMED EXPORT
import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isopen, setisopen] = useState(false);
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header rendered");

  const status = useOnlineStatus();
  //if no dependency array => useeffect is called on every render
  //if dependency array is empty = [] => useeffect is called only on the initial render(justonce when the componenet is rendered for the first time)

  return (
    <div className="block sm:flex justify-between bg-amber-400 shadow-lg ">
      <div className="flex  ">
        <img className=" w-32 sm:w-[170px] " src={LOGO_URL} />
        <span className="text-2xl font-medium text-white m-2 content-center ">
          BiteRush.
        </span>
      </div>
      <button
        className="md:hidden absolute right-4 top-11  "
        onClick={() => setisopen(!isopen)}
      >
        <RxHamburgerMenu className="text-white text-3xl" />
      </button>

      {/* Desktop*/}
      <div className="hidden md:block content-center ">
        <ul className="flex mr-8  text-white">
          <li className="px-4">{status ? "🟢 Online" : "🔴 Offline"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <li
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </li>
        </ul>
      </div>

      {/* mobile*/}

      <div
        className={` ${
          isopen ? "block" : "hidden"
        } sm:hidden content-center bg-gray-200 `}
      >
        <ul className="sm:flex mr-8 text-black sm:text-white block ">
          <li className="px-4 py-2 border-b-1 border-white ">
            {status ? "🟢 Online" : "🔴 Offline"}
          </li>
          <li className="px-4 py-2 border-b-1 border-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 border-b-1 border-white">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4  py-2 border-b-1 border-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 py-2 border-b-1 border-white">Cart</li>
          <div
            className="px-4 login py-2 "
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header; // to export header from this file
