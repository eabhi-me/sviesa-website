import React from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiTarget } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-pure-black">
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
            About <span className="text-brand-red">Sviesa</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs font-semibold">
              Who We Are
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-pure-black to-deep-crimson/5 border border-deep-crimson/20 rounded-lg p-8 sm:p-12 mb-16"
        >
          <p className="text-soft-white/90 text-lg leading-relaxed">
            Sviesa is an amateur Photography and Media club focused on nurturing talent and setting standards in photography mechanics and movie dynamics. We aim to explore photography as a visual language, offering a platform for members to learn, share, and express their art. Our mission is to harness the power of visual storytelling through photography and film. Beyond capturing moments, we also cover college events, sports, and cultural festivals, aiming to immortalize the spirit of college life and provide a platform for students to relive their memorable experiences.
          </p>
        </motion.div>

        {/* Vision and Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-deep-crimson"></div>
            <div className="bg-pure-black border border-deep-crimson/20 rounded-lg p-8 h-full hover:border-brand-red/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-red/10 rounded-lg">
                  <FiEye className="text-brand-red" size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-soft-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-soft-white/80 leading-relaxed">
                To become a media house known at the national level for its content, where people can learn about various disciplines of multimedia and different methods of creating content. To be a nationally recognized media house for diverse multimedia content and content creation methods, fostering learning. Be a nationally recognized media house, enabling learning and exploration of multimedia disciplines and content creation methods.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-crimson to-brand-red"></div>
            <div className="bg-pure-black border border-deep-crimson/20 rounded-lg p-8 h-full hover:border-brand-red/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-red/10 rounded-lg">
                  <FiTarget className="text-brand-red" size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-soft-white">
                  Our Mission
                </h3>
              </div>
              <div className="text-soft-white/80 leading-relaxed space-y-4">
                <p>
                  We aim to captivate audiences with exceptional content, encourage exploration of multimedia disciplines, and set storytelling standards. Our united community nurtures creativity and knowledge.
                </p>
                <p>
                  To work with the demands of media eccentric world and represent our institute on the national level in terms of quality of media produced. To enable curious individuals to upskill themselves in various disciplines of content creation and management.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
