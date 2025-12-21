// src/pages/About.jsx
import React from 'react';
import AboutHero from '../assets/images/about.png';
import WhoWeAreImg from '../assets/images/us.png';
import { FaTools, FaCheckDouble, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <main>
      
      {/* Hero Banner */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url('/images/about.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Samaita Construction Solutions</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Professional, reliable, and detail-driven. We deliver quality construction, repairs, and finishing services across South Africa.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Samaita Construction Solutions provides premium construction, repair, and installation services designed to strengthen, restore, and enhance your property. 
              With hands-on expertise in welding, carports, tiling, painting, crack repair, razor wire installation, and deck sanding, we bring a complete and trustworthy solution for residential and commercial projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our approach is simple: deliver excellent workmanship, finish projects on time, and ensure every client is completely satisfied. Whether you're upgrading your home, reinforcing your property’s security, or restoring surfaces, Samaita Construction Solutions is your reliable partner.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-4 rounded-xl shadow-xl max-w-md w-full">
              <img
                src= '/images/sanding/snd6.jpeg'
                alt="Who We Are"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Our Core Values */}
      <section className="w-full bg-gray-100 text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaTools className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-gray-700 text-sm">
                From welding to painting to tiling, we deliver durable, neat, and professional results that stand the test of time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckDouble className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Honesty & Integrity</h3>
              <p className="text-gray-700 text-sm">
                We quote fairly, communicate clearly, and complete projects with transparent, trustworthy service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaUsers className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Commitment</h3>
              <p className="text-gray-700 text-sm">
                Your satisfaction drives us. We listen, we advise, and we tailor our work to your exact needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-900 text-white py-24 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300">
            Whether it's welding, tiling, painting, crack repair, or full installations—Samaita Construction Solutions is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </section>

    </main>
  );
};

export default About;
