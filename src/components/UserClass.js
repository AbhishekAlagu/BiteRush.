// refer : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for react life cycle diagram

// class based component (it is just a normal javascript class)
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //state variable in class based component
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AbhishekAlagu");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card flex gap-8 items-center p-4 m-2 rounded-2xl  justify-between hover:bg-amber-50">
        <img className="w-[150px] h-[150px] rounded-full" src={avatar_url} />
        <div className="pr-10">
          <h1 className="text-2xl font-semibold text-gray-400">
            Developed by:
          </h1>
          <h2 className="text-2xl font-semibold text-gray-400">
            Name : {name}
          </h2>
          <h3 className="text-2xl font-semibold text-gray-400">
            Location: {location}
          </h3>
          <h3 className="text-2xl font-semibold text-gray-400">
            contact:
            <a href="https://github.com/AbhishekAlagu">@abhishek007</a>
          </h3>
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
