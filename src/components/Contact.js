import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  return (
    <div className="m-2 text-center 10/12 md:w-6/12  mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Customer Support Info</h1>
        <p className="text-gray-600 mb-2">
          For any issues with your order, delivery, or payments, feel free to
          contact us.
        </p>
        <h3 className="text-gray-800">📧 support@biterush.com</h3>
        <h3 className="text-gray-800">📞 +91 98765 43210</h3>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Feedback form</h1>
        <form className="space-y-4">
          <input
            type="name"
            placeholder="Name"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Order-id"
            className="w-full border rounded px-4 py-2"
          />

          <textarea
            className="w-full border rounded px-4 py-2"
            placeholder="Your message..."
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Operating Hours</h1>
        <h4 className="text-lg text-gray-500 mb-4">
          Mon–Fri: 9:00 AM – 10:00 PM{" "}
        </h4>
        <h4 className="text-lg  text-gray-500 mb-4">
          Sat–Sun: 10:00 AM – 11:00 PM
        </h4>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Social Media</h1>
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" aria-label="Instagram">
            <FaInstagramSquare className="hover:text-pink-600  text-3xl" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsappSquare className="hover:text-green-600 text-3xl" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaSquareXTwitter className="hover:text-blue-600 text-3xl" />
          </a>
        </div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Our Location</h2>
        <MapContainer
          center={[12.9716, 77.5946]} // Fake Bangalore coords
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[12.9716, 77.5946]}>
            <Popup>BiteRush HQ — Fake Location 😉</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
