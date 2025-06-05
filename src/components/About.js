import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import AnimatedContent from "./Animation";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <UserClass name={" Abhishek (classes)"} />
          <div className="mt-8 hover:bg-amber-50 p-4">
            <h2 className="text-xl font-semibold m-2">About This App</h2>
            <p className="text-gray-400 m-2">
              A modern food ordering app built with React and Tailwind CSS.
              Browse restaurants, view their menus, and simulate orders with a
              smooth user experience.
            </p>
            <h2 className="text-xl font-semibold mt-6 m-2">Tech Stack</h2>
            <ul className="list-disc pl-6 text-gray-400">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 m-2">Features</h2>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Browse & search restaurants</li>
              <li>View dynamic menu for each restaurant</li>
              <li>Add items to cart</li>
              <li>Custom hooks for fetching data</li>
            </ul>
          </div>
        </AnimatedContent>
      </div>
    );
  }
}

export default About;
