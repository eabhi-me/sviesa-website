import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-brand-red hover:bg-deep-crimson text-soft-white rounded-full shadow-lg shadow-brand-red/30 hover:shadow-xl hover:shadow-brand-red/50 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
            size={24} 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
