import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is the About page in react Project</h2>
        <UserClass name={"Lokesh (classes)"} />
      </div>
    );
  }
}

export default About;
