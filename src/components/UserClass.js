// Refer: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for React lifecycle diagram

import React from "react";
import { FaGithub, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // State variable in class-based component
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Fetching location...",
        avatar_url: "img",
      },
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.github.com/users/AbhishekAlagu"
      );
      const data = await response.json();
      this.setState({ userInfo: data });
      console.log(data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card flex flex-col md:flex-row gap-8 items-center p-6 m-4 rounded-2xl shadow-md bg-white hover:bg-amber-50 transition duration-300">
        <img
          className="w-[150px] h-[150px] rounded-full object-cover border-2 border-gray-300"
          src={avatar_url}
          alt={`${name}'s avatar`}
        />

        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-700">Developed by</h2>
          <p className="text-lg text-gray-600 mt-1">
            <span className="font-medium">Name:</span> {name}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-medium">Location:</span> {location}
          </p>

          <div className="flex text-3xl gap-4 text-gray-700 mt-4">
            <a
              href="https://github.com/AbhishekAlagu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-black" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagramSquare className="hover:text-pink-600" />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsappSquare className="hover:text-green-600" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaSquareXTwitter className="hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;

/***
 * 
 * -------- HOW LIFECYCLE METHOD WORKS
 * 
 * --MOUNTING----
 * 
 * constructor (dummy)
 * Render (dummy)
 *     <HTML Dummy>
 * Component Did Mount 
 *     < API CALL>
 *     <this.setState -> state variable is updated
 * 
 * ----UPDATE-
 * 
 *     Render (API Data)
 *     <HTML> (new API data)
 *     ComponentDid Update


 Note : UNMOUNTING : is nothing but not displaying or disabling the component from webpage  
 */
