//import { LOGO_URL } from "../utils/constants"; // THIS IS HOW WE IMPORT NAMED EXPORT
import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header rendered");

  const status = useOnlineStatus();
  //if no dependency array => useeffect is called on every render
  //if dependency array is empty = [] => useeffect is called only on the initial render(justonce when the componenet is rendered for the first time)

  return (
    <div className="flex justify-between bg-amber-400 shadow-lg">
      <div className="flex">
        <img className="w-[170px] " src={LOGO_URL} />
        <span className="text-2xl font-medium text-white m-2 content-center ">
          BiteRush.
        </span>
      </div>
      <div className=" content-center ">
        <ul className="flex mr-8  text-white">
          <li className="px-4">Online Status:{status ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <div
            className="login"
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
