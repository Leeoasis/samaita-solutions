// src/components/home/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Lebo M.',
    quote: 'G&G Construction delivered my Nutec house ahead of schedule. Beautiful finish and great service!',
    service: 'Nutec House Construction',
  },
  {
    name: 'Thando K.',
    quote: 'The wall units and kitchen cabinets they built are stunning. Clean lines, high quality, no shortcuts.',
    service: 'Custom Cabinetry',
  },
  {
    name: 'Buhle N.',
    quote: 'Professional team, great communication, and excellent workmanship. Highly recommended.',
    service: 'Bathroom Vanity + Panelling',
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-900 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in every project. Hear what our satisfied clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform transition duration-300"
            >
              <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-xs text-yellow-500">{testimonial.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
