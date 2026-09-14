import React from 'react';
import { Link } from '../../context/RouterContext';

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
            className="font-semibold text-gray-900 hover:text-black"
          >
            Aryan Pandey
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">
            Innovator and builder.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-600">
          <Link to="/work" className="hover:text-gray-950 transition-colors">
            Projects
          </Link>
          <Link to="/writing" className="hover:text-gray-950 transition-colors">
            Writing
          </Link>
          <Link to="/about" className="hover:text-gray-950 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-950 transition-colors">
            Contact
          </Link>
          <a
            href={SITE_LINKS.profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-950 transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_LINKS.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-950 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_LINKS.profile.email}`}
            className="hover:text-gray-950 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400">
          © {currentYear} Aryan Pandey
        </div>
      </div>
    </footer>
  );
};
