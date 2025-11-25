// src/pages/Projects.jsx
import React, { useState, useEffect, useCallback } from 'react';
import Hero from '../assets/images/projects-hero.png'; // adjust if needed
import Project1 from '../assets/images/gg1.jpg';
import Project2 from '../assets/images/gg2.jpg';
import Project3 from '../assets/images/gg6.jpg';
import Project4 from '../assets/images/gg12.jpg';
import Project5 from '../assets/images/gg17.jpg';
import Project6 from '../assets/images/gg18.jpg';

/**
 * Projects list - each project has a category (for filtering),
 * a thumbnail and a gallery array (lightbox).
 */
const projects = [
  {
    id: 'welding-01',
    title: 'Welding & Spray Painting',
    category: 'Welding',
    thumbnail: Project1,
    gallery: [Project1, Project2],
    description:
      'Steel fabrication and repairs with professional spray-paint finishing — gates, frames, and security fixtures restored and protected.',
  },
  {
    id: 'carport-01',
    title: 'Carport Dismantling & Installation',
    category: 'Carports',
    thumbnail: Project2,
    gallery: [Project2, Project3],
    description:
      'Safe dismantling of old carports and installation of new, durable carport structures with weather-resistant finishes.',
  },
  {
    id: 'tiling-01',
    title: 'Tiling & Bathroom Renovation',
    category: 'Tiling',
    thumbnail: Project3,
    gallery: [Project3, Project4],
    description:
      'Floor and wall tiling with waterproofing and neat, precision finishes — ideal for bathrooms, kitchens and tiled living areas.',
  },
  {
    id: 'security-01',
    title: 'Razor Wire & Perimeter Security',
    category: 'Security',
    thumbnail: Project4,
    gallery: [Project4, Project5],
    description:
      'Professional razor wire installation and reinforced perimeter solutions to improve property security quickly and reliably.',
  },
  {
    id: 'deck-01',
    title: 'Deck Sanding, Polishing & Sealing',
    category: 'Decks',
    thumbnail: Project5,
    gallery: [Project5, Project6],
    description:
      'Deck restoration: deep sanding, polishing and sealing to bring wooden decks back to life and extend their lifespan.',
  },
  {
    id: 'crack-01',
    title: 'Crack Repair & Wall Restoration',
    category: 'Repairs',
    thumbnail: Project6,
    gallery: [Project6, Project1],
    description:
      'Opening, assessing and professionally repairing cracks, followed by finishing and preparation for painting to prevent reoccurrence.',
  },
];

/**
 * Unique categories extracted from projects array.
 * 'All' is included as default.
 */
const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null); // object of project currently open in modal
  const [activeImageIndex, setActiveImageIndex] = useState(0); // index inside activeProject.gallery
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // update filteredProjects when filter changes
  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === filter));
    }
  }, [filter]);

  // Open modal for a project and set index to 0 (or optionally a specific image)
  const openProject = (project, index = 0) => {
    setActiveProject(project);
    setActiveImageIndex(index);
    // disable page scroll while modal open
    document.body.style.overflow = 'hidden';
  };

  // Close modal and restore scrolling
  const closeModal = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
    document.body.style.overflow = '';
  };

  // navigate gallery prev/next (wrap around)
  const showPrev = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) =>
      prev - 1 < 0 ? activeProject.gallery.length - 1 : prev - 1
    );
  }, [activeProject]);

  const showNext = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) =>
      prev + 1 >= activeProject.gallery.length ? 0 : prev + 1
    );
  }, [activeProject]);

  // Keyboard handlers: Esc to close, Left/Right to navigate
  useEffect(() => {
    const handler = (e) => {
      if (!activeProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeProject, showPrev, showNext]);

  // Preload images in the active project's gallery for smoother navigation
  useEffect(() => {
    if (!activeProject) return;
    activeProject.gallery.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [activeProject]);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Samaita Construction Solutions — Our Work</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Browse selected projects showcasing welding, carports, tiling, security installations, deck restoration and structural repairs.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full bg-white text-gray-900 py-8 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="text-gray-600 mt-1">Filter by service type to find similar work.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? 'bg-yellow-400 text-gray-900 shadow'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-white text-gray-900 py-6 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{project.category}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => openProject(project, 0)}
                    className="w-fit self-start bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300"
                  >
                    View Gallery
                  </button>
                  <a
                    href="/contact"
                    className="w-fit self-start border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal Lightbox */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} gallery`}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full p-4 relative overflow-y-auto max-h-[90vh]">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-700 hover:text-black text-2xl"
              aria-label="Close gallery"
            >
              &times;
            </button>

            {/* Header */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{activeProject.title}</h2>
              <p className="text-sm text-gray-600">{activeProject.description}</p>
            </div>

            {/* Gallery + Controls */}
            <div className="relative">
              {/* Prev button */}
              <button
                onClick={showPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow z-20"
                aria-label="Previous image"
              >
                ‹
              </button>

              {/* Image */}
              <div className="mx-auto max-w-3xl">
                <img
                  src={activeProject.gallery[activeImageIndex]}
                  alt={`${activeProject.title} - ${activeImageIndex + 1}`}
                  className="w-full rounded-lg shadow"
                />
              </div>

              {/* Next button */}
              <button
                onClick={showNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow z-20"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {activeProject.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`rounded overflow-hidden border-2 ${
                    i === activeImageIndex ? 'border-yellow-400' : 'border-transparent'
                  }`}
                  aria-label={`Open image ${i + 1}`}
                >
                  <img src={img} alt={`thumb-${i}`} className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300">
            Contact Samaita Construction Solutions for a free quote — whether it’s repairs, installations, or full renovations.
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

export default Projects;
