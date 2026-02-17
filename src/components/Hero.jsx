import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen 
        relative
        flex items-center 
        justify-center 
        pt-24 
        pb-20
        px-4 sm:px-6
        overflow-hidden
        bg-gradient-to-br from-gray-900 via-black to-gray-900
      "
    >
      {/* Animated Nebula Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>

        {/* Purple Nebula */}
        <div className="
          absolute 
          top-1/4 -left-1/4
          w-[800px] h-[800px]
          bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-transparent
          rounded-full
          blur-3xl
          animate-pulse
        " />

        {/* Blue Nebula */}
        <div className="
          absolute 
          bottom-1/4 -right-1/4
          w-[800px] h-[800px]
          bg-gradient-to-br from-blue-900/20 via-indigo-800/10 to-transparent
          rounded-full
          blur-3xl
          animate-pulse
          animation-delay-2000
        " />

        {/* Grid Overlay */}
        <div className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(30,27,75,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,27,75,0.1)_1px,transparent_1px)]
          bg-[size:50px_50px]
        " />
      </div>

      <div className="
        max-w-7xl 
        w-full 
        grid lg:grid-cols-2 
        gap-16 lg:gap-24
        items-center
        relative z-10
      ">

        {/* LEFT – TEXT CONTENT */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Heading with Neon Gradient */}
          <div>
            <h1 className="
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-black 
              leading-[1.1]
              tracking-tight
            ">
              <span className="
                block
                text-white
                drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]
              ">
                Sharafath
              </span>
              <span className="
                block 
                bg-gradient-to-r 
                from-purple-400 via-pink-400 to-cyan-400
                bg-[length:200%_auto]
                bg-clip-text 
                text-transparent 
                animate-gradient
                drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]
              ">
                Risvi <span className="text-white">A</span>
              </span>
            </h1>
            
            {/* Animated Underline */}
            <div className="
              h-1 
              w-48 
              mt-6
              bg-gradient-to-r 
              from-purple-500 via-pink-500 to-transparent
              rounded-full
              shadow-lg shadow-purple-500/30
              animate-pulse
            " />
          </div>

          {/* Title */}
          <div>
            <h2 className="
              text-2xl sm:text-3xl md:text-4xl
              font-bold 
              text-gray-300
              mb-2
            ">
              Full Stack{' '}
              <span className="
                text-white
                px-3 py-1 rounded-lg
                border border-purple-500/30
                backdrop-blur-sm
                bg-gradient-to-r from-purple-600/30 to-indigo-600/30
              ">
                Java Developer
              </span>
            </h2>
          </div>

          {/* Description Card */}
          <div className="
            bg-gray-900/60 
            backdrop-blur-sm
            rounded-3xl 
            p-6 md:p-8
            border border-gray-800/50
            transform transition-all duration-500
            hover:scale-[1.02] 
            hover:border-purple-500/30
            hover:shadow-2xl hover:shadow-purple-900/20
          ">
            <p className="
              text-gray-400
              text-lg md:text-xl
              leading-relaxed
              font-medium
            ">
              MCA Graduate specializing in building{' '}
              <span className="
                font-bold 
                bg-gradient-to-r from-purple-400 to-pink-400 
                bg-clip-text text-transparent
                px-1
              ">
                scalable
              </span>
              ,{' '}
              <span className="
                font-bold 
                bg-gradient-to-r from-cyan-400 to-blue-400 
                bg-clip-text text-transparent
                px-1
              ">
                high-performance
              </span>{' '}
              applications using modern technologies like{' '}
              <span className="
                font-bold 
                bg-gradient-to-r from-orange-400 to-yellow-400 
                bg-clip-text text-transparent
                px-1
              ">
                Java
              </span>
              ,{' '}
              <span className="
                font-bold 
                bg-gradient-to-r from-green-400 to-emerald-400 
                bg-clip-text text-transparent
                px-1
              ">
                Spring Boot
              </span>
              , and{' '}
              <span className="
                font-bold 
                bg-gradient-to-r from-blue-400 to-cyan-400 
                bg-clip-text text-transparent
                px-1
              ">
                React
              </span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
            <div className="flex gap-4">
              {/* Primary Button with Neon Glow */}
              <a
                href="/SHARAFATH_RISVI_RESUME.pdf"
                className="
                  group
                  relative
                  px-8 py-4
                  rounded-2xl
                  bg-gradient-to-r from-purple-600 to-indigo-600
                  text-white
                  font-bold
                  text-lg
                  shadow-xl
                  shadow-purple-500/30
                  hover:shadow-2xl
                  hover:shadow-purple-500/50
                  transform
                  hover:scale-105
                  transition-all duration-300
                  overflow-hidden
                  flex items-center gap-3
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-indigo-600 to-pink-600
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                " />
                {/* Glow effect */}
                <div className="
                  absolute -inset-1
                  bg-gradient-to-r from-purple-500 to-pink-500
                  rounded-2xl
                  blur-md
                  opacity-0
                  group-hover:opacity-30
                  transition-opacity duration-500
                  -z-10
                " />
              </a>

              {/* Secondary Button with Border Glow */}
              <a
                href="#contact"
                className="
                  group
                  px-8 py-4
                  rounded-2xl
                  border-2
                  border-gray-700
                  text-gray-300
                  font-bold
                  text-lg
                  hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-900/50
                  hover:border-purple-500/50
                  hover:text-white
                  transform
                  hover:scale-105
                  transition-all duration-300
                  flex items-center gap-3
                  relative
                  overflow-hidden
                "
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links with Glow */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/sharafath-risvi", color: "hover:text-white hover:shadow-purple-500/20" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sharafathrisvi02/", color: "hover:text-blue-400 hover:shadow-blue-500/20" },
                { icon: Mail, href: "mailto:hello@example.com", color: "hover:text-red-400 hover:shadow-red-500/20" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    p-3
                    rounded-xl
                    bg-gray-900/60
                    backdrop-blur-sm
                    border border-gray-800
                    text-gray-500
                    hover:text-white
                    hover:scale-110
                    hover:shadow-lg
                    hover:border-purple-500/50
                    transform
                    transition-all duration-300
                    relative
                  "
                >
                  <social.icon className={`
                    w-5 h-5
                    transition-colors duration-300
                    ${social.color}
                  `} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – PROFILE IMAGE SECTION */}
        <div className="
          relative
          flex 
          items-center 
          justify-center
          lg:justify-center
          w-full
        ">
          <div className="
            relative
            w-full
            max-w-md
            flex
            justify-center
          ">
            {/* Multi-layer Glow Effect */}
            <div className="
              absolute 
              -inset-10
              w-full
              h-full
              flex
              justify-center
              items-center
            ">
              {/* Outer Purple Glow */}
              <div className="
                absolute
                w-[90%]
                h-[90%]
                max-w-[500px]
                max-h-[500px]
                rounded-full
                bg-gradient-to-r from-purple-600/30 to-pink-600/30
                blur-3xl
                animate-pulse
              " />
              {/* Middle Blue Glow */}
              <div className="
                absolute
                w-[80%]
                h-[80%]
                max-w-[450px]
                max-h-[450px]
                rounded-full
                bg-gradient-to-r from-blue-600/20 to-cyan-600/20
                blur-2xl
                animate-pulse
                animation-delay-1000
              " />
              {/* Inner Pink Glow */}
              <div className="
                absolute
                w-[70%]
                h-[70%]
                max-w-[400px]
                max-h-[400px]
                rounded-full
                bg-gradient-to-r from-pink-600/10 to-rose-600/10
                blur-xl
                animate-pulse
                animation-delay-2000
              " />
            </div>

            {/* Profile Image Container */}
            <div className="
              relative
              rounded-full
              p-2
              bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
              animate-glow
              w-fit
              mx-auto
            ">
              {/* Glass Border */}
              <div className="
                relative
                rounded-full
                p-1
                bg-gray-900/20
                backdrop-blur-sm
              ">
                <img
                  src={profile}
                  alt="Sharafath Risvi A - Full Stack Java Developer"
                  className="
                    w-72 h-72 
                    sm:w-80 sm:h-80 
                    md:w-96 md:h-96
                    rounded-full
                    object-cover
                    border-8 border-gray-900/20
                    shadow-2xl shadow-black/50
                    relative z-10
                    transition-transform duration-300
                    hover:scale-105
                    grayscale-20 hover:grayscale-0
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REMOVED: Scroll Indicator / Explore Icon */}
    </section>
  );
};

export default Hero;