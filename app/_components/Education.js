'use client'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'JNTUH University College of Engineering,Science and Technology Hyderabad',
    year: '2022 - 2026',
    description: 'CGPA of 9.34 (as of now)',
    icon: <FaGraduationCap className="w-5 h-5 text-sky-500" />,
    highlights: [
      'Recipient of Academic Excellence Scholarship',
      'Coursework in Data Structures, Algorithms, Computer Fundamentals and ML',
      'Active participant in coding competitions'
    ]
  },
  // Add more entries here if needed
  {
    degree: 'Intermediate Education (MPC)',
    institution: 'Sri Chaitanya Junior Kalasala, Hyderabad',
    year: '2020 - 2022',
    description: 'Scored 98.7% in Board Examinations',
    icon: <FiBook className="w-5 h-5 text-sky-500" />,
    highlights: [
      'State Rank (794) in EAMCET 2022',
      'Good at Mathematics'
    ]
  }
]

function EducationCard({ degree, institution, year, description, icon, highlights }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600"></div>
      
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-lg bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center mr-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800 transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{degree}</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium">{institution}</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <FiCalendar className="text-slate-400 dark:text-slate-500 mr-2" />
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{year}</span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="mt-4 border-t border-slate-100 dark:border-slate-700 pt-4">
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center">
              <FiAward className="mr-2" />
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-2"></span>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="section bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Education" 
            className="heading text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2" 
          />
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My academic journey and qualifications that have shaped my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}