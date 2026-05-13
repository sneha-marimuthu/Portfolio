import React from 'react'
import { motion } from 'framer-motion'
import { itemFadeUp } from '../animations/contactAnimation'

export default function ContactCard({ item }) {
  const Icon = item.icon
  const content = (
    <motion.div variants={itemFadeUp} whileHover={{ y: -3 }} className="contact-card">
      <span className="contact-card-icon"><Icon /></span>
      <div>
        <p className="contact-card-label">{item.label}</p>
        <p className="contact-card-value">{item.value}</p>
      </div>
    </motion.div>
  )

  if (!item.href) return content

  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  )
}
