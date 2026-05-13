import React from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SkillPill from './SkillPill'
import { fadeUp } from '../animations/experienceAnimation'

export default function ExperienceCard({ item, onViewCertificate }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6, scale: 1.005 }} className="experience-card-block">
      <div className="experience-card-head">
        <div>
          <p className="experience-duration">{item.duration}</p>
          <h3 className="experience-role">{item.role}</h3>
          <p className="experience-company">{item.company}</p>
        </div>
        {item.certificate?.file && (
          <button
            type="button"
            className="experience-certificate-btn"
            title="View Certificate"
            aria-label="View Certificate"
            onClick={() => onViewCertificate(item)}
          >
            <FiAward />
          </button>
        )}
      </div>

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
    </motion.article>
  )
}
