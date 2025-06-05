import React from "react";

const Contact = () => {
  return (
    <div className="bg-indigo-100 p-8 rounded-xl m-6 shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">Contact Me</h2>

      <div className="text-lg text-indigo-900 space-y-2">
        <p>
          📧 <span className="font-medium">Email:</span> abhishek.dev@gmail.com
        </p>
        <p>
          📞 <span className="font-medium">Phone:</span> +91-98765-43210
        </p>
        <p>
          💼 <span className="font-medium">GitHub Handle:</span> @abhishek007
        </p>
        <p>
          📍 <span className="font-medium">Location:</span> Tamil Nadu, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
