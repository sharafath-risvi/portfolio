import { useState, useEffect } from 'react';
import { Github, Menu, X, Mail } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    // Removed Contact from navigation menu
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4">
      <nav className={`
        w-full max-w-7xl
        backdrop-blur-xl
        rounded-2xl
        px-6 md:px-8 py-4
        flex items-center justify-between
        transition-all duration-500
        ${scrolled 
          ? 'shadow-2xl shadow-purple-900/20 bg-gray-900/90' 
          : 'bg-gray-900/80'
        }
        border border-gray-800/50
        hover:bg-gray-900/95
      `}>

        {/* LEFT – BRAND */}
        <div className="flex items-center gap-3 group">
          {/* Logo with Glow Effect */}
          <div className="
            relative
            w-11 h-11
            rounded-full
            bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600
            flex items-center justify-center
            font-bold text-white
            shadow-lg shadow-purple-500/30
            group-hover:scale-110
            group-hover:shadow-purple-500/50
            transition-all duration-300
            overflow-hidden
          ">
            {/* Animated Glow */}
            <div className="
              absolute inset-0
              bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-transparent
              animate-pulse
            "/>
            <div className="
              absolute inset-0
              bg-gradient-to-r from-transparent via-white/10 to-transparent
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform duration-1000
            "/>
            <span className="relative z-10 text-lg tracking-tight">SR</span>
          </div>

          {/* Name with Neon Effect */}
          <div className="flex flex-col">
            <span className="
              text-lg font-bold 
              bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300
              bg-clip-text text-transparent
              tracking-tight
              drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]
            ">
              Sharafath Risvi
            </span>
            <span className="
              text-xs font-medium
              text-gray-400
              tracking-wide
            ">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* CENTER – DESKTOP MENU (5 items, no Contact) */}
        <ul className="
          hidden lg:flex
          items-center
          gap-1
          p-1
          rounded-2xl
          bg-gray-800/50
          border border-gray-700/50
          backdrop-blur-sm
        ">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`
                  relative
                  px-6 py-3
                  rounded-xl
                  text-sm font-medium
                  transition-all duration-300
                  ${activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                {activeSection === item.id && (
                  <>
                    <span className="
                      absolute inset-0
                      rounded-xl
                      bg-gradient-to-r from-purple-600/80 to-indigo-600/80
                      -z-10
                      shadow-lg shadow-purple-500/20
                    "/>
                    <span className="
                      absolute inset-0
                      rounded-xl
                      border border-purple-500/30
                      -z-10
                    "/>
                  </>
                )}
                {item.label}
                {activeSection === item.id && (
                  <span className="
                    absolute bottom-1 left-1/2 -translate-x-1/2
                    w-1 h-1
                    rounded-full
                    bg-gradient-to-r from-cyan-400 to-blue-400
                    animate-pulse
                  "/>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT – ACTIONS (GitHub + Contact Button) */}
        <div className="flex items-center gap-4">
          {/* GitHub Icon with Neon Glow */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              p-2.5
              rounded-xl
              bg-gray-800
              border border-gray-700
              text-gray-400
              hover:text-white
              hover:border-purple-500/50
              hover:shadow-lg hover:shadow-purple-500/10
              transition-all duration-300
              relative
              overflow-hidden
            "
          >
            <Github size={20} className="relative z-10 group-hover:scale-110" />
            <div className="
              absolute inset-0
              bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform duration-1000
            "/>
          </a>

          {/* Contact Button (Kept - Beside GitHub) */}
          <a
            href="#contact"
            className="
              group
              hidden md:flex
              items-center gap-2
              px-5 py-2.5
              rounded-xl
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:from-purple-500 hover:to-indigo-500
              text-white
              text-sm font-semibold
              hover:scale-105
              hover:shadow-xl hover:shadow-purple-500/20
              transition-all duration-300
              relative
              overflow-hidden
            "
          >
            <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">Contact</span>
            <div className="
              absolute inset-0
              bg-gradient-to-r from-white/0 via-white/10 to-white/0
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform duration-1000
            "/>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              lg:hidden
              p-2.5
              rounded-xl
              bg-gray-800
              border border-gray-700
              text-gray-400
              hover:text-purple-400
              hover:border-purple-500/50
              transition-all duration-300
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU - Dark Theme (5 items, no Contact) */}
        {isMenuOpen && (
          <div className="
            absolute top-full left-0 right-0 mt-4
            lg:hidden
            backdrop-blur-xl
            rounded-2xl
            p-4
            bg-gray-900/95
            border border-gray-800/50
            shadow-2xl shadow-black/50
            animate-fade-in-up
          ">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    flex items-center justify-between
                    px-4 py-3
                    rounded-xl
                    text-sm font-medium
                    transition-all duration-300
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-900/30 to-indigo-900/30 text-purple-300 border border-purple-800/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }
                  `}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="
                      w-2 h-2
                      rounded-full
                      bg-gradient-to-r from-purple-400 to-cyan-400
                      animate-pulse
                      shadow-[0_0_8px_rgba(168,85,247,0.5)]
                    "/>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;