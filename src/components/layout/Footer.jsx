import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-effect mt-16 py-6 relative z-10">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/krishna-agrawal-ab014a248/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

          <a
            href="https://github.com/krishna06045"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>

          <a
            href="mailto:krishnaag0604@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail size={16} /> krishnaag0604@gmail.com
          </a>

          <a
            href="tel:+919837054334"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Phone size={16} /> +91 98370 54334
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
