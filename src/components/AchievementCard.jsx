import React from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { cardFadeUp } from '../animations/achievementAnimation'

export default function AchievementCard({ item }) {
  return (
    <motion.article variants={cardFadeUp} whileHover={{ y: -5 }} className="achievement-card">
      <span className="achievement-icon"><FiAward /></span>
      <div>
        <h3 className="achievement-title">{item.title}</h3>
        <p className="achievement-description">{item.description}</p>
      </div>
    </motion.article>
  )
}
