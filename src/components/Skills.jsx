import React from 'react';
import { 
  Code2, Database, Server, GitBranch, Layers,
  Globe, Terminal, FileCode, Braces, Layout,
  Palette, Send, Cpu, Zap, Rocket, Box
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server />,
      gradient: 'from-orange-500 to-amber-500',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-gradient-to-br from-orange-900/10 to-transparent',
      skills: [
        { name: 'Java', level: 95, icon: <FileCode />, color: 'from-orange-400 to-yellow-400' },
        { name: 'Spring Boot', level: 90, icon: <Leaf />, color: 'from-green-400 to-emerald-400' },
        { name: 'Hibernate', level: 85, icon: <Database />, color: 'from-blue-400 to-cyan-400' },
        { name: 'REST API', level: 88, icon: <Globe />, color: 'from-purple-400 to-pink-400' },
        { name: 'JDBC', level: 82, icon: <Database />, color: 'from-cyan-400 to-blue-400' },
      ]
    },
    {
      title: 'Frontend',
      icon: <Layout />,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-gradient-to-br from-blue-900/10 to-transparent',
      skills: [
        { name: 'React', level: 90, icon: <Braces />, color: 'from-cyan-400 to-blue-400' },
        { name: 'JavaScript', level: 85, icon: <Terminal />, color: 'from-yellow-400 to-amber-400' },
        { name: 'HTML5', level: 95, icon: <Code2 />, color: 'from-orange-400 to-red-400' },
        { name: 'CSS3', level: 88, icon: <Palette />, color: 'from-blue-400 to-indigo-400' },
        { name: 'Tailwind CSS', level: 92, icon: <Wind />, color: 'from-cyan-400 to-teal-400' },
        { name: 'Bootstrap', level: 85, icon: <Box />, color: 'from-purple-400 to-indigo-400' }, // Added Bootstrap
      ]
    },
    {
      title: 'Database',
      icon: <Database />,
      gradient: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      bgColor: 'bg-gradient-to-br from-green-900/10 to-transparent',
      skills: [
        { name: 'MySQL', level: 90, icon: <Database />, color: 'from-blue-400 to-indigo-400' },
        { name: 'Oracle SQL', level: 85, icon: <Database />, color: 'from-red-400 to-orange-400' },
      ]
    },
    {
      title: 'Tools',
      icon: <Terminal />,
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-gradient-to-br from-purple-900/10 to-transparent',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: <GitBranch />, color: 'from-gray-400 to-gray-600' },
        { name: 'Postman', level: 85, icon: <Send />, color: 'from-orange-400 to-red-400' },
        { name: 'VS Code', level: 95, icon: <Code2 />, color: 'from-blue-400 to-purple-400' },
        { name: 'Eclipse', level: 90, icon: <Cpu />, color: 'from-purple-400 to-pink-400' },
      ]
    }
  ];

  const expertise = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end application development with Java & React',
      icon: <Layers />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Integration',
      description: 'RESTful API development & third-party integrations',
      icon: <Globe />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Database Design',
      description: 'SQL database modeling & optimization',
      icon: <Database />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Responsive UI',
      description: 'Modern mobile-first interfaces',
      icon: <Layout />,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section
      id="skills"
      className="
        relative
        py-32
        px-4 sm:px-6
        overflow-hidden
        bg-gradient-to-br from-gray-900 via-black to-gray-900
      "
    >
      {/* Background Effects - Dark Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="
                absolute 
                w-[1px] h-[1px] 
                bg-white 
                rounded-full 
                animate-pulse
              "
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>

        {/* Purple Nebula */}
        <div className="
          absolute 
          top-1/3 -left-1/4
          w-[800px] h-[800px]
          bg-gradient-to-br from-purple-900/10 via-purple-800/5 to-transparent
          rounded-full
          blur-3xl
          animate-pulse
        " />

        {/* Blue Nebula */}
        <div className="
          absolute 
          bottom-1/3 -right-1/4
          w-[800px] h-[800px]
          bg-gradient-to-br from-blue-900/10 via-indigo-800/5 to-transparent
          rounded-full
          blur-3xl
          animate-pulse
          animation-delay-2000
        " />

        {/* Grid Overlay */}
        <div className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(30,27,75,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,27,75,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
        " />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="
              w-2 h-2 
              rounded-full 
              bg-gradient-to-r from-blue-500 to-cyan-500
              animate-pulse
            " />
            <span className="
              text-sm font-semibold 
              text-gray-400 
              tracking-widest uppercase
            ">
              Technical Mastery
            </span>
            <div className="
              w-2 h-2 
              rounded-full 
              bg-gradient-to-r from-cyan-500 to-blue-500
              animate-pulse animation-delay-300
            " />
          </div>

          <h2 className="
            text-5xl md:text-6xl 
            font-bold 
            mb-6
          ">
            <span className="
              text-white
              drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]
            ">
              Technical{' '}
            </span>
            <span className="
              bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
              bg-clip-text text-transparent
              animate-gradient
              drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]
            ">
              Skills
            </span>
          </h2>

          <p className="
            text-xl 
            text-gray-400 
            max-w-3xl 
            mx-auto
          ">
            A comprehensive toolkit for building modern, scalable applications with precision
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`
                group
                bg-gray-900/60
                backdrop-blur-xl
                rounded-3xl
                p-8
                border border-gray-800/50
                ${category.borderColor}
                hover:shadow-2xl hover:shadow-purple-500/10
                transition-all duration-500
                transform hover:-translate-y-2
              `}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`
                  w-16 h-16 
                  rounded-2xl 
                  bg-gradient-to-br ${category.gradient}
                  flex items-center justify-center
                  shadow-lg shadow-${category.gradient.split(' ')[1]}/20
                  group-hover:scale-110
                  transition-transform duration-300
                `}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="
                    text-2xl font-bold 
                    text-white
                    mb-1
                  ">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Mastery level in core technologies
                  </p>
                </div>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`
                          w-10 h-10 
                          rounded-lg 
                          bg-gradient-to-br ${skill.color}
                          flex items-center justify-center
                          shadow-md
                        `}>
                          <div className="text-white">
                            {skill.icon}
                          </div>
                        </div>
                        <span className="
                          text-lg font-medium 
                          text-gray-300
                          group-hover/skill:text-white
                          transition-colors duration-300
                        ">
                          {skill.name}
                        </span>
                      </div>
                      <span className="
                        text-lg font-bold 
                        bg-gradient-to-r ${skill.color}
                        bg-clip-text text-transparent
                      ">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="
                      h-2 
                      bg-gray-800 
                      rounded-full 
                      overflow-hidden
                    ">
                      <div
                        className={`
                          h-full 
                          rounded-full 
                          bg-gradient-to-r ${skill.color}
                          transition-all duration-1000 ease-out
                        `}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="
            text-3xl font-bold 
            text-white 
            text-center 
            mb-12
          ">
            Areas of <span className="
              bg-gradient-to-r from-purple-400 to-pink-400
              bg-clip-text text-transparent
            ">
              Specialization
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="
                  group
                  bg-gray-900/60
                  backdrop-blur-xl
                  rounded-2xl
                  p-6
                  border border-gray-800/50
                  hover:border-purple-500/50
                  hover:shadow-xl hover:shadow-purple-500/10
                  transition-all duration-500
                  transform hover:-translate-y-1
                "
              >
                <div className={`
                  w-14 h-14 
                  rounded-xl 
                  bg-gradient-to-br ${area.color}
                  flex items-center justify-center
                  mb-5
                  shadow-lg
                  group-hover:scale-110
                  transition-transform duration-300
                `}>
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                <h4 className="
                  text-xl font-bold 
                  text-white 
                  mb-3
                ">
                  {area.title}
                </h4>
                <p className="
                  text-gray-400 
                  text-sm leading-relaxed
                ">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* REMOVED: Proficiency Overview Section */}
        {/* 
        <div className="
          bg-gray-900/60
          backdrop-blur-xl
          rounded-3xl
          p-8 md:p-10
          border border-gray-800/50
          shadow-2xl shadow-black/30
        ">
          ... Proficiency Overview content removed ...
        </div>
        */}

        {/* Learning Path */}
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
            Continuously expanding skill set with emerging technologies
          </p>
          <div className="
            inline-flex 
            items-center 
            gap-4
            px-8 py-4
            rounded-2xl
            bg-gray-900/60
            backdrop-blur-xl
            border border-gray-800/50
            shadow-xl
          ">
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold">
              Currently Learning: Next.js & AWS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add missing icons
const Leaf = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Wind = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
  </svg>
);

export default Skills;