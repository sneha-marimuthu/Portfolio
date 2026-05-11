import React from 'react'
import { motion } from 'framer-motion'

// Minimal, pale-green, glassmorphic Skill Pill
// Props: skillName (string), animationDirection ('normal'|'reverse')
export default function SkillPill({ skillName, animationDirection = 'normal' }){
  const dir = animationDirection === 'reverse' ? -1 : 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="pill-wrap inline-block"
      style={{ ['--dir']: dir }}
    >
      <div className="pill-border" aria-hidden />

      <div className="pill-inner">
        <span className="pill-text">{skillName}</span>
      </div>
    </motion.div>
  )
}
