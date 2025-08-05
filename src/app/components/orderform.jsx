"use client";
import { useState } from "react";
import { Limelight } from "next/font/google";
const lime = Limelight({ subsets: ["latin"], weight: ["400"] });

export default function CakeOrderForm() {
  const [formData, setFormData] = useState({
    flavor: "",
    frosting: "",
    filling: "",
    size: "",
    shape: "",
    delivery: "",
    descriptoin: "",
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
      className=" m-auto my-8 max-w-2xl bg-[#ffe7e0b8] p-8 rounded-xl shadow-xl"
    >
      <h1 className={`${lime.className} text-3xl text-center`}>Request Form</h1>
      <div className="flex flex-col">
        <input className="my-2" placeholder="Name"></input>
        <input className="my-2" placeholder="Email"></input>
        <input className="my-2" placeholder="Phone#"></input>
      </div>

      {/* Flavor Dropdown */}
      <div className="my-4">
        <label htmlFor="flavor" className="font-medium text-gray-700 text-lg">
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

      {/* Filling Dropdown */}

      <div className="my-4">
        <label htmlFor="filling" className="font-medium text-gray-700 text-lg">
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

      {/* Frosting Dropdown */}
      <div className="my-4">
        <label htmlFor="frosting" className="font-medium text-gray-700 text-lg">
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

      {/* Size Dropdown */}
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
      {/* Cake shape*/}
      <div className="my-4">
        <label htmlFor="size" className="font-medium text-gray-700 text-lg">
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
        {/* Allergies*/}
        <div className="my-4">
          <label>
            Please list any allergies that you or anyone consuming the cake may
            have
          </label>
          <input></input>
        </div>
      </div>
      {/*  Description and inspo images*/}
      <div className="my-4">
        <label>
          Give a brief description of the design of the cake and add image in
          any for inspo
        </label>
        <input></input>
      </div>

      {/* delivery or pickup */}
      <div>
        <button>Pickup</button>
        <button>Delivery</button>
      </div>

      {/* Terms and conditions  */}
      <button></button>
      <label>i have read the terms and conditions</label>
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-[#e7b6a9] font-medium px-4 py-2 my-4 rounded-xl shadow-lg cursor-pointer"
        >
          Send Request
        </button>
      </div>
    </form>
  );
}
