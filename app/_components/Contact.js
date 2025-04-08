'use client'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
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
  },
  {
    icon: <FaLinkedinIn className="text-xl" />,
    link: 'https://linkedin.com/in/ashwin-karnati',
    name: 'LinkedIn',
  },
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: 'Ashwin',
          from_email: form.email,
          to_email: 'ashwinkarnati2k5@gmail.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setLoading(false)
        setSuccess(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      })
      .catch((error) => {
        setLoading(false)
        console.error('Email sending failed:', error)
        alert('Failed to send message. Please try again later.')
      })
  }

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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
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
              <h4 className="text-slate-600 dark:text-slate-300 mb-4">Follow me on</h4>
              <div className="flex space-x-3">
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
                    className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-900/50 transition-colors group"
                    aria-label={social.name}
                  >
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-sky-500 transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
              <span className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white mr-3">
                <FiSend />
              </span>
              Send Me a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: field === 'name' ? 0.2 : field === 'email' ? 0.3 : 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    <span className="text-red-500">*</span>
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      id={field}
                      value={form[field]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${
                        errors[field]
                          ? 'border-red-500 focus:ring-red-500/30 bg-red-50 dark:bg-red-900/10'
                          : 'border-slate-300 dark:border-slate-600 focus:border-sky-500 focus:ring-sky-500/30 bg-slate-50 dark:bg-slate-700/30'
                      }`}
                    />
                  ) : (
                    <textarea
                      name={field}
                      id={field}
                      rows="5"
                      value={form[field]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${
                        errors[field]
                          ? 'border-red-500 focus:ring-red-500/30 bg-red-50 dark:bg-red-900/10'
                          : 'border-slate-300 dark:border-slate-600 focus:border-sky-500 focus:ring-sky-500/30 bg-slate-50 dark:bg-slate-700/30'
                      }`}
                    ></textarea>
                  )}
                  {errors[field] && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors[field]}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}