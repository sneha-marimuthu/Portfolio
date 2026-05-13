import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { footerLinks } from '../constants/contactData'
import SocialIcon from '../components/SocialIcon'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-shell">
        <div className="footer-top">
          <div>
            <h3 className="footer-name">Sneha M</h3>
            <p className="footer-tagline">Crafting clean digital experiences with creativity and code.</p>
          </div>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="footer-nav-link">{link.label}</a>
            ))}
          </nav>

          <div className="footer-socials">
            <SocialIcon href="https://linkedin.com/in/sneha-marimuthu" icon={FiLinkedin} label="LinkedIn" />
            <SocialIcon href="https://github.com/sneha-marimuthu" icon={FiGithub} label="GitHub" />
            <SocialIcon href="mailto:mailsnehamarimuthu326@gmail.com" icon={FiMail} label="Email" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>Built with React, Tailwind CSS & Framer Motion.</p>
          <p>© 2026 Sneha M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
