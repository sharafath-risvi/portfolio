import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Trophy, Star, ChevronRight, FileText } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'MCA – Master of Computer Applications',
      institution: 'Measi Institute of Information Technology, Chennai',
      year: '2025',
      percentage: '82%',
      icon: <GraduationCap />,
      gradient: 'from-purple-500 to-pink-500',
      highlights: [
        'Specialized in Software Engineering',
        'Advanced Database Management',
        'Web Development Focus',
        'Project Management'
      ]
    },
    {
      degree: 'B.Sc Computer Science',
      institution: 'The New College, Chennai',
      year: '2023',
      percentage: '85%',
      icon: <BookOpen />,
      gradient: 'from-blue-500 to-cyan-500',
      highlights: [
        'Core Computer Science Concepts',
        'Programming Fundamentals',
        'Data Structures & Algorithms',
        'Computer Networks'
      ]
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Dominic Matriculation Hr. Sec. School',
      year: '2019',
      percentage: '68%',
      icon: <Award />,
      gradient: 'from-green-500 to-emerald-500',
      highlights: [
        'Computer Science Stream',
        'Mathematics & Physics',
        'Programming Basics',
        'Academic Excellence'
      ]
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'Cambridge Matriculation Hr. Sec. School',
      year: '2017',
      percentage: '91%',
      icon: <Trophy />,
      gradient: 'from-orange-500 to-yellow-500',
      highlights: [
        'State Board Topper',
        'Mathematics Excellence',
        'Science & Technology',
        'Academic Distinction'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Development',
      provider: 'QSpiders',
      year: '2025',
      description: 'Comprehensive training in Java, Spring Boot, React, and database technologies',
      skills: ['Java', 'Spring Boot', 'React', 'MySQL'],
      icon: <FileText />
    },
    {
      title: 'SQL & Python Basics',
      provider: 'Besant Technologies',
      year: '2024',
      description: 'Database management with SQL and programming fundamentals with Python',
      skills: ['SQL', 'Python', 'Database Design', 'Data Analysis'],
      icon: <FileText />
    },
    {
      title: 'AI Tools Workshop',
      provider: 'Be10x',
      year: '2025',
      description: 'Hands-on workshop on AI tools for developers and productivity enhancement',
      skills: ['AI Tools', 'Productivity', 'Automation', 'Development'],
      icon: <FileText />
    }
  ];

  return (
    <section
      id="education"
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
              Academic Journey
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
              Education &{' '}
            </span>
            <span className="
              bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
              bg-clip-text text-transparent
              animate-gradient
              drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]
            ">
              Certifications
            </span>
          </h2>

          <p className="
            text-xl 
            text-gray-400 
            max-w-3xl 
            mx-auto
          ">
            A strong academic foundation complemented by specialized technical certifications
          </p>
        </div>

        {/* Education Grid - Dark Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="
                group
                bg-gray-900/60
                backdrop-blur-xl
                rounded-3xl
                p-8
                border border-gray-800/50
                hover:border-purple-500/50
                hover:shadow-2xl hover:shadow-purple-500/20
                transition-all duration-500
                transform hover:-translate-y-2
              "
            >
              {/* Degree Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`
                  w-14 h-14 
                  rounded-2xl 
                  bg-gradient-to-br ${edu.gradient}
                  flex items-center justify-center
                  flex-shrink-0
                  shadow-lg
                  group-hover:scale-110
                  transition-transform duration-300
                `}>
                  <div className="text-white">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="
                    text-xl font-bold 
                    text-white
                    mb-2
                  ">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-gray-300">{edu.institution}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details with Dark Background */}
              <div className="
                flex 
                items-center 
                justify-between 
                mb-6 
                pb-6 
                border-b 
                border-gray-800/50
              ">
                <div className="flex items-center gap-4">
                  <div className="
                    flex items-center gap-2 
                    px-3 py-1.5 
                    rounded-lg 
                    bg-gray-800/50
                    border border-gray-700/50
                  ">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 font-medium">
                      {edu.year}
                    </span>
                  </div>
                  
                  <div className="
                    flex 
                    items-center 
                    gap-2 
                    px-3 py-1.5 
                    rounded-lg 
                    bg-gradient-to-r from-gray-800 to-gray-900
                    border border-gray-700/50
                    shadow-lg
                  ">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="
                      text-white font-bold 
                      bg-gradient-to-r ${edu.gradient}
                      bg-clip-text text-transparent
                    ">
                      {edu.percentage}
                    </span>
                    <span className="text-gray-400 text-sm">
                      Percentage
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="
                  text-sm font-semibold 
                  text-gray-400 
                  uppercase 
                  tracking-wider 
                  mb-3
                ">
                  Key Highlights
                </h4>
                <div className="space-y-2">
                  {edu.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="
                        flex items-center gap-3
                        text-gray-300
                        group/highlight
                        hover:text-white
                        transition-colors duration-300
                      "
                    >
                      <ChevronRight className="
                        w-4 h-4 
                        text-purple-400 
                        opacity-0 
                        group-hover/highlight:opacity-100 
                        transform 
                        group-hover/highlight:translate-x-1
                        transition-all duration-300
                      " />
                      <span className="text-sm">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-cyan-500/0
                opacity-0
                group-hover:opacity-10
                transition-opacity duration-500
                pointer-events-none
                rounded-3xl
              "/>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="
                w-2 h-2 
                rounded-full 
                bg-gradient-to-r from-purple-500 to-pink-500
                animate-pulse
              " />
              <h3 className="
                text-3xl font-bold 
                text-white
              ">
                Professional{' '}
                <span className="
                  bg-gradient-to-r from-purple-400 to-pink-400
                  bg-clip-text text-transparent
                ">
                  Certifications
                </span>
              </h3>
              <div className="
                w-2 h-2 
                rounded-full 
                bg-gradient-to-r from-pink-500 to-purple-500
                animate-pulse animation-delay-300
              " />
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized training programs that complement my academic qualifications
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="
                  group
                  bg-gray-900/60
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  border border-gray-800/50
                  hover:border-blue-500/50
                  hover:shadow-2xl hover:shadow-blue-500/20
                  transition-all duration-500
                  transform hover:-translate-y-2
                "
              >
                {/* Certification Header */}
                <div className="mb-6">
                  <div className="
                    w-12 h-12 
                    rounded-xl 
                    bg-gradient-to-br from-blue-500/20 to-cyan-500/20
                    border border-blue-500/30
                    flex items-center justify-center
                    mb-4
                    group-hover:scale-110
                    transition-transform duration-300
                  ">
                    <div className="text-blue-400">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <h4 className="
                    text-xl font-bold 
                    text-white 
                    mb-2
                  ">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <span className="
                      text-sm 
                      text-gray-400 
                      font-medium
                    ">
                      {cert.provider}
                    </span>
                    <span className="
                      text-sm 
                      px-3 py-1 
                      rounded-full 
                      bg-gray-800/50 
                      text-gray-300
                      border border-gray-700/50
                    ">
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="
                  text-gray-300 
                  text-sm 
                  leading-relaxed 
                  mb-6
                ">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h5 className="
                    text-xs font-semibold 
                    text-gray-400 
                    uppercase 
                    tracking-wider 
                    mb-3
                  ">
                    Skills Gained
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="
                          text-xs 
                          px-3 py-1.5 
                          rounded-lg 
                          bg-gradient-to-r from-gray-800 to-gray-900
                          text-gray-300 
                          border border-gray-700/50
                          hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30
                          hover:border-blue-500/30
                          hover:text-white
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0
                  opacity-0
                  group-hover:opacity-10
                  transition-opacity duration-500
                  pointer-events-none
                  rounded-3xl
                "/>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
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
            bg-gray-900/60
            backdrop-blur-xl
            border border-gray-800/50
            shadow-xl shadow-black/50
          ">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold">
              Continuous learner committed to academic excellence and professional growth
            </span>
          </div>
          
          <p className="
            text-gray-400 
            mt-8
            max-w-2xl 
            mx-auto
          ">
            Combining strong academic performance with practical certifications to build a solid foundation for software development career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;