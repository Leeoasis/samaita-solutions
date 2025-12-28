// src/pages/Projects.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Hero from '../assets/images/projects-hero.png';

/**
 * Projects list
 * Images/videos resolved from /public/images/{folder}/{filename}
 * Auto-detects videos by extension
 */

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg'];
const isVideoFile = (file) =>
  typeof file === 'string' &&
  VIDEO_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext));

const projects = [
  {
    id: 'welding-01',
    title: 'Welding & Spray Painting',
    category: 'Welding',
    folder: 'welding',
    thumbnail: 'wldw.png',
    gallery: [
      'wld4.jpeg','wld3.jpeg','wld2.jpeg','wld5.jpeg','wld1.jpeg',
      'wld6.jpeg','wld7.jpeg','wld8.jpeg','wld9.jpeg','wld10.jpeg',
      'wld11.jpeg','wld12.jpeg','wld13.jpeg','wld14.jpeg','wld15.jpeg',
      'wld16.jpeg','wld17.jpeg','wld18.jpeg','wld19.jpeg','wld20.jpeg',
      'wld21.jpeg','wld22.jpeg','wld23.jpeg','wld24.jpeg','wld25.jpeg',
      'wld26.jpeg', 'wldv1.mp4', 'wlvd2.mp4','wlvd4.mp4',
      // later: 'demo.mp4'
    ],
    description:
      'Steel fabrication and repairs with professional spray-paint finishing — gates, frames, and security fixtures restored and protected.',
  },
  {
    id: 'skimming-01',
    title: 'Wall & Ceiling Skimming',
    category: 'Skimming',
    folder: 'skimming',
    thumbnail: 'skmw.png',
    gallery: ['skm1.jpeg', 'skm2.jpeg', 'skm3.jpeg'],
    description:
      'Professional wall and ceiling skimming to create smooth, even surfaces ready for painting or finishing.',
  },
  {
    id: 'tiling-01',
    title: 'Tiling & Bathroom Renovation',
    category: 'Tiling',
    folder: 'tiling',
    thumbnail: 'tlw.png',
    gallery: [
      'tl1.jpeg','tl2.jpeg','tl3.jpeg','tl4.jpeg','tl5.jpeg',
      'tl6.jpeg','tl7.jpeg','tl8.jpeg','tl9.jpeg','tl10.jpeg',
      'tl11.jpeg','tl12.jpeg','tl13.jpeg',
    ],
    description:
      'Floor and wall tiling with waterproofing and neat, precision finishes for bathrooms and kitchens.',
  },
  {
    id: 'security-01',
    title: 'Razor Wire & Perimeter Security',
    category: 'Razor Wire',
    folder: 'razor-wire',
    thumbnail: 'rzw.png',
    gallery: [
      'rz1.jpeg','rz2.jpeg','rz3.jpeg','rz4.jpeg','rz5.jpeg',
      'rz6.jpeg','rz7.jpeg','rz8.jpeg','rz9.jpeg','rz10.jpeg',
      'rzvd1.mp4', 'rzvd2.mp4',
    ],
    description:
      'Professional razor wire installation and reinforced perimeter security solutions.',
  },
  {
    id: 'deck-01',
    title: 'Deck Sanding, Polishing & Sealing',
    category: 'Decks',
    folder: 'sanding',
    thumbnail: 'snd6.jpeg',
    gallery: [
      'snd1.jpeg','snd2.jpeg','snd3.jpeg','snd4.jpeg','snd5.jpeg',
      'snd6.jpeg','snd7.jpeg','snd8.jpeg','snd9.jpeg','snd10.jpeg',
    ],
    description:
      'Deck restoration through sanding, polishing and sealing to extend lifespan.',
  },
  {
    id: 'crack-01',
    title: 'Crack Repair & Wall Restoration',
    category: 'Crack Repairs',
    folder: 'cracks',
    thumbnail: 'ocrw.png',
    gallery: [
      'ocr1.jpeg','ocr2.jpeg','ocr3.jpeg','ocr4.jpeg','ocr5.jpeg',
      'ocr6.jpeg','ocr7.jpeg','ocr8.jpeg','ocr9.jpeg','ocr10.jpeg',
      'ocr11.jpeg',
    ],
    description:
      'Professional crack assessment, repair and surface restoration to prevent reoccurrence.',
  },
  {
    id: 'painting-01',
    title: 'Painting & Surface Preparation',
    category: 'Painting',
    folder: 'painting',
    thumbnail: 'ptw.png',
    gallery: [
      'pt1.jpeg','pt2.jpeg','pt3.jpeg','pt4.jpeg','pt5.jpeg',
      'pt6.jpeg','pt7.jpeg','pt8.jpeg','pt9.jpeg', 'ptvd1.mp4',
      'ptvd2.mp4', 'ptvd3.mp4', 'ptvd4.mp4',  'ptvd5.mp4',
      'ptvd6.mp4', 'ptvd7.mp4', 'ptvd8.mp4',
    ],
    description:
      'Comprehensive surface preparation and painting services for interior and exterior spaces.',
  },
  {
    id: 'ceiling-01',
    title: 'Ceiling Repairs & Replacement',
    category: 'Ceiling Repairs',
    folder: 'ceiling',
    thumbnail: 'clw.png',
    gallery: ['cl1.jpeg', 'cl2.jpeg', 'cl3.jpeg'],
    description:
      'Expert ceiling repairs and replacements to restore structural integrity and aesthetic appeal.',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setFilteredProjects(
      filter === 'All' ? projects : projects.filter(p => p.category === filter)
    );
  }, [filter]);

  const openProject = (project, index = 0) => {
    setActiveProject(project);
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
    document.body.style.overflow = '';
  };

  const showPrev = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex(i =>
      i - 1 < 0 ? activeProject.gallery.length - 1 : i - 1
    );
  }, [activeProject]);

  const showNext = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex(i =>
      i + 1 >= activeProject.gallery.length ? 0 : i + 1
    );
  }, [activeProject]);

  useEffect(() => {
    const handler = e => {
      if (!activeProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeProject, showPrev, showNext]);

  const handleTouchStart = e => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = e => {
    touchEndX.current = e.changedTouches[0].screenX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) < 50) return;
    delta > 0 ? showNext() : showPrev();
  };

  const currentItem = activeProject?.gallery[activeImageIndex];

  return (
    <main>
      {/* HERO */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-40 pb-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Samaita Construction Solutions — Our Work
          </h1>
          <p className="text-lg text-gray-200">
            Browse selected projects showcasing our construction and renovation expertise.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === cat
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-6 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map(project => (
            <article
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={`/images/${project.folder}/${project.thumbnail}`}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-700 flex-grow">
                  {project.description}
                </p>
                <button
                  onClick={() => openProject(project)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition"
                >
                  View Gallery
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-6"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-6xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-2xl font-bold"
            >
              &times;
            </button>

            <div
              className="relative flex justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                onClick={showPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              >
                ‹
              </button>

              {isVideoFile(currentItem) ? (
                <video
                  src={`/images/${activeProject.folder}/${currentItem}`}
                  controls
                  className="max-h-[70vh] max-w-[60vw] rounded-lg shadow"
                />
              ) : (
                <img
                  src={`/images/${activeProject.folder}/${currentItem}`}
                  className="max-h-[70vh] max-w-[60vw] object-contain rounded-lg shadow"
                  alt=""
                />
              )}

              <button
                onClick={showNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              >
                ›
              </button>
            </div>

            <div className="mt-6 grid grid-cols-6 gap-3">
              {activeProject.gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`border-2 rounded overflow-hidden ${
                    i === activeImageIndex
                      ? 'border-yellow-400'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={`/images/${activeProject.folder}/${item}`}
                    className="h-20 w-full object-cover"
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
