import React from 'react';
import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';

const Gallery = () => {
  // Masonry grid layout items with real images
  const galleryItems = [
    { id: 1, image: '/images/IMG (1).jpeg', title: 'Photography Highlight', type: 'Event Photography', span: 'col-span-2 row-span-2' },
    { id: 2, image: '/images/IMG (2).jpeg', title: 'Candid Moment', type: 'Portrait', span: 'col-span-1 row-span-1' },
    { id: 3, image: '/images/IMG (3).jpeg', title: 'Campus Life', type: 'Documentary', span: 'col-span-1 row-span-1' },
    { id: 4, image: '/images/IMG (4).jpeg', title: 'Event Coverage', type: 'Photojournalism', span: 'col-span-1 row-span-2' },
    { id: 5, image: '/images/IMG (5).jpeg', title: 'Behind the Scenes', type: 'Cinematography', span: 'col-span-2 row-span-1' },
    { id: 6, image: '/images/IMG (6).jpeg', title: 'Artistic Shot', type: 'Fine Art', span: 'col-span-1 row-span-1' },
    { id: 7, image: '/images/IMG (7).jpeg', title: 'Group Moments', type: 'Event Photography', span: 'col-span-1 row-span-1' },
    { id: 8, image: '/images/IMG (8).jpeg', title: 'Nature & Landscapes', type: 'Photography', span: 'col-span-2 row-span-2' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pure-black via-deep-crimson/5 to-pure-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-soft-white mb-4">
            Our <span className="text-brand-red">Gallery</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs font-semibold">
              Visual Stories
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-lg ${item.span} cursor-pointer`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-pure-black/40 group-hover:bg-pure-black/30 transition-all duration-300">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-deep-crimson/50 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-display font-bold text-soft-white mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-red text-sm uppercase tracking-wide font-semibold">
                  {item.type}
                </p>
              </div>

              {/* Red accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-red to-deep-crimson group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand-red text-soft-white font-semibold rounded-sm hover:bg-deep-crimson transition-colors duration-300"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
