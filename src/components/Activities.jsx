import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiFilm, FiMic, FiLayout, FiEdit3 } from 'react-icons/fi';

const Activities = () => {
  const activities = [
    {
      icon: FiCamera,
      title: 'Photography',
      description: 'Photography is the artistic practice of crafting enduring visuals through the capture of light, achieved using cameras. This process involves recording light patterns using various camera mechanisms, resulting in the creation of enduring images that encapsulate moments, emotions, and stories.',
      color: 'brand-red'
    },
    {
      icon: FiFilm,
      title: 'Cinematography',
      description: 'Cinematography is the captivating art of capturing dynamic moments on electronic media. Our creative lens brings events to life, transforming them into mesmerizing aftermovies. From vibrant Republic Day and Independence Day Celebrations to the energetic pulse of Madhuram Annual Fest and the innovation buzz of techFEST.',
      color: 'deep-crimson'
    },
    {
      icon: FiMic,
      title: 'Podcast',
      description: 'Join our monthly podcast where every student and member of the SLIET family is warmly invited to share their stories, preserving memories for eternity. From campus anecdotes to inspiring journeys, we celebrate the diverse voices of our community – students, faculty, alumni, and more.',
      color: 'brand-red'
    },
    {
      icon: FiLayout,
      title: 'Graphic Design',
      description: 'At Sviesa, we\'re graphic design masters, transcending aesthetics to convey ideas powerfully. Our skilled designers merge creativity, technical finesse, and communication insights. We meticulously curate every detail—typography, colors, layout—for specific impact.',
      color: 'deep-crimson'
    },
    {
      icon: FiEdit3,
      title: 'Content Writing',
      description: 'At Sviesa, we\'re the architects of visual storytelling. Our expertise transforms ideas into impactful messages. With an artistic blend of creativity and technical finesse, our skilled team crafts content that resonates. Every detail serves a purpose, creating a lasting impression.',
      color: 'brand-red'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-pure-black via-deep-crimson/5 to-pure-black">
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
            Club <span className="text-brand-red">Activities</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs font-semibold">
              What We Do
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-pure-black border border-deep-crimson/20 rounded-lg p-8 hover:border-brand-red/50 transition-all duration-300 overflow-hidden">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-deep-crimson/0 group-hover:from-brand-red/5 group-hover:to-deep-crimson/10 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-brand-red/10 rounded-lg group-hover:bg-brand-red/20 transition-colors duration-300">
                      <activity.icon className={`text-${activity.color}`} size={32} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-soft-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-soft-white/70 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-brand-red to-deep-crimson group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-deep-crimson/20 group-hover:border-brand-red/50 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-deep-crimson/20"
        >
          {[
            { number: '500+', label: 'Photos Captured' },
            { number: '50+', label: 'Events Covered' },
            { number: '20+', label: 'Videos Produced' },
            { number: '100+', label: 'Active Members' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-brand-red mb-2">
                {stat.number}
              </div>
              <div className="text-soft-white/70 uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
