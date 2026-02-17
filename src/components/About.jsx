import React from 'react';
import { Code2, Database, Cpu, Server, Globe, Zap, Target, Rocket, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Server />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with Spring Boot & Java',
      color: 'border-purple-500/30 bg-purple-900/10'
    },
    {
      icon: <Globe />,
      title: 'Full Stack Apps',
      description: 'End-to-end web applications with modern UI/UX',
      color: 'border-blue-500/30 bg-blue-900/10'
    },
    {
      icon: <Database />,
      title: 'Database Design',
      description: 'Optimized data modeling and query performance',
      color: 'border-green-500/30 bg-green-900/10'
    },
    {
      icon: <Cpu />,
      title: 'System Architecture',
      description: 'Scalable and maintainable system designs',
      color: 'border-cyan-500/30 bg-cyan-900/10'
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        py-32
        px-4 sm:px-6
        overflow-hidden
      "
    >
      {/* Background Effects - Previous Style */}
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
              Professional Profile
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
            <span className="text-black">About </span>
            <span className="
              bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400
              bg-clip-text text-transparent
              animate-gradient
            ">
              Me
            </span>
          </h2>

          <p className="
            text-xl 
            text-gray-400 
            max-w-3xl 
            mx-auto
          ">
            Passionate Full Stack Developer crafting digital experiences with precision and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main About Card */}
            <div className="
              bg-gradient-to-br from-gray-900/80 to-gray-900/60
              backdrop-blur-xl
              rounded-3xl 
              p-8 md:p-10
              border border-gray-800/50
              shadow-2xl shadow-black/30
              hover:border-purple-500/30
              transition-all duration-500
            ">
              <div className="flex items-center gap-4 mb-8">
                <div className="
                  w-14 h-14 
                  rounded-2xl 
                  bg-gradient-to-br from-purple-600 to-indigo-600
                  flex items-center justify-center
                  shadow-lg shadow-purple-500/20
                ">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="
                    text-2xl font-bold 
                    text-white
                    mb-1
                  ">
                    My Professional Journey
                  </h3>
                  <p className="text-gray-400 text-sm">
                    MCA Graduate & Java Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="
                  text-gray-300 
                  leading-relaxed 
                  text-lg
                ">
                  As an <span className="
                    font-bold 
                    bg-gradient-to-r from-purple-400 to-pink-400 
                    bg-clip-text text-transparent
                  ">MCA graduate</span> with specialized training in Java Full Stack development, 
                  I possess strong expertise in building robust web applications using{' '}
                  <span className="
                    font-bold 
                    bg-gradient-to-r from-orange-400 to-yellow-400 
                    bg-clip-text text-transparent
                  ">Java</span>
                  ,{' '}
                  <span className="
                    font-bold 
                    bg-gradient-to-r from-green-400 to-emerald-400 
                    bg-clip-text text-transparent
                  ">Spring Boot</span>
                  , and{' '}
                  <span className="
                    font-bold 
                    bg-gradient-to-r from-cyan-400 to-blue-400 
                    bg-clip-text text-transparent
                  ">React</span>.
                </p>

                <p className="
                  text-gray-300 
                  leading-relaxed 
                  text-lg
                ">
                  I am dedicated to creating{' '}
                  <span className="
                    font-bold 
                    bg-gradient-to-r from-purple-400 to-pink-400 
                    bg-clip-text text-transparent
                  ">clean, scalable, and high-performance</span>{' '}
                  applications that combine modern user interfaces with solid backend architecture.
                </p>

                <div className="
                  bg-gradient-to-r from-gray-800/50 to-gray-900/50
                  rounded-xl 
                  p-6
                  border border-gray-800
                  mt-8
                ">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <h4 className="
                      text-lg font-bold 
                      text-white
                    ">
                      Career Objective
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    Seeking an{' '}
                    <span className="
                      font-bold 
                      bg-gradient-to-r from-cyan-400 to-blue-400 
                      bg-clip-text text-transparent
                    ">entry-level Software Developer position</span>{' '}
                    where I can apply my technical skills, contribute to meaningful projects, 
                    and grow as a professional in a dynamic, technology-focused environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Approach */}
            <div className="
              bg-gradient-to-br from-gray-900/80 to-gray-900/60
              backdrop-blur-xl
              rounded-3xl 
              p-8
              border border-gray-800/50
              shadow-2xl shadow-black/30
            ">
              <div className="flex items-center gap-4 mb-6">
                <div className="
                  w-12 h-12 
                  rounded-xl 
                  bg-gradient-to-br from-cyan-600 to-blue-600
                  flex items-center justify-center
                  shadow-lg shadow-cyan-500/20
                ">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="
                    text-2xl font-bold 
                    text-white
                  ">
                    Development Approach
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30">
                  <div className="
                    w-8 h-8 
                    rounded-lg 
                    bg-gradient-to-br from-purple-600/20 to-pink-600/20
                    flex items-center justify-center
                  ">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                  </div>
                  <span className="text-gray-300">
                    Strong foundation in computer science concepts and algorithms
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30">
                  <div className="
                    w-8 h-8 
                    rounded-lg 
                    bg-gradient-to-br from-blue-600/20 to-cyan-600/20
                    flex items-center justify-center
                  ">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                  </div>
                  <span className="text-gray-300">
                    Hands-on experience with modern development tools and frameworks
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30">
                  <div className="
                    w-8 h-8 
                    rounded-lg 
                    bg-gradient-to-br from-green-600/20 to-emerald-600/20
                    flex items-center justify-center
                  ">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
                  </div>
                  <span className="text-gray-300">
                    Quick learner with strong problem-solving capabilities
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30">
                  <div className="
                    w-8 h-8 
                    rounded-lg 
                    bg-gradient-to-br from-yellow-600/20 to-orange-600/20
                    flex items-center justify-center
                  ">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />
                  </div>
                  <span className="text-gray-300">
                    Committed to writing clean, maintainable code following best practices
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`
                    group
                    backdrop-blur-xl
                    rounded-2xl
                    p-6
                    border ${feature.color}
                    hover:shadow-2xl hover:shadow-purple-500/10
                    transition-all duration-500
                    transform hover:-translate-y-2
                    hover:border-purple-500/50
                    ${index === 0 ? 'bg-gradient-to-br from-purple-900/20 to-transparent' :
                      index === 1 ? 'bg-gradient-to-br from-blue-900/20 to-transparent' :
                      index === 2 ? 'bg-gradient-to-br from-green-900/20 to-transparent' :
                      'bg-gradient-to-br from-cyan-900/20 to-transparent'}
                  `}
                >
                  <div className="
                    w-14 h-14 
                    rounded-xl 
                    bg-gradient-to-br from-gray-800 to-gray-900
                    border border-gray-700
                    flex items-center justify-center
                    mb-5
                    group-hover:scale-110
                    transition-transform duration-300
                  ">
                    <div className="
                      text-gray-400 
                      group-hover:text-white
                      transition-colors duration-300
                    ">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h4 className="
                    text-xl font-bold 
                    text-white 
                    mb-3
                  ">
                    {feature.title}
                  </h4>
                  
                  <p className="
                    text-gray-400 
                    text-sm leading-relaxed
                  ">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Career Focus */}
            <div className="
              bg-gradient-to-br from-gray-900/80 to-gray-900/60
              backdrop-blur-xl
              rounded-3xl 
              p-8
              border border-gray-800/50
              shadow-2xl shadow-black/30
            ">
              <div className="flex items-center gap-4 mb-8">
                <div className="
                  w-14 h-14 
                  rounded-2xl 
                  bg-gradient-to-br from-pink-600 to-rose-600
                  flex items-center justify-center
                  shadow-lg shadow-pink-500/20
                ">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="
                    text-2xl font-bold 
                    text-white
                  ">
                    Career Focus
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Areas of professional interest and growth
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="
                    text-lg font-semibold 
                    text-white 
                    mb-3
                  ">
                    Backend Development
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building scalable server-side applications with Java and Spring Boot, 
                    focusing on performance optimization and clean architecture patterns.
                  </p>
                </div>

                <div>
                  <h4 className="
                    text-lg font-semibold 
                    text-white 
                    mb-3
                  ">
                    Full Stack Integration
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Creating seamless end-to-end solutions that connect robust backends 
                    with intuitive frontend interfaces using React and modern JavaScript.
                  </p>
                </div>

                <div>
                  <h4 className="
                    text-lg font-semibold 
                    text-white 
                    mb-3
                  ">
                    Database Optimization
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Designing efficient database schemas and writing optimized SQL queries 
                    for MySQL and Oracle SQL to ensure data integrity and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="
          mt-16
          text-center
        ">
          <p className="
            text-gray-400 
            text-lg 
            mb-8
            max-w-2xl 
            mx-auto
          ">
            Ready to contribute to innovative projects and grow with a forward-thinking team
          </p>
          <a
            href="#contact"
            className="
              group
              inline-flex 
              items-center 
              gap-3
              px-8 py-4
              rounded-2xl
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:from-purple-500 hover:to-indigo-500
              text-white
              font-bold
              text-lg
              shadow-xl shadow-purple-500/30
              hover:shadow-2xl hover:shadow-purple-500/50
              transform
              hover:scale-105
              transition-all duration-300
              relative
              overflow-hidden
            "
          >
            <Code2 className="w-5 h-5" />
            <span className="relative z-10">Let's Build Something Amazing</span>
            <div className="
              absolute inset-0
              bg-gradient-to-r from-white/0 via-white/10 to-white/0
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform duration-1000
            "/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;