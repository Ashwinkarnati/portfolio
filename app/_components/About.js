'use client'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

export default function About() {
  return (
    <section id="about" className="section bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <AnimatedText 
          text="About Me" 
          className="heading text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2 text-center" 
        />
        <div className="w-24 h-1.5 bg-sky-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Who I Am Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Who I Am</h3>
            </div>
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A highly motivated and detail-oriented Computer Science student passionate about Software Development, Web Technologies, Machine Learning, and AI, constantly exploring new innovations.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Experienced in Full-Stack Development, Machine Learning, and AI, with hands-on projects showcasing practical implementation of these technologies.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Quick learner with a problem-solving mindset, always eager to expand my knowledge and contribute to cutting-edge technological solutions.
              </p>
            </div>
          </motion.div>
          
          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  title: "State Rank 14 in NTSE (2019)", 
                  desc: "National Talent Search Examination",
                  icon: "🏆"
                },
                { 
                  title: "Rank 794 in TS EAMCET (2022)", 
                  desc: "Engineering, Agriculture and Medical Common Entrance Test",
                  icon: "📚"
                },
                { 
                  title: "GPA: 9.34", 
                  desc: "B.Tech in Computer Science & Engineering at JNTUHUCESTH Hyderabad",
                  icon: "🎓"
                },
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="p-5 bg-gradient-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-xl hover:shadow-md transition-all duration-300 border-l-4 border-sky-500 flex items-start"
                >
                  <span className="text-2xl mr-4">{achievement.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100">{achievement.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{achievement.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}