import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiGithub, FiLayout, FiLinkedin, FiMail, FiSmartphone } from 'react-icons/fi'
import SocialIcon from '../components/SocialIcon'
import { resumeItem } from '../constants/contactData'
import '../styles/contact.css'

const services = [
  { label: 'Web Development', icon: FiCode },
  { label: 'App Development', icon: FiSmartphone },
  { label: 'UI/UX Design', icon: FiLayout },
]

export default function Contact() {
  const ResumeIcon = resumeItem.icon

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="contact-layout simple-contact">
            <div>
              <h2 className="contact-heading">Let's Connect</h2>
              <p className="contact-subtitle">I'm open to internships, collaborations, and freelancing projects.</p>
              <p className="contact-subtitle">Feel free to reach out - I'd love to hear from you.</p>

              <div className="services-offered" aria-label="Services offered">
                {services.map((service) => {
                  const ServiceIcon = service.icon
                  return (
                    <div className="service-pill" key={service.label}>
                      <ServiceIcon />
                      <span>{service.label}</span>
                    </div>
                  )
                })}
              </div>

              <a href={resumeItem.href} target="_blank" rel="noreferrer" className="resume-btn">
                <ResumeIcon /> Resume Download
              </a>

              <div className="social-icons-row">
                <SocialIcon href="https://linkedin.com/in/sneha-marimuthu" icon={FiLinkedin} label="LinkedIn" />
                <SocialIcon href="https://github.com/sneha-marimuthu" icon={FiGithub} label="GitHub" />
                <SocialIcon href="mailto:mailsnehamarimuthu326@gmail.com" icon={FiMail} label="Email" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
