import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiPlay, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-pure-black/95 to-pure-black">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-red rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black text-soft-white mb-4 tracking-tight">
            sviesa
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Photography & Media Club
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl text-soft-white/90 mb-12 font-light leading-relaxed"
        >
          Capturing moments. Creating stories.
          <br />
          <span className="text-brand-red font-medium">Immortalizing memories.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#about"
            className="group relative px-8 py-4 bg-brand-red text-soft-white font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-red/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiCamera size={20} />
              Explore Our Work
            </span>
            <div className="absolute inset-0 bg-deep-crimson transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
          <a
            href="#activities"
            className="group px-8 py-4 border-2 border-soft-white/20 text-soft-white font-semibold rounded-sm hover:border-brand-red hover:text-brand-red transition-all duration-300 flex items-center gap-2"
          >
            <FiPlay size={20} />
            Our Activities
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-brand-red" size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-deep-crimson/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-deep-crimson/30"></div>
    </section>
  );
};

export default Hero;
