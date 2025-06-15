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

          {/* Optional Personal Class Component */}
          <UserClass name="Abhishek (Developer)" />

          {/* About the Project */}
          <section className="mt-10 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to BiteRush 🍽️
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BiteRush is a fully responsive food ordering application built
              with modern React practices. It allows users to explore real-time
              menus from Swiggy’s public API, manage their cart with persistent
              state, validate orders, and experience a sleek UI/UX with
              animations.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tech Stack
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>⚛️ React.js for component-driven architecture</li>
              <li>🧠 Redux Toolkit for global cart state and actions</li>
              <li>💾 localStorage for cart persistence across sessions</li>
              <li>🎨 Tailwind CSS for utility-first responsive styling</li>
              <li>🌐 React Router for client-side routing</li>
              <li>🧩 Context API for user context management</li>
              <li>🎥 Framer Motion + custom scroll animations</li>
            </ul>
          </section>

          {/* Key Features */}
          {/* Key Features */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>🔍 Browse restaurants and menus via Swiggy API</li>
              <li>⭐ Filter restaurants by top ratings</li>
              <li>🛒 Add/remove items to cart with quantity tracking</li>
              <li>💾 Cart state saved even after page reloads</li>
              <li>📋 Form validation for the checkout experience</li>
              <li>✅ Order confirmation screen after placing order</li>
              <li>💡 Shimmer UI used as loading fallback (better UX)</li>
              <li>📱 Fully responsive design for mobile & desktop</li>
              <li>🚀 Production deployment via Netlify</li>
            </ul>
          </section>

          {/* Developer Info */}
          <section className="mt-10 text-gray-600 text-sm text-center border-t pt-4">
            Built with ❤️ by Abhishek. BiteRush is not just a practice project —
            it reflects a real-world food ordering experience using scalable
            frontend architecture and best coding practices in React.
          </section>
        </AnimatedContent>
      </div>
    );
  }
}

export default About;
