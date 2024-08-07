'use client';

import Image from "next/image";
import A1 from "../../img/Pics/Mail.svg";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import './Contact.css'; // Importa el archivo de animaciones

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        });
        const data = await response.json();
        if (response.ok) {
          alert('Email enviado con éxito');
        } else {
          alert('Error al enviar el email: ' + data.message);
        }
      } catch (error) {
        console.error('Error al enviar el email:', error);
        alert('Error al enviar el email');
      }
    }
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required.";
    if (!values.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email address is invalid.";
    if (!values.phone) errors.phone = "Phone number is required.";
    if (!values.message) errors.message = "Message is required.";
    return errors;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 py-12">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <div className="md:flex md:space-x-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-purple-900">Contact Us</h2>
                <p className="text-purple-700 mb-4">Have questions? Get in touch with us!</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      <FaUser className="inline mr-2 text-purple-600" /> Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      <FaEnvelope className="inline mr-2 text-purple-600" /> Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      <FaPhone className="inline mr-2 text-purple-600" /> Your Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={`w-full p-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded`}
                      placeholder="Your Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      <FaComments className="inline mr-2 text-purple-600" /> Your Message
                    </label>
                    <textarea
                      name="message"
                      className={`w-full p-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded`}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        name="newsletter"
                        className="form-checkbox"
                        checked={form.newsletter}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Subscribe to our newsletter</span>
                    </label>
                  </div>
                  <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <div className="w-full max-w-xs bounce"> {/* Agrega la clase bounce aquí */}
                  <Image src={A1} alt="Contact Us" width={300} height={300} className="rounded-full shadow-lg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
