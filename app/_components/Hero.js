'use client';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/AshwinKarnati",
      name: "GitHub",
      className: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: <FaLinkedinIn className="text-xl" />,
      href: "https://linkedin.com/in/ashwin-karnati",
      name: "LinkedIn",
      className: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <FiMail className="text-xl" />,
      href: "mailto:ashwinkarnati2k5@gmail.com",
      name: "Email",
      className: "hover:bg-red-500 hover:text-white"
    },
    {
      icon: <FiPhone className="text-xl" />,
      href: "tel:+916309779792",
      name: "Phone",
      className: "hover:bg-green-500 hover:text-white"
    }
  ];

  return (
    <section id="home" className="relative section min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-200 dark:bg-sky-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-600">Karnati Ashwin</span>
              </h1>

              <AnimatedText
                text="Full Stack Developer & AI Enthusiast"
                className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6 md:mb-8"
              />

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Passionate about building innovative web solutions and exploring the realms of AI and Machine Learning. Currently pursuing my B.Tech in Computer Science in JNTUHUCESTH with a focus on cutting-edge technologies.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Contact Me
                  <FiMail className="text-lg" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-6 py-3 border-2 border-sky-500 text-sky-500 dark:text-sky-400 rounded-lg font-medium hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors flex items-center gap-2"
                >
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/KarnatiAshwin.pdf" // Replace with actual resume path
                  download
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-2"
                >
                  Resume
                  <FiDownload className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col items-center mt-12 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Gradient background effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full bg-white dark:bg-slate-700 rounded-full overflow-hidden border-4 border-sky-100 dark:border-sky-900/50 shadow-2xl">
                <img
                  src="/profile.png" // Replace with your profile image
                  alt="Karnati Ashwin"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-sky-500 text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-sm font-bold">5+ Projects</div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-white dark:bg-slate-700 shadow-md hover:shadow-lg transition-all ${social.className}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}