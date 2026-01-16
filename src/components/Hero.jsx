import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiPlay, FiArrowDown, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { SiLinktree } from 'react-icons/si';

const socialParticles = [
  { Icon: FiInstagram, color: 'text-brand-red', top: '18%', left: '14%', duration: 6, delay: 0 },
  { Icon: FiYoutube, color: 'text-soft-white', top: '32%', left: '78%', duration: 7, delay: 0.6 },
  { Icon: FiLinkedin, color: 'text-soft-white/80', top: '65%', left: '22%', duration: 5.5, delay: 0.3 },
  { Icon: FiCamera, color: 'text-brand-red', top: '70%', left: '70%', duration: 7.5, delay: 0.9 },
];

const keywordPhrases = [
  'Street & Event Photography',
  'Creative Direction & Storyboarding',
  'Motion Graphics & Editing',
  'Brand Visual Systems',
  'Portraits, Light, and Color',
];

const keywordLoop = [...keywordPhrases, ...keywordPhrases];

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

        {/* Floating social/media motifs */}
        <div className="absolute inset-0 pointer-events-none">
          {socialParticles.map(({ Icon, color, top, left, duration, delay }, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${color}`}
              style={{ top, left }}
              animate={{ y: [0, -14, 0], rotate: [0, 6, -6, 0], opacity: [0.4, 0.9, 0.6] }}
              transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
            >
              <div className="p-3 rounded-full bg-pure-black/50 border border-brand-red/20 shadow-lg shadow-brand-red/10 backdrop-blur-sm">
                <Icon size={20} />
              </div>
            </motion.div>
          ))}

          {/* Subtle halo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,20,60,0.12),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.08),transparent_32%)] blur-3xl" />
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

        {/* Keyword Carousel */}
        <div className="relative overflow-hidden h-12 sm:h-14 mb-12">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="flex flex-col gap-3 text-soft-white/80 text-lg sm:text-xl font-medium tracking-tight"
          >
            {keywordLoop.map((phrase, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2"
              >
                <span className="inline-block h-px w-10 bg-brand-red/60"></span>
                <span>{phrase}</span>
                <span className="inline-block h-px w-10 bg-brand-red/60"></span>
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pure-black via-transparent to-pure-black" />
        </div>

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

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-6 justify-center items-center mt-12"
        >
          <a
            href="https://www.instagram.com/sviesa.sliet/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-soft-white/70 hover:text-brand-red transition-colors duration-300"
            aria-label="Follow us on Instagram"
          >
            <FiInstagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">@sviesa.sliet</span>
          </a>
          
          <div className="h-8 w-px bg-soft-white/20"></div>
          
          <a
            href="https://linktr.ee/sviesa.sliet?utm_source=linktree_profile_share&ltsid=9fb0e157-64a5-4bef-9413-baf29594fcbe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-soft-white/70 hover:text-brand-red transition-colors duration-300"
            aria-label="View our Linktree"
          >
            <SiLinktree size={24} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">All Links</span>
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
