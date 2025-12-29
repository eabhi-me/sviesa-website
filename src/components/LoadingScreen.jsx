import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-pure-black flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl sm:text-8xl font-display font-black text-soft-white mb-8 tracking-tight"
            >
              SVI
              <motion.span
                initial={{ color: '#FAFAFA' }}
                animate={{ color: '#E53935' }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                E
              </motion.span>
              SA
            </motion.h1>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-brand-red to-deep-crimson mx-auto rounded-full"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-brand-red uppercase tracking-widest text-xs font-semibold mt-6"
            >
              Photography & Media Club
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
