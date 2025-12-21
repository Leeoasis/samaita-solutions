// src/components/home/AboutPreview.jsx
import React, { useEffect, useRef, useState } from 'react';

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white text-gray-800 py-24 px-6 md:px-16 lg:px-24 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Samaita Construction Solutions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Samaita Construction Solutions is a trusted service provider specializing in welding, 
            carport installation, razor wire installation, tiling, painting, ceiling work, 
            crack repairs, sanding and polishing decking, and high-pressure wall cleaning. 
            We are committed to delivering durable, clean, and precise workmanship on every project — 
            ensuring your home or business looks professional, secure, and long-lasting.
          </p>
          <a
            href="/about"
            className="inline-block bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <img
            src='/images/about.png'
            alt="Team or project"
            className="w-full rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-xl bg-yellow-400 opacity-10 group-hover:opacity-20 transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
