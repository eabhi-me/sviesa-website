import React from 'react';
import { motion } from 'framer-motion';
import { FiImage, FiAward } from 'react-icons/fi';

const Events = () => {
  const events = [
    {
      title: 'Photowalk',
      description: 'Experience the world through a new lens with Sviesa\'s captivating photowalks. Guided by our photography enthusiasts, these walks offer a unique blend of art and exploration. Join us as we navigate picturesque landscapes, urban gems, and hidden corners, all while refining your photography skills.',
      image: 'photowalk'
    },
    {
      title: 'Photo Exhibition',
      description: 'Sviesa recently curated a captivating Photo Exhibition that transformed our campus into a gallery of visual narratives. The event showcased a diverse collection of images that captured emotions, stories, and moments frozen in time, providing a platform for both amateur and seasoned photographers.',
      image: 'exhibition'
    }
  ];

  const majorProjects = [
    {
      title: 'Campus Tour, SLIET',
      description: 'Sviesa embarked on a transformative cinematic journey with a meticulously crafted Campus Tour video of SLIET College. This immersive experience captured the essence of campus life, academic excellence, and vibrant camaraderie. The video resonated deeply with viewers, offering prospective students and stakeholders a vivid insight into the institution\'s offerings.',
      tag: 'Cinematography'
    },
    {
      title: 'Jamming',
      description: 'Sviesa orchestrated a harmonious celebration on World Photography Day with a captivating Jamming Eve. The event brought together photography enthusiasts from our college to share their passion for visual storytelling. Through engaging discussions, photo showcases, and collaborative sessions, participants immersed themselves in the art of photography.',
      tag: 'Community Event'
    },
    {
      title: 'Anjana-Anjani',
      description: 'Sviesa orchestrated a remarkable Jamming Eve on the convocation day of SLIET 2022, creating an unforgettable musical experience. The event brought together students, faculty, and staff in a joyous celebration of academic achievements. The vibrant performances, heartfelt melodies, and camaraderie filled the campus with palpable energy.',
      tag: 'Cultural Event'
    }
  ];

  const upcomingProjects = [
    {
      title: 'Departmental Tour',
      description: 'Step into the captivating world of SLIET\'s departments with Sviesa\'s exclusive departmental tour. Join us as we take you on a visual journey, delving into the unique and fascinating aspects of each department within our esteemed institute.',
      icon: FiImage
    },
    {
      title: 'Different Clubs Tour',
      description: 'Embark on an exciting tour of the various clubs within Our Club as Sviesa takes you on a captivating journey through their unique offerings and vibrant atmospheres. Join us as we explore the diverse range of clubs that make up the fabric of our dynamic community.',
      icon: FiImage
    },
    {
      title: 'Quarterly Magazine',
      description: 'Discover \'Quarterly\': Sviesa\'s captivating digital photography magazine. Dive into visual storytelling with breathtaking photos, insightful articles, and exclusive interviews, elegantly packaged in digital form. Each issue whisks you to diverse global corners, presenting talented photographers\' awe-inspiring captures.',
      icon: FiAward
    }
  ];

  return (
    <section id="events" className="py-20 bg-pure-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Events Organized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-soft-white mb-4 text-center">
            Events <span className="text-brand-red">Organized</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs font-semibold">
              Our Initiatives
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg border border-deep-crimson/20 hover:border-brand-red/50 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-deep-crimson/20 to-brand-red/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiImage className="text-soft-white/20 group-hover:text-brand-red/30 transition-colors duration-300" size={64} />
                  </div>
                  <div className="absolute inset-0 bg-pure-black/50 group-hover:bg-pure-black/30 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 bg-pure-black">
                  <h3 className="text-2xl font-display font-bold text-soft-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-soft-white/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          id="projects"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-soft-white mb-4 text-center">
            Major <span className="text-brand-red">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs font-semibold">
              Our Achievements
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>

          <div className="space-y-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-pure-black border border-deep-crimson/20 rounded-lg p-8 hover:border-brand-red/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-red to-deep-crimson"></div>
                <div className="relative z-10 pl-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-soft-white group-hover:text-brand-red transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full border border-brand-red/30">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-soft-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-soft-white mb-4 text-center">
            Upcoming <span className="text-brand-red">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs font-semibold">
              What's Next
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-pure-black to-deep-crimson/5 border border-deep-crimson/20 rounded-lg p-6 hover:border-brand-red/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <project.icon className="text-brand-red" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-soft-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-soft-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 pt-4 border-t border-deep-crimson/20">
                  <span className="text-brand-red text-sm font-semibold uppercase tracking-wide">Coming Soon</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
