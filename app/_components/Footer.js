'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const socialLinks = [
  {
    href: 'https://github.com/AshwinKarnati',
    label: 'GitHub',
    icon: <FiGithub className="text-xl hover:text-sky-500 transition-colors" />,
  },
  {
    href: 'https://linkedin.com/in/ashwin-karnati',
    label: 'LinkedIn',
    icon: <FiLinkedin className="text-xl hover:text-sky-500 transition-colors" />,
  },
  {
    href: 'mailto:ashwinkarnati2k5@gmail.com',
    label: 'Email',
    icon: <FiMail className="text-xl hover:text-sky-500 transition-colors" />,
  },
  {
    href: 'tel:+916309779792',
    label: 'Phone',
    icon: <FiPhone className="text-xl hover:text-sky-500 transition-colors" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-4 md:mb-0"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Karnati Ashwin. All Rights Reserved.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
