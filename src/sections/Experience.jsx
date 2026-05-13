import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import ExperienceCard from '../components/ExperienceCard'
import { internships } from '../constants/experienceData'
import { experienceContainer } from '../animations/experienceAnimation'
import '../styles/experience.css'

export default function Experience() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section id="experience" className="experience-section">
      <div className="experience-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={experienceContainer}>
          <h2 className="experience-heading">Experience</h2>
          <p className="experience-subtitle">
            Hands-on experience building real-world applications, backend systems, and scalable full-stack solutions.
          </p>

          <div className="experience-stack">
            {internships.map((item) => (
              <ExperienceCard key={item.id} item={item} onViewCertificate={setActiveCertificate} />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCertificate?.certificate?.file && (
          <motion.div
            className="certificate-modal-overlay"
            onClick={() => setActiveCertificate(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="certificate-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="certificate-modal-close" type="button" onClick={() => setActiveCertificate(null)} aria-label="Close certificate preview">
                <FiX />
              </button>
              <img src={activeCertificate.certificate.file} alt={`${activeCertificate.company} certificate`} className="certificate-modal-image" />
              <div className="certificate-modal-meta">
                <h4>{activeCertificate.certificate.label || 'Certificate'}</h4>
                <p>{activeCertificate.company}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
