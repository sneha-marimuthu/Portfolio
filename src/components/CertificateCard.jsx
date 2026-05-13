import React from 'react'
import { motion } from 'framer-motion'
import { FiFileText, FiExternalLink } from 'react-icons/fi'
import { cardFadeUp } from '../animations/achievementAnimation'

export default function CertificateCard({ certificate }) {
  return (
    <motion.article variants={cardFadeUp} whileHover={{ y: -5 }} className="certification-card">
      <span className="certification-icon"><FiFileText /></span>
      <div className="certification-body">
        <h4 className="certification-title">{certificate.name}</h4>
        <p className="certification-provider">{certificate.provider}</p>
        {certificate.link && (
          <a href={certificate.link} target="_blank" rel="noreferrer" className="certification-link">
            <FiExternalLink /> View Certificate
          </a>
        )}
      </div>
    </motion.article>
  )
}
