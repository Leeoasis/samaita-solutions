import React from 'react';
import WeldingImg from '../../assets/images/gg33.jpg'; 
import CarportImg from '../../assets/images/gg1.jpg';
import PaintingImg from '../../assets/images/gg27.jpg';

const services = [
  {
    title: 'Welding & Spray Painting',
    description: 'Professional welding, steel installation, repairs, and smooth spray painting for gates, burglar bars, and structures.',
    image: WeldingImg,
  },
  {
    title: 'Carport Installation',
    description: 'Dismantling and installation of durable, modern carports for homes and businesses.',
    image: CarportImg,
  },
  {
    title: 'Painting & Surface Preparation',
    description: 'Interior and exterior painting, high-pressure washing of walls, and clean finishing for long-lasting results.',
    image: PaintingImg,
  },
];

const ServicesPreview = () => {
  return (
    <section className="w-full bg-gray-100 text-gray-900 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        
        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Samaita Construction Solutions delivers reliable, high-quality workmanship across a wide range of building and maintenance services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-left"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="/services"
            className="inline-block bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
