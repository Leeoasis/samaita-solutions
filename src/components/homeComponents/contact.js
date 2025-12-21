// src/components/home/CTASection.jsx
import { Link } from "react-router-dom";
const CTASection = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build With Samaita Construction Solutions?
        </h2>
        <p className="text-lg text-gray-300">
          Whether it’s custom carpentry or a complete Nutec home, let’s turn your vision into reality.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
