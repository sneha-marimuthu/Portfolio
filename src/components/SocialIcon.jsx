import React from 'react'
import { motion } from 'framer-motion'

export default function SocialIcon({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.03 }}
      className="social-icon-btn"
    >
      <Icon />
    </motion.a>
  )
}
