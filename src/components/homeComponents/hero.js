// src/components/home/HeroPage.jsx
import { Link } from 'react-router-dom';
const HeroPage = () => {
  return (
    <section id="hero" className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden py-32 px-6">
      
      {/* Blurred Background Circles */}
      <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-yellow-400 opacity-40 rounded-full filter blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-[-60px] right-[-40px] w-96 h-96 bg-yellow-300 opacity-30 rounded-full filter blur-2xl animate-pulse-slow z-0"></div>

      {/* Floating Decorative Images */}
      <img
        src= 'images/cracks/ocrw.png'
        alt="Tools"
        className="hidden md:block absolute top-10 left-10 w-28 opacity-40 hover:opacity-70 transition duration-500 z-10"
      />
      <img
        src= 'images/welding/wldw.png'
        alt="Construction"
        className="hidden md:block absolute bottom-10 right-10 w-40 opacity-60 hover:opacity-80 transition duration-500 z-10"
      />

      {/* Project Image Cluster */}
      <div className="hidden md:flex absolute right-16 top-1/3 space-x-[-20px] z-10">
        <img src= '/images/welding/wldw.png' className="w-32 rounded-lg shadow-lg rotate-3" alt="Project 1" />
        <img src= '/images/skimming/skmw.png' className="w-32 rounded-lg shadow-lg -rotate-2" alt="Project 2" />
        <img src= '/images/tiling/tlw.png' className="w-32 rounded-lg shadow-lg rotate-2" alt="Project 3" />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-20 max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Samaita Construction Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Your trusted experts in welding, carport installation, tiling, painting, ceiling work,
          razor wire installation, crack repairs, high-pressure wall cleaning,
          and decking sanding & polishing. Quality craftsmanship, guaranteed durability.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <Link
            to="/projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* SVG Wave at Bottom */}
      <div className="absolute bottom-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-yellow-400 opacity-30">
          <path
            fill="currentColor"
            d="M0,192L80,170.7C160,149,320,107,480,90.7C640,75,800,85,960,117.3C1120,149,1280,203,1360,229.3L1440,256V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroPage;
