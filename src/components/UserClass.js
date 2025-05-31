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
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Conatct : @abhishek007</h4>
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
