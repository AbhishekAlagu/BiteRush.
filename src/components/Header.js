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
    <div className="header">
      <div className="logo-container">
        <img className="logo " src={LOGO_URL} />
        <span className="comp-name">BiteRush.</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header; // to export header from this file
