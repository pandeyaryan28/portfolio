import React from 'react';
import { Link } from '../../context/RouterContext';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../../data/links';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-auto py-10 px-4 sm:px-6 bg-[#FAFAF9] text-sm text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="text-center sm:text-left">
          <Link
            to="/"
            className="font-semibold text-gray-900 hover:text-black transition-colors"
          >
            Aryan Pandey
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">
            Innovator and builder.
          </p>
        </div>

        {/* Links with subtle lift on hover */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-600">
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            <Link to="/work" className="hover:text-gray-950 transition-colors">
              Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            <Link to="/writing" className="hover:text-gray-950 transition-colors">
              Writing
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            <Link to="/about" className="hover:text-gray-950 transition-colors">
              About
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            <Link to="/contact" className="hover:text-gray-950 transition-colors">
              Contact
            </Link>
          </motion.div>
          <motion.a
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            href={SITE_LINKS.profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-950 transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            href={SITE_LINKS.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-950 transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            href={`mailto:${SITE_LINKS.profile.email}`}
            className="hover:text-gray-950 transition-colors"
          >
            Email
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400">
          © {currentYear} Aryan Pandey
        </div>
      </div>
    </footer>
  );
};
