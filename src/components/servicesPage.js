// src/pages/Services.jsx

const services = [
  {
    title: 'Welding, Installation & Spray Painting',
    image: '/images/welding/wldw.png',
    description: [
      'Gate, burglar bar, and steel structure fabrication',
      'Professional welding repairs and finishing',
      'High-quality spray painting for long-lasting protection',
      'Installation of steel fixtures and custom metalwork',
    ],
  },
  {
    title: 'Skimming',
    image: '/images/skimming/skmw.png',
    description: [
      'Professional wall and ceiling skimming for smooth, even surfaces',
      'Correction of cracks, joints, and uneven plaster',
      'Surface preparation ready for painting',
      'High-quality workmanship for a flawless finish',
    ],
  },
  {
    title: 'Tiling Services',
    image: '/images/tiling/tlw.png',
    description: [
      'Floor and wall tiling for homes and businesses',
      'Waterproofing and surface preparation',
      'Repairing and replacing broken tiles',
      'Neat, long-lasting finishes with precise alignment',
    ],
  },
  {
    title: 'Razor Wire Installation',
    image: '/images/razor-wire/rzw.png',
    description: [
      'Professional razor wire and security fencing setup',
      'Perimeter reinforcement for homes and businesses',
      'Strong and secure mounting techniques',
      'Affordable, fast, and reliable installation',
    ],
  },
  {
    title: 'Deck Sanding & Polishing',
    image: '/images/sanding/snd6.jpeg',
    description: [
      'Restoration of wooden decks to like-new condition',
      'Deep sanding to remove damage and stains',
      'Polishing and sealing for long-term protection',
      'Improves durability and enhances appearance',
    ],
  },
  {
    title: 'Crack Repair (Opening & Closing)',
    image: '/images/cracks/ocrw.png',
    description: [
      'Opening cracks to identify underlying structural issues',
      'Professional sealing and closing of wall cracks',
      'Prevents water damage and future deterioration',
      'Smooth finishing ready for painting',
    ],
  },
  {
    title: 'Painting & High-Pressure Washing',
    image: '/images/painting/ptw.png',
    description: [
      'Interior and exterior wall painting',
      'High-pressure washing before painting for clean surfaces',
      'Weather-resistant and long-lasting paint coatings',
      'Neat, clean, and streak-free finishes',
    ],
  },
  {
    title: 'Ceiling Installation & Repairs',
    image: '/images/ceiling/clw.png',
    description: [
      'New ceiling installation (standard and custom designs)',
      'Gypsum, PVC, and suspended ceiling systems',
      'Ceiling repairs, replacements, and restoration',
      'Bulkheads and decorative ceiling features',
    ],
  }
];

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url('images/services.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Reliable, professional, and high-quality solutions — from welding and tiling to painting and full installations.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Improve or Upgrade Your Property?
          </h2>
          <p className="text-lg text-gray-300">
            From welding to ceilings to painting — Samaita Construction Solutions delivers quality results every time.
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

export default Services;
