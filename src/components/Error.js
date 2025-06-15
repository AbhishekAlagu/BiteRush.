import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const status = err?.status || "Unknown Error";
  const message = err?.statusText || "Something went wrong";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! 😵</h1>
      <h2 className="text-2xl font-semibold mb-2">We hit a snag</h2>
      <p className="text-lg text-gray-700">
        <span className="font-semibold text-gray-800">Error {status}</span>:{" "}
        {message}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Please check the URL or try again later.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default Error;
