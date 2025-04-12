"use client";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      href: "https://github.com/AshwinKarnati",
      name: "GitHub",
    },
    {
      icon: <FaLinkedinIn className="text-lg" />,
      href: "https://linkedin.com/in/ashwin-karnati",
      name: "LinkedIn",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent"
          >
            Karnati Ashwin
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map((link, index) => (
              <li key={index}>
                <motion.a
                  href={link.href}
                  whileHover={{
                    y: -2,
                    color: "#0ea5e9",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors font-medium text-sm uppercase tracking-wider relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-700">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}

          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-sky-500 text-2xl p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col gap-1 py-2 px-4">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors font-medium block py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-center gap-6 py-4 border-t border-slate-100 dark:border-slate-700">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.05 + index * 0.1 }}
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-3 bg-slate-100 dark:bg-slate-700 rounded-full"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
