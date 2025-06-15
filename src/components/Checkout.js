// src/components/Checkout.js

import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, address } = formData;

    if (!name || name.trim().length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!address || address.trim().length < 5) {
      alert("Please enter a valid address.");
      return;
    }

    // For now, just simulate a success
    alert("Order placed successfully!");
    navigate("/order-confirm"); // Redirect to home
  };

  const getTotal = () =>
    cartItems.reduce((acc, item) => {
      const price =
        item.item.card.info.price || item.item.card.info.defaultPrice || 0;
      return acc + (price / 100) * item.quantity;
    }, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <div className="mt-4">
          <h3 className="font-semibold">Order Summary:</h3>
          {cartItems.map((entry, idx) => (
            <div key={idx} className="text-sm">
              {entry.item.card.info.name} × {entry.quantity}
            </div>
          ))}
          <p className="font-bold mt-2">Total: ₹{getTotal().toFixed(2)}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
