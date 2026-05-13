import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SkillPill from './SkillPill'
import { projectCardVariants } from '../animations/projectsAnimation'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      layout
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="project-card group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-media-wrap">
        <img src={project.image} alt={`${project.name} banner`} loading="lazy" className="project-media" />
      </div>

      <div className="project-body">
        <div className="project-heading-row">
          <div>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="project-icon-btn" aria-label={`${project.name} GitHub`}>
            <FiGithub />
          </a>
        </div>

        <p className="project-short">{project.shortDescription}</p>

        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="project-details"
            >
              <p className="project-full">{project.fullDescription}</p>
              {!!project.impact?.length && <p className="project-meta"><strong>Impact:</strong> {project.impact.join(' | ')}</p>}
              <p className="project-meta"><strong>Features:</strong> {project.features.join(' | ')}</p>

              <div className="project-tags">
                {project.techStack.map((tech) => (
                  <SkillPill key={`${project.id}-${tech}`} skillName={tech} />
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn">
                  <FiGithub /> GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn">
                    <FiExternalLink /> Live
                  </a>
                )}
                {project.backend && (
                  <a href={project.backend} target="_blank" rel="noreferrer" className="project-link-btn">
                    <FiGithub /> Backend
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}
