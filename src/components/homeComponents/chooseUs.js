// src/components/home/WhyChooseUs.jsx
import React from 'react';
import { FaHardHat, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const points = [
  {
    icon: <FaHardHat className="text-yellow-400 text-4xl mb-4" />,
    title: 'Skilled Craftsmanship',
    description: 'We don’t cut corners. Every cabinet, Nutec house, and custom feature is built with detail and precision.',
  },
  {
    icon: <FaCheckCircle className="text-yellow-400 text-4xl mb-4" />,
    title: 'Reliable & Transparent',
    description: 'We deliver on time, communicate clearly, and always keep our word — no hidden costs, no surprises.',
  },
  {
    icon: <FaHandshake className="text-yellow-400 text-4xl mb-4" />,
    title: 'Customer-First Approach',
    description: 'We work around your schedule and your budget. Your satisfaction is our success.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-950 text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center space-y-12">

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're not just builders — we’re partners in your vision. Here’s what makes Samaita Construction Solutions the right choice.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {point.icon}
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-300 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
