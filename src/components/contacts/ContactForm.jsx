import React, { useState } from "react";
import { submitContactForm } from "../../api/api";

function ContactForm({ form }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        estimated_budget: formData.budget,
        message: formData.message,
      });

      console.log(data);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow-xl p-10">
      <h2 className="text-4xl font-bold text-black">
        {form.heading}
      </h2>

      <p className="text-gray-500 mt-3 mb-10 text-black">
        {form.subHeading}
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-black"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
        />

        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Project Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Interior">Interior Design</option>
          <option value="Renovation">Renovation</option>
        </select>

        <input
          type="text"
          name="budget"
          placeholder="Estimated Budget (Optional)"
          value={formData.budget}
          onChange={handleChange}
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;