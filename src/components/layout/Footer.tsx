import React from 'react';
import { Link } from '../../context/RouterContext';

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
            Software engineer and hardware builder.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-600">
          <Link to="/work" className="hover:text-gray-950">
            Projects
          </Link>
          <Link to="/writing" className="hover:text-gray-950">
            Writing
          </Link>
          <Link to="/about" className="hover:text-gray-950">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-950">
            Contact
          </Link>
          <a
            href="https://github.com/aryanpandey28"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-950"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-950"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aryanpandey.build@gmail.com"
            className="hover:text-gray-950"
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
