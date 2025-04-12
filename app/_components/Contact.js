'use client'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FiMail className="text-sky-500 text-xl" />,
    title: 'Email',
    value: 'ashwinkarnati2k5@gmail.com',
    link: 'mailto:ashwinkarnati2k5@gmail.com',
  },
  {
    icon: <FiPhone className="text-sky-500 text-xl" />,
    title: 'Phone',
    value: '+91 6309779792',
    link: 'tel:+916309779792',
  },
  {
    icon: <FiMapPin className="text-sky-500 text-xl" />,
    title: 'Location',
    value: 'Hyderabad, Telangana',
  },
]

const socialLinks = [
  {
    icon: <FaGithub className="text-xl" />,
    link: 'https://github.com/AshwinKarnati',
    name: 'GitHub',
    className: "hover:bg-gray-800 hover:text-white"
  },
  {
    icon: <FaLinkedinIn className="text-xl" />,
    link: 'https://linkedin.com/in/ashwin-karnati',
    name: 'LinkedIn',
    className: "hover:bg-blue-600 hover:text-white"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Get In Touch" 
            className="heading text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2" 
          />
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-700 w-full max-w-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center justify-center">
              <span className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white mr-3">
                <FiMail />
              </span>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <div className="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-xl mr-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-500 dark:text-slate-400 text-sm">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-800 dark:text-slate-100 hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-lg font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-800 dark:text-slate-100 text-lg font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-slate-600 dark:text-slate-300 mb-4 text-center">Connect with me</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`bg-slate-100 dark:bg-slate-700 p-4 rounded-full hover:shadow-lg transition-all ${social.className}`}
                    aria-label={social.name}
                  >
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}