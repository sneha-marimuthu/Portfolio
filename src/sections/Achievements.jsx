import React from 'react'
import { motion } from 'framer-motion'
import AchievementCard from '../components/AchievementCard'
import CertificateCard from '../components/CertificateCard'
import { achievementData } from '../constants/achievementData'
import { certificateData } from '../constants/certificateData'
import { achievementsContainer } from '../animations/achievementAnimation'
import '../styles/achievements.css'

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={achievementsContainer}>
          <h2 className="achievements-heading">Achievements & Certifications</h2>
          <p className="achievements-subtitle">
            Milestones, certifications, and experiences that reflect my technical growth, leadership, and continuous learning journey.
          </p>

          <div className="achievements-layout">
            <div className="achievements-group">
              <h3 className="achievements-col-title">Achievements</h3>
              <div className="achievements-list">
                {achievementData.map((item) => (
                  <AchievementCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="achievements-group">
              <h3 className="achievements-col-title">Certifications</h3>
              <div className="certifications-list">
                {certificateData.map((item) => (
                  <CertificateCard key={item.id} certificate={item} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
