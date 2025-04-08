'use client';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'AIPDFNoteTaker',
    description: 'Developed a web app to upload PDFs, extract text, and generate AI-powered notes and summaries with search functionality.',
    technologies: ['Next.js', 'Google Generative AI', 'Convex', 'Tailwind CSS'],
    category: 'Web Development',
    github: 'https://github.com/AshwinKarnati/AIPDFNoteTaker',
    demo: 'https://ai-pdf-note-taker.vercel.app',
  },
  {
    title: 'AI Video Creator & Editor',
    description: 'Built an AI-powered video creation and editing tool with automated enhancements and custom transitions.',
    technologies: ['Next.js', 'Remotion', 'Clerk', 'Inngest', 'PostgreSQL'],
    category: 'Web Development',
    github: 'https://github.com/AshwinKarnati/AIVideoCreator',
    demo: 'https://ai-video-creator.vercel.app',
  },
  {
    title: 'Diabetes Predictor',
    description: 'Machine learning model that predicts diabetes risk with 89% accuracy using patient health metrics.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'Machine Learning',
    github: 'https://github.com/AshwinKarnati/DiabetesPredictor',
  },
  {
    title: 'Fake News Predictor',
    description: 'NLP model that detects fake news articles with 92% accuracy using TF-IDF and ensemble methods.',
    technologies: ['Python', 'NLP', 'TensorFlow', 'NLTK', 'Scikit-learn'],
    category: 'Machine Learning',
    github: 'https://github.com/AshwinKarnati/FakeNewsDetector',
  },
  {
    title: 'To-Do List App',
    description: 'Full-featured task management application with real-time updates, drag-and-drop, and cloud sync.',
    technologies: ['React.js', 'Firebase', 'Material UI', 'React DnD'],
    category: 'Web Development',
    github: 'https://github.com/AshwinKarnati/TodoListApp',
    demo: 'https://todo-list-app-ashwin.vercel.app',
  },
  {
    title: 'Password Manager',
    description: 'Secure password storage with AES-256 encryption, biometric auth, and cross-device sync.',
    technologies: ['React', 'MongoDB', 'Node.js', 'Express', 'CryptoJS'],
    category: 'Web Development',
    github: 'https://github.com/AshwinKarnati/PasswordManager',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <AnimatedText 
            text="My Projects" 
            className="heading text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2" 
          />
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve real problems with modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-all"
              aria-label={`Project: ${project.title}`}
            >
              <div className="relative h-48 bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/50 dark:to-blue-900/50 flex items-center justify-center">
                <div className="absolute inset-0 bg-sky-500/10 dark:bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-sky-500/20 dark:text-sky-400/20 group-hover:scale-110 transition-transform">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-slate-100 dark:border-slate-700">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="text-lg" />
                      Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/AshwinKarnati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-sky-500 text-sky-500 dark:text-sky-400 rounded-lg font-medium hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}