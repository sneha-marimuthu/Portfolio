import React from 'react'
import { motion } from 'framer-motion'
import SkillPill from './SkillPill'
import { fadeUp } from '../animations/experienceAnimation'

export default function TimelineCard({ item, isLast }) {
  return (
    <motion.article variants={fadeUp} className="timeline-item">
      <div className="timeline-marker-wrap">
        <span className="timeline-marker" />
        {!isLast && <span className="timeline-rail" />}
      </div>

      <div className="experience-card">
        <p className="experience-duration">{item.duration}</p>
        <h3 className="experience-role">{item.role}</h3>
        <p className="experience-company">{item.company}</p>
        <p className="experience-description">{item.description}</p>

        <ul className="experience-points">
          {item.responsibilities.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="experience-tech">
          {item.technologies.map((tech) => (
            <SkillPill key={`${item.id}-${tech}`} skillName={tech} />
          ))}
        </div>
      </div>
    </motion.article>
  )
}
