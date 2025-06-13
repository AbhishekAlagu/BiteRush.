import { Component } from "react";
import UserContext from "../utils/UserContext";
import AnimatedContent from "./Animation";
import UserClass from "./UserClass";

class About extends Component {
  render() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={1}
          ease="back.out"
          animateOpacity
          initialOpacity={0.1}
          threshold={0.3}
        >
          {/* Logged In User */}
          <div className="flex items-center text-lg text-gray-700 font-medium mb-6">
            <span>Logged in as:</span>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <span className="ml-2 font-bold text-emerald-600">
                  {loggedInUser}
                </span>
              )}
            </UserContext.Consumer>
          </div>

          {/* Personal Component (optional) */}
          <UserClass name="Abhishek (Developer)" />

          {/* About the Project */}
          <section className="mt-10 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to BiteRush 🍔
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BiteRush is a responsive and interactive food ordering web
              application developed using modern frontend technologies. Users
              can browse top-rated restaurants, view menus, and simulate placing
              orders—all in a smooth and intuitive UI.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tech Stack
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>⚛️ React.js for building UI components</li>
              <li>🎨 Tailwind CSS for rapid, responsive styling</li>
              <li>🧠 Redux Toolkit for cart state management</li>
              <li>🌐 React Router for dynamic routing</li>
              <li>📦 Custom Hooks & Context API for clean logic reuse</li>
              <li>🎥 Framer Motion & scroll animations for better UX</li>
            </ul>
          </section>

          {/* Key Features */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>🔍 Filter restaurants by top rating</li>
              <li>🛒 Add/remove menu items to a persistent cart</li>
              <li>📃 View restaurant-specific dynamic menus via API</li>
              <li>📱 Mobile responsive design using Tailwind breakpoints</li>
              <li>♻️ Code splitting & optimization via dynamic bundling</li>
              <li>⚙️ Deployed using Netlify for easy demo access</li>
            </ul>
          </section>

          {/* Developer Info */}
          <section className="mt-10 text-gray-600 text-sm text-center border-t pt-4">
            Built with ❤️ by Abhishek. This project is a demonstration of React
            ecosystem mastery, tailored for real-world frontend development.
          </section>
        </AnimatedContent>
      </div>
    );
  }
}

export default About;
