import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import ContactCard from '../components/ContactCard'
import SocialIcon from '../components/SocialIcon'
import { contactItems, resumeItem } from '../constants/contactData'
import { contactContainer, itemFadeUp } from '../animations/contactAnimation'
import '../styles/contact.css'

export default function Contact() {
  const ResumeIcon = resumeItem.icon
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const next = {}
    if (!formData.name.trim()) next.name = 'Name is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Valid email is required'
    if (formData.message.trim().length < 10) next.message = 'Message should be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 2800)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={contactContainer}>
          <div className="contact-layout">
            <div>
              <motion.h2 variants={itemFadeUp} className="contact-heading">Let’s Connect</motion.h2>
              <motion.p variants={itemFadeUp} className="contact-subtitle">
                I’m always open to internships, collaborations, innovative projects, and meaningful conversations in technology and design.
              </motion.p>

              <div className="contact-cards">
                {contactItems.map((item) => <ContactCard key={item.id} item={item} />)}
              </div>

              <motion.a variants={itemFadeUp} href={resumeItem.href} target="_blank" rel="noreferrer" className="resume-btn">
                <ResumeIcon /> Resume Download
              </motion.a>

              <motion.div variants={itemFadeUp} className="social-icons-row">
                <SocialIcon href="https://linkedin.com/in/sneha-marimuthu" icon={FiLinkedin} label="LinkedIn" />
                <SocialIcon href="https://github.com/sneha-marimuthu" icon={FiGithub} label="GitHub" />
                <SocialIcon href="mailto:mailsnehamarimuthu326@gmail.com" icon={FiMail} label="Email" />
              </motion.div>
            </div>

            <motion.form variants={itemFadeUp} onSubmit={onSubmit} className="contact-form-card" noValidate>
              <label className="contact-label">Name</label>
              <input className="contact-input" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
              {errors.name && <p className="contact-error">{errors.name}</p>}

              <label className="contact-label">Email</label>
              <input className="contact-input" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
              {errors.email && <p className="contact-error">{errors.email}</p>}

              <label className="contact-label">Message</label>
              <textarea rows={5} className="contact-input contact-textarea" value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} />
              {errors.message && <p className="contact-error">{errors.message}</p>}

              <button type="submit" className="send-btn" disabled={submitting}>{submitting ? 'Sending...' : 'Send Message'}</button>
              {success && <p className="contact-success">Message sent successfully.</p>}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
