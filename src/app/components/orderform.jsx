"use client";

import React, { useState } from "react";
import * as emailjs from "emailjs-com";

export default function CakeOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flavor: "",
    filling: "",
    frosting: "",
    size: "",
    shape: "",
    description: "",
    allergies: "",
    deliveryMethod: "",
    terms: false,
    inspirationImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_tftlup2",
        "template_2f6ntuk",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          flavor: formData.flavor,
          filling: formData.filling,
          frosting: formData.frosting,
          size: formData.size,
          shape: formData.shape,
          delivery: formData.deliveryMethod,
          allergies: formData.allergies,
          description: formData.description,
          terms: formData.terms,
          inspirationImage: formData.inspirationImage,
        },

        "bEGHdDglJNbNzDQU0"
      )
      .then(
        (result) => {
          console.log("Email sent succesfully", result.text);
          alert("Your Request has been sent!");
        },
        (error) => {
          console.error("Email send error", error.text);
          alert("oops something went wrong. Please try again.");
        }
      );
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto my-8 p-6 bg-[#ffe7e0b8] shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Cake Order Form</h2>

      {/* Contact Info */}
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Cake Details */}
      <div className="mb-4">
        <label htmlFor="flavor" className="block font-medium mb-1">
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
          <option value="strawberry">Strawberry</option>
          <option value="confetti">Confetti</option>
          <option value="carrot cake">Carrot Cake</option>
          <option value="coffee">Coffee</option>
          <option value="red velvet">Red Velvet</option>
          <option value="lemon">Lemon</option>
          <option value="pistachio">Pistachio (additional cost)</option>
          <option value="almond">Almond (additional cost)</option>
          <option value="cinnamon cereal">
            Cinnamon Cereal (additional cost)
          </option>
          <option value="whiskey">Whiskey (additional cost)</option>
          <option value="matcha">Matcha (additional cost)</option>
          <option value="black forest">Black Forest (additional cost)</option>
          <option value="mango">Mango (additional cost)</option>
          <option value="biscoff">Biscoff (additional cost)</option>
          <option value="marble">Marble (additional cost)</option>
        </select>
      </div>

      {/* Filling */}
      <div className="mb-4">
        <label htmlFor="filling" className="block font-medium mb-1">
          Filling
        </label>
        <select
          name="filling"
          id="filling"
          className="w-full border rounded p-2"
          value={formData.filling}
          onChange={handleChange}
          required
        >
          <option value="">--Select filling</option>
          <option value="fresh strawberries">Fresh Strawberries</option>
          <option value="strawberry jam">Strawberry Jam</option>
          <option value="fresas con crema">Fresas con crema</option>
          <option value="fresh berries">Fresh berries</option>
          <option value="nutella">Nutella</option>
          <option value="coffee mousse">Coffee mousse</option>
          <option value="chocolate ganache">Chocolate ganache</option>
          <option value="cookies and cream">cookies and cream</option>
          <option value="berry compote">Berry compote (additional cost)</option>
          <option value="lemon curd">Lemon curd (additional cost)</option>
          <option value="salted caramel">
            Salted caramel (additional cost)
          </option>
          <option value="dulce de leche">
            Dulce de leche (additional cost)
          </option>
          <option value="white chocolate ganache">
            White chocolate ganache (additional cost)
          </option>
          <option value="churro sauce">Churro sauce (additional cost)</option>
          <option value="whipped hazlenut">
            Whipped hazlenut (additional cost)
          </option>
          <option value="no filling">No filling</option>
        </select>
      </div>

      {/* Frosting */}
      <div className="mb-4">
        <label htmlFor="frosting" className="block font-medium mb-1">
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
          <option value="">--Select frosting--</option>
          <option value="buttercream">American Buttercream</option>
          <option value="cream cheese">Cream Cheese</option>
          <option value="ganache">Swiss meringue</option>
          <option value="fondant">Russian buttercream</option>
          <option value="whipped frosting">Whipped frosting</option>
          <option value="No frosting">No frosting</option>
        </select>
      </div>

      {/* Size */}
      <div className="my-4">
        <label htmlFor="size" className="font-medium text-gray-700 text-lg">
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
          <option value="">--Select size--</option>
          <option value="4-inch">4-inch (Bento-serves 2)</option>
          <option value="6-inch">6-inch (Small-serves up to 10)</option>
          <option value="8-inch">8-inch (Medium-serves up to 20)</option>
          <option value="10-inch">10-inch (Large-serves up to 35)</option>
        </select>
      </div>

      {/* Shape */}
      <div className="my-4">
        <label htmlFor="size" className="font-medium text-gray-700 text-lg">
          {" "}
          Cake Shape
        </label>
        <select
          name="shape"
          id="shape"
          className="w-full border rounded p-2"
          value={formData.shape}
          onChange={handleChange}
          required
        >
          <option value=""> --Select shape--</option>
          <option value="heart">Heart</option>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="other">Other (additional cost)</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-1">
          Description / Special Requests
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Allergies */}
      <div className="mb-4">
        <label htmlFor="allergies" className="block font-medium mb-1">
          Allergies
        </label>
        <textarea
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Delivery Method */}
      <div className="mb-4">
        <span className="block font-medium mb-1">Delivery Method</span>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="deliveryMethod"
            value="pickup"
            checked={formData.deliveryMethod === "pickup"}
            onChange={handleChange}
            className="cursor-pointer"
            required
          />
          Pickup
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="deliveryMethod"
            value="delivery"
            checked={formData.deliveryMethod === "delivery"}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Delivery
        </label>
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <label htmlFor="inspirationImage" className="block font-medium mb-1">
          Inspiration Image (optional)
        </label>
        <input
          id="inspirationImage"
          name="inspirationImage"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 rounded-lg border w-full object-cover"
          />
        )}
      </div>

      {/* Terms */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="cursor-pointer"
          checked={formData.terms}
          onChange={handleChange}
          required
        />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>

      <button
        type="submit"
        className="bg-white cursor-pointer px-4 py-2 rounded-lg"
      >
        Submit Order
      </button>
    </form>
  );
}
