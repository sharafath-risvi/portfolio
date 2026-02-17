import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, User, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'sharafathrisvi02@gmail.com',
      link: 'mailto:sharafathrisvi02@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 73584 92242',
      link: 'tel:+917358492242',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Chennai, India',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sharafathrisvi02',
      link: 'https://linkedin.com/in/sharafathrisvi02',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section
      id="contact"
      className="
        relative
        py-32
        px-4 sm:px-6
        overflow-hidden
      "
    >
      {/* Background Effects - Same as About Section */}
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
              Get In Touch
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
            <span className="text-black">Contact{' '}</span>
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
            Open to entry-level Software Developer opportunities, internships, and collaborative projects
          </p>
        </div>

        {/* Contact Card */}
        <div className="
          bg-gradient-to-br from-gray-900/80 to-gray-900/60
          backdrop-blur-xl
          rounded-3xl 
          overflow-hidden
          border border-gray-800/50
          shadow-2xl shadow-black/30
          grid 
          md:grid-cols-2
          gap-0
        ">
          
          {/* LEFT – CONTACT INFO */}
          <div className="
            p-8 md:p-10
            border-r border-gray-800/50
          ">
            <div className="flex items-center gap-3 mb-8">
              <div className="
                w-12 h-12 
                rounded-2xl 
                bg-gradient-to-br from-purple-600 to-indigo-600
                flex items-center justify-center
                shadow-lg shadow-purple-500/20
              ">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="
                  text-2xl font-bold 
                  text-white 
                  mb-1
                ">
                  Let's Connect
                </h3>
                <p className="text-gray-400 text-sm">
                  Available for opportunities & collaborations
                </p>
              </div>
            </div>

            <p className="
              text-gray-300 
              leading-relaxed 
              mb-10
            ">
              I'm actively seeking entry-level Software Developer positions, internships, 
              and freelance projects. Let's discuss how we can work together to build 
              innovative solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex items-center gap-4
                    p-4
                    rounded-xl
                    bg-gray-800/30
                    border border-gray-700/50
                    hover:border-purple-500/50
                    hover:bg-gray-800/50
                    hover:shadow-lg
                    transition-all duration-300
                  "
                >
                  <div className={`
                    w-12 h-12 
                    rounded-xl 
                    bg-gradient-to-br ${info.color}
                    flex items-center justify-center
                    flex-shrink-0
                    shadow-md
                    group-hover:scale-110
                    transition-transform duration-300
                  `}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="
                      text-sm 
                      text-gray-400 
                      mb-1
                    ">
                      {info.title}
                    </p>
                    <p className="
                      text-gray-200 
                      font-medium
                      group-hover:text-white
                      transition-colors duration-300
                    ">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-gray-800/50">
              <p className="
                text-sm font-medium 
                text-gray-400 
                mb-4
              ">
                Connect on social platforms
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    p-3
                    rounded-xl
                    bg-gray-800/50
                    border border-gray-700/50
                    text-gray-400
                    hover:text-white
                    hover:bg-gray-800
                    hover:border-purple-500/50
                    hover:shadow-lg
                    transition-all duration-300
                  "
                >
                  <Github className="
                    w-5 h-5 
                    group-hover:scale-110 
                    transition-transform duration-300
                  " />
                </a>
                <a
                  href="https://linkedin.com/in/sharafathrisvi02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    p-3
                    rounded-xl
                    bg-gray-800/50
                    border border-gray-700/50
                    text-gray-400
                    hover:text-white
                    hover:bg-gray-800
                    hover:border-blue-500/50
                    hover:shadow-lg
                    transition-all duration-300
                  "
                >
                  <Linkedin className="
                    w-5 h-5 
                    group-hover:scale-110 
                    transition-transform duration-300
                  " />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div className="
            p-8 md:p-10
            bg-gradient-to-br from-gray-900/40 to-gray-900/20
          ">
            <div className="flex items-center gap-3 mb-8">
              <div className="
                w-12 h-12 
                rounded-2xl 
                bg-gradient-to-br from-cyan-600 to-blue-600
                flex items-center justify-center
                shadow-lg shadow-cyan-500/20
              ">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="
                  text-2xl font-bold 
                  text-white 
                  mb-1
                ">
                  Send a Message
                </h3>
                <p className="text-gray-400 text-sm">
                  I'll respond within 24 hours
                </p>
              </div>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="
                mb-6
                p-4
                rounded-xl
                bg-gradient-to-r from-green-900/30 to-emerald-900/20
                border border-green-500/30
                flex items-center gap-3
                animate-fade-in
              ">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">Message Sent Successfully!</p>
                  <p className="text-gray-300 text-sm">I'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="
                  text-sm font-medium 
                  text-gray-400 
                  flex items-center gap-2
                ">
                  <User className="w-4 h-4" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                    w-full 
                    px-4 py-3
                    rounded-xl
                    bg-gray-800/50
                    border border-gray-700/50
                    text-gray-200 
                    placeholder-gray-500
                    focus:outline-none 
                    focus:border-purple-500/50
                    focus:bg-gray-800
                    focus:shadow-lg
                    transition-all duration-300
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="
                  text-sm font-medium 
                  text-gray-400 
                  flex items-center gap-2
                ">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full 
                    px-4 py-3
                    rounded-xl
                    bg-gray-800/50
                    border border-gray-700/50
                    text-gray-200 
                    placeholder-gray-500
                    focus:outline-none 
                    focus:border-purple-500/50
                    focus:bg-gray-800
                    focus:shadow-lg
                    transition-all duration-300
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="
                  text-sm font-medium 
                  text-gray-400 
                  flex items-center gap-2
                ">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="
                    w-full 
                    px-4 py-3
                    rounded-xl
                    bg-gray-800/50
                    border border-gray-700/50
                    text-gray-200 
                    placeholder-gray-500
                    focus:outline-none 
                    focus:border-purple-500/50
                    focus:bg-gray-800
                    focus:shadow-lg
                    resize-none
                    transition-all duration-300
                  "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group
                  w-full 
                  py-4 
                  rounded-xl
                  bg-gradient-to-r from-purple-600 to-indigo-600
                  hover:from-purple-500 hover:to-indigo-500
                  text-white 
                  font-bold
                  shadow-xl shadow-purple-500/30
                  hover:shadow-2xl hover:shadow-purple-500/50
                  transition-all duration-300
                  transform hover:scale-[1.02]
                  disabled:opacity-70 disabled:cursor-not-allowed
                  relative
                  overflow-hidden
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="
                        w-5 h-5 
                        border-2 border-white/30 
                        border-t-white 
                        rounded-full 
                        animate-spin
                      " />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-purple-500 to-pink-500
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                " />
              </button>
            </form>

            <p className="
              text-gray-500 
              text-sm 
              text-center 
              mt-6
            ">
              Your information is secure and will only be used to respond to your inquiry.
            </p>
          </div>
        </div>

        {/* Additional Contact Options */}
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
            <div className="
              w-3 h-3 
              rounded-full 
              bg-gradient-to-r from-green-400 to-emerald-400
              animate-pulse
            " />
            <span className="text-white font-semibold">
              Available for immediate opportunities
            </span>
          </div>
          
          <p className="
            text-gray-400 
            mt-8
            max-w-2xl 
            mx-auto
          ">
            Whether it's a full-time position, internship, or freelance project, 
            I'm excited to contribute to meaningful software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;