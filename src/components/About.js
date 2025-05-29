import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is the About page in react Project</h2>
      <User name={"Abhishek (function)"} />
      <User name={"Mithran (function)"} />
      <UserClass name={"Lokesh (classes)"} />
      <UserClass name={"Suman (classes)"} />
    </div>
  );
};

export default About;
