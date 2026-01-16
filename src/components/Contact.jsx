import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Google Apps Script endpoint from environment variable
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Note: With 'no-cors' mode, we can't read the response
      // We assume success if no error is thrown
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pure-black via-deep-crimson/5 to-pure-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-soft-white mb-6">
              Join Our <span className="text-brand-red">Community</span>
            </h2>
            <p className="text-soft-white/80 text-lg leading-relaxed mb-8">
              Whether you're a seasoned photographer or just starting your journey in visual storytelling, 
              Sviesa welcomes you. Connect with us to collaborate, learn, and create amazing content together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red/10 rounded-lg mt-1">
                  <FiUser className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-soft-white font-semibold mb-2">For Students</h3>
                  <p className="text-soft-white/70">
                    Join our club and explore various multimedia disciplines while working on real projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red/10 rounded-lg mt-1">
                  <FiMessageSquare className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-soft-white font-semibold mb-2">For Collaborations</h3>
                  <p className="text-soft-white/70">
                    Partner with us for event coverage, content creation, and multimedia projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-pure-black border border-deep-crimson/20 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-soft-white mb-6">
                Get In Touch
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-soft-white/80 mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-soft-white/40" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-pure-black border border-deep-crimson/30 rounded-lg pl-12 pr-4 py-3 text-soft-white focus:outline-none focus:border-brand-red transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-soft-white/80 mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-soft-white/40" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-pure-black border border-deep-crimson/30 rounded-lg pl-12 pr-4 py-3 text-soft-white focus:outline-none focus:border-brand-red transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-soft-white/80 mb-2 text-sm font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-soft-white/40" size={18} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-pure-black border border-deep-crimson/30 rounded-lg pl-12 pr-4 py-3 text-soft-white focus:outline-none focus:border-brand-red transition-colors duration-300 resize-none"
                      placeholder="Tell us about your interest..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-soft-white font-semibold py-3 px-6 rounded-lg hover:bg-deep-crimson transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <FiSend className={`${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform duration-300`} size={18} />
                </button>
              </form>
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-red/20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-red/20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
