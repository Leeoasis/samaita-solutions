// src/components/home/ProjectTeaser.jsx
const projects = [
  { image: '/images/ceiling/clw.png', alt: 'Ceiling Installation' },
  { image: '/images/tiling/tlw.png', alt: 'Tiling' },
  { image: 'images/sanding/snd6.jpeg', alt: 'Sanding' },
  { image: '/images/razor-wire/rzw.png', alt: 'Razor Wire' },
  { image: '/images/skimming/skmw.png', alt: 'Skimmming' },
  { image: '/images/welding/wldw.png', alt: 'Welding' },
];

const ProjectTeaser = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of the stunning work we’ve completed for our clients.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md transform hover:scale-105 transition duration-500"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="/projects"
            className="inline-block bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectTeaser;
