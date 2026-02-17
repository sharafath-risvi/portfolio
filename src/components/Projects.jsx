import React from 'react';
import { ExternalLink, Github, Eye, Users, Database, Server, Lock, Film, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'A comprehensive full-stack web application for managing employee data with secure CRUD operations, real-time updates, and smooth UI-backend communication.',
      tech: ['React', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
      features: ['Employee CRUD', 'Department Management', 'Search & Filter', 'Export Reports'],
      icon: <Users />,
      gradient: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'Task Flow – Task Management App',
      description: 'An intuitive task organizer with drag-and-drop functionality, priority management, and persistent storage for efficient daily task management.',
      tech: ['React', 'Spring Boot', 'Hibernate', 'MySQL', 'Drag & Drop'],
      features: ['Task Categories', 'Priority Levels', 'Progress Tracking', 'Notifications'],
      icon: <CheckCircle />,
      gradient: 'from-purple-500 to-pink-500',
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'Movie Explorer Application',
      description: 'Interactive movie search platform that fetches live data from external APIs, featuring detailed views, favorites saving, and personalized recommendations.',
      tech: ['React', 'External API', 'Tailwind CSS', 'Local Storage', 'Axios'],
      features: ['Live Search', 'Movie Details', 'Favorites System', 'Rating System'],
      icon: <Film />,
      gradient: 'from-orange-500 to-yellow-500',
      github: 'https://github.com/sharafath-risvi/movie-explorer',
      demo: 'https://rainbow-centaur-dc6636.netlify.app',
      status: 'Completed'
    },
    {
      title: 'User Authentication System',
      description: 'Secure authentication system with user registration, login, JWT token management, protected routes, and comprehensive form validation.',
      tech: ['React', 'Spring Boot', 'JWT', 'MySQL', 'Spring Security'],
      features: ['User Registration', 'Login/Logout', 'Protected Routes', 'Session Management'],
      icon: <Lock />,
      gradient: 'from-green-500 to-emerald-500',
      github: '#',
      demo: '#',
      status: 'Completed'
    }
  ];

  return (
    <section
      id="projects"
      className="
        relative
        py-32
        px-4 sm:px-6
        overflow-hidden
      "
    >
      {/* Background Effects - Matches About Section */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[1200px] h-[1200px]
          bg-gradient-to-br from-purple-900/5 via-indigo-900/5 to-gray-900/5
          rounded-full
          blur-3xl
        " />
        
        {/* Grid Pattern */}
        <div className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(30,27,75,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,27,75,0.05)_1px,transparent_1px)]
          bg-[size:50px_50px]
        " />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="
              w-2 h-2 
              rounded-full 
              bg-gradient-to-r from-purple-500 to-pink-500
              animate-pulse
            " />
            <span className="
              text-sm font-semibold 
              text-gray-400 
              tracking-widest uppercase
            ">
              Featured Work
            </span>
            <div className="
              w-2 h-2 
              rounded-full 
              bg-gradient-to-r from-pink-500 to-purple-500
              animate-pulse animation-delay-300
            " />
          </div>

          <h2 className="
            text-5xl md:text-6xl 
            font-bold 
            mb-6
          ">
            <span className="text-black">My{' '}</span>
            <span className="
              bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
              bg-clip-text text-transparent
              animate-gradient
            ">
              Projects
            </span>
          </h2>

          <p className="
            text-xl 
            text-gray-400 
            max-w-3xl 
            mx-auto
          ">
            Showcasing my technical capabilities through practical, real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-gradient-to-br from-gray-900/80 to-gray-900/60
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                border border-gray-800/50
                hover:border-purple-500/30
                hover:shadow-2xl hover:shadow-purple-500/10
                transition-all duration-500
                transform hover:-translate-y-2
              "
            >
              {/* Project Header with Gradient */}
              <div className={`
                relative
                bg-gradient-to-r ${project.gradient}
                p-6
              `}>
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-white/10 to-transparent
                  opacity-30
                "/>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="
                      w-12 h-12 
                      rounded-xl 
                      bg-white/20
                      backdrop-blur-sm
                      flex items-center justify-center
                      text-white
                    ">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="
                        text-xl font-bold 
                        text-white
                        mb-1
                      ">
                        {project.title}
                      </h3>
                      <div className="
                        inline-flex 
                        items-center 
                        gap-1 
                        px-3 py-1 
                        rounded-full 
                        bg-white/20 
                        backdrop-blur-sm
                      ">
                        <div className="
                          w-2 h-2 
                          rounded-full 
                          bg-green-400 
                          animate-pulse
                        "/>
                        <span className="
                          text-xs font-medium 
                          text-white
                        ">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="
                  text-gray-300 
                  mb-6 
                  leading-relaxed
                ">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="
                    text-sm font-semibold 
                    text-gray-400 
                    uppercase 
                    tracking-wider 
                    mb-3
                  ">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="
                          text-xs 
                          px-3 py-1.5 
                          rounded-lg 
                          bg-gray-800/50 
                          text-gray-300 
                          border border-gray-700/50
                          hover:bg-gray-800
                          hover:border-gray-600
                          transition-all duration-300
                        "
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="
                    text-sm font-semibold 
                    text-gray-400 
                    uppercase 
                    tracking-wider 
                    mb-3
                  ">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="
                          text-xs 
                          px-3 py-1.5 
                          rounded-lg 
                          bg-gradient-to-r from-gray-800 to-gray-900
                          text-gray-300 
                          border border-gray-700/50
                          hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30
                          hover:border-purple-500/30
                          hover:text-white
                          transition-all duration-300
                          group/tech
                        "
                      >
                        {tech}
                        <span className="
                          inline-block 
                          ml-1 
                          opacity-0 
                          group-hover/tech:opacity-100 
                          group-hover/tech:translate-x-1 
                          transition-all duration-300
                        ">
                          →
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="
                  flex 
                  items-center 
                  justify-between 
                  pt-6 
                  border-t 
                  border-gray-800/50
                ">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="
                        group/link
                        flex items-center gap-2
                        px-4 py-2.5
                        rounded-xl
                        bg-gray-800/50
                        text-gray-300
                        hover:text-white
                        hover:bg-gray-800
                        border border-gray-700/50
                        hover:border-purple-500/50
                        transition-all duration-300
                      "
                    >
                      <Github className="
                        w-4 h-4 
                        group-hover/link:scale-110 
                        transition-transform duration-300
                      "/>
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    
                    <a
                      href={project.demo}
                      className="
                        group/link
                        flex items-center gap-2
                        px-4 py-2.5
                        rounded-xl
                        bg-gradient-to-r from-purple-600 to-indigo-600
                        text-white
                        hover:from-purple-500 hover:to-indigo-500
                        shadow-lg shadow-purple-500/20
                        hover:shadow-xl hover:shadow-purple-500/30
                        transition-all duration-300
                      "
                    >
                      <ExternalLink className="
                        w-4 h-4 
                        group-hover/link:scale-110 
                        transition-transform duration-300
                      "/>
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                  
                  <button className="
                    group
                    p-2
                    rounded-lg
                    text-gray-400
                    hover:text-purple-400
                    hover:bg-gray-800/50
                    transition-all duration-300
                  ">
                    <Eye className="
                      w-5 h-5 
                      group-hover:scale-110 
                      transition-transform duration-300
                    "/>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-cyan-500/0
                opacity-0
                group-hover:opacity-10
                transition-opacity duration-500
                pointer-events-none
              "/>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="
          mt-16
          text-center
        ">
          <div className="
            inline-flex 
            items-center 
            gap-4
            px-8 py-4
            rounded-2xl
            bg-gradient-to-br from-gray-900/80 to-gray-900/60
            backdrop-blur-xl
            border border-gray-800/50
            shadow-xl shadow-black/30
          ">
            <Database className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">
              All projects feature full CRUD operations with database integration
            </span>
          </div>
          
          <p className="
            text-gray-400 
            mt-8
            max-w-2xl 
            mx-auto
          ">
            Each project demonstrates practical implementation of Java, Spring Boot, React, 
            and database technologies to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;