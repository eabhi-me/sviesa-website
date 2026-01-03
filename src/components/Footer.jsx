import React from 'react';
import { FiMail, FiInstagram, FiYoutube, FiLinkedin, FiLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="contact" className="bg-pure-black border-t border-deep-crimson/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-bold text-soft-white mb-4">
              SVI<span className="text-brand-red">E</span>SA
            </h3>
            <p className="text-soft-white/70 mb-4">
              Amateur Photography and Media club focused on nurturing talent and setting standards in photography mechanics and movie dynamics.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sviesa.sliet/"
                className="text-soft-white hover:text-brand-red transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="http://www.youtube.com/@SviesaThePMCSLIET"
                className="text-soft-white hover:text-brand-red transition-colors duration-300"
                aria-label="YouTube"
              >
                <FiYoutube size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-soft-white hover:text-brand-red transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://linktr.ee/sviesa.sliet?utm_source=linktree_profile_share&ltsid=9fb0e157-64a5-4bef-9413-baf29594fcbe"
                className="text-soft-white hover:text-brand-red transition-colors duration-300"
                aria-label="Linktree"
              >
                <FiLink size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-red uppercase tracking-widest text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Activities', 'Events', 'Projects'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-soft-white/70 hover:text-brand-red transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-red uppercase tracking-widest text-sm font-semibold mb-4">Get In Touch</h4>
            <p className="text-soft-white/70 mb-2">SLIET, Longowal</p>
            <p className="text-soft-white/70 mb-4">Punjab, India</p>
            <a
              href="mailto:sviesa.sliet@gmail.com"
              className="inline-flex items-center gap-2 text-soft-white hover:text-brand-red transition-colors duration-300"
            >
              <FiMail size={18} />
              sviesa.sliet@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-deep-crimson/20 mt-8 pt-8 text-center">
          <p className="text-soft-white/50 text-sm">
            &copy; {new Date().getFullYear()} Sviesa Photography & Media Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
