// src/pages/Contact.jsx
import React, { useState } from 'react';
import Hero from '../assets/images/contact-hero.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xovwppve", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-6 pt-40 pb-28 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Get in touch with G&G Construction — we’re here to help you start your next great build.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-md">
            {submitted && (
              <p className="text-green-600 font-semibold">Thank you! We'll be in touch soon.</p>
            )}
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-sm text-gray-700">+27783111534</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-sm text-gray-700">info@ggconstruction.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-sm text-gray-700">
                    417 Vine Avenue<br />
                    Ferndale, Randburg<br />
                    Johannesburg
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <iframe
              title="G&G Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.059830661534!2d28.04185175!3d-26.20410395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a2d4f95002f%3A0x402f4cb24c6e1d0!2sJohannesburg!5e0!3m2!1sen!2sza!4v1653652092101!5m2!1sen!2sza"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
