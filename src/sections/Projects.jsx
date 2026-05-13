import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../constants/projectsData'
import { projectSectionVariants } from '../animations/projectsAnimation'
import '../styles/projects.css'

const FEATURED_COUNT = 3

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const featured = useMemo(() => projectsData.slice(0, FEATURED_COUNT), [])
  const hidden = useMemo(() => projectsData.slice(FEATURED_COUNT), [])

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={projectSectionVariants}>
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">A collection of real-world applications focused on scalable systems, clean UI, automation, and problem-solving.</p>

          <motion.div layout className="projects-grid">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <AnimatePresence initial={false}>
              {expanded &&
                hidden.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>
          </motion.div>

          <div className="projects-cta-wrap">
            <button type="button" onClick={() => setExpanded((prev) => !prev)} className={`projects-cta ${!expanded ? 'projects-cta-pulse' : ''}`}>
              {expanded ? 'View Less' : 'View More Projects'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
