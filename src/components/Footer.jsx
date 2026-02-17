import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        py-8
        bg-gradient-to-t from-gray-900 to-black
        border-t border-gray-800
      "
    >
      <div className="
        max-w-7xl 
        mx-auto 
        px-4 sm:px-6
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between 
        gap-4
      ">
        
        {/* LEFT – NAME & COPYRIGHT */}
        <div className="text-center md:text-left">
          <h3 className="
            text-lg font-bold 
            bg-gradient-to-r from-purple-400 to-cyan-400
            bg-clip-text text-transparent
          ">
            Sharafath Risvi
          </h3>
          <p className="
            text-sm 
            text-gray-400 
            mt-1
          ">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* CENTER – SIMPLE MESSAGE */}
        <div className="
          text-gray-500 
          text-sm 
          text-center
        ">
          Full Stack Java Developer
        </div>

        {/* RIGHT – SOCIAL LINKS */}
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2
              rounded-lg
              bg-gray-800/50
              border border-gray-700/50
              text-gray-400
              hover:text-white
              hover:bg-gray-800
              hover:border-purple-500/50
              transition-all duration-300
            "
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/sharafathrisvi02"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2
              rounded-lg
              bg-gray-800/50
              border border-gray-700/50
              text-gray-400
              hover:text-white
              hover:bg-gray-800
              hover:border-blue-500/50
              transition-all duration-300
            "
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:sharafathrisvi02@gmail.com"
            className="
              p-2
              rounded-lg
              bg-gray-800/50
              border border-gray-700/50
              text-gray-400
              hover:text-white
              hover:bg-gray-800
              hover:border-red-500/50
              transition-all duration-300
            "
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;