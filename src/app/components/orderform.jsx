"use client";
import { useState } from "react";

export default function CakeOrderForm() {
  const [formData, setFormData] = useState({
    flavor: "",
    frosting: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can later send this to EmailJS, a backend, etc.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4 p-4 bg-white rounded shadow"
    >
      {/* Flavor Dropdown */}
      <div>
        <label
          htmlFor="flavor"
          className="block mb-1 font-medium text-gray-700"
        >
          Cake Flavor
        </label>
        <select
          name="flavor"
          id="flavor"
          className="w-full border rounded p-2"
          value={formData.flavor}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a flavor --</option>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="red velvet">Red Velvet</option>
          <option value="lemon">Lemon</option>
        </select>
      </div>

      {/* Frosting Dropdown */}
      <div>
        <label
          htmlFor="frosting"
          className="block mb-1 font-medium text-gray-700"
        >
          Frosting
        </label>
        <select
          name="frosting"
          id="frosting"
          className="w-full border rounded p-2"
          value={formData.frosting}
          onChange={handleChange}
          required
        >
          <option value="">-- Select frosting --</option>
          <option value="buttercream">Buttercream</option>
          <option value="cream cheese">Cream Cheese</option>
          <option value="ganache">Ganache</option>
          <option value="fondant">Fondant</option>
        </select>
      </div>

      {/* Size Dropdown */}
      <div>
        <label htmlFor="size" className="block mb-1 font-medium text-gray-700">
          Cake Size
        </label>
        <select
          name="size"
          id="size"
          className="w-full border rounded p-2"
          value={formData.size}
          onChange={handleChange}
          required
        >
          <option value="">-- Select size --</option>
          <option value="6-inch">6-inch (Small)</option>
          <option value="8-inch">8-inch (Medium)</option>
          <option value="10-inch">10-inch (Large)</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow"
      >
        Place Order
      </button>
    </form>
  );
}
