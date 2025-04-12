'use client';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { FaPython, FaJs, FaReact, FaNodeJs, FaJava, FaHtml5 } from 'react-icons/fa';
import { SiNextdotjs, SiTensorflow, SiPandas, SiMongodb, SiPostgresql, SiMysql, SiC, SiConvex } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { TbBrandCpp } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: <FaPython className="text-3xl text-blue-500" /> },
      { name: 'JavaScript', level: 85, icon: <FaJs className="text-3xl text-yellow-500" /> },
      { name: 'Java', level: 80, icon: <FaJava className="text-3xl text-red-500" /> },
      { name: 'C', level: 75, icon: <SiC className="text-3xl text-purple-500" /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', level: 80, icon: <FaReact className="text-3xl text-blue-400" /> },
      { name: 'Next.js', level: 90, icon: <SiNextdotjs className="text-3xl text-black dark:text-white" /> },
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-3xl text-green-500" /> },
      { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-3xl text-orange-500" /> },
      { name: 'CSS3', level: 85, icon: <DiCss3 className="text-3xl text-blue-600" /> },
    ],
  },
  {
    title: 'ML & AI',
    skills: [
      { name: 'Machine Learning', level: 70, icon: <SiTensorflow className="text-3xl text-orange-500" /> },
      { name: 'AI', level: 70, icon: <GiArtificialIntelligence className="text-3xl text-blue-400" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', level: 80, icon: <span className="text-3xl font-bold text-orange-600">SQL</span>},
      { name: 'MySQL', level: 80, icon: <SiMysql className="text-3xl text-blue-500" /> },
      { name: 'Convex', level: 80, icon: <span className="text-3xl font-bold text-green-600">CVX</span> },
      { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-3xl text-green-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Skills & Expertise" 
            className="heading text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2" 
          />
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
                <span className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white mr-3">
                  {catIndex + 1}
                </span>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700"
                aria-label={skill.name}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  {skill.icon}
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium text-center">{skill.name}</span>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mt-3">
                  <div 
                    className="h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}