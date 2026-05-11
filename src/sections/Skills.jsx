import React from 'react'
import { motion } from 'framer-motion'
import SkillRow from '../components/SkillRow'
import { SKILLS } from '../constants/skillsData'
import '../styles/skills.css'

const description = `Technologies and tools I use to build scalable applications, create modern user experiences, and continuously improve my development workflow.`

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-matteBlack mb-2">Skills & Technologies</motion.h2>
        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gray-700 mb-6 max-w-2xl">{description}</motion.p>

        <div className="space-y-3">
          {/* Row 1: left -> right */}
          <SkillRow skills={SKILLS.slice(0, Math.ceil(SKILLS.length/3))} direction="left" speed={36} />
          {/* Row 2: right -> left */}
          <SkillRow skills={SKILLS.slice(Math.ceil(SKILLS.length/3), Math.ceil(SKILLS.length/3)*2)} direction="right" speed={44} />
          {/* Row 3: left -> right */}
          <SkillRow skills={SKILLS.slice(Math.ceil(SKILLS.length/3)*2)} direction="left" speed={40} />
        </div>
      </div>
    </section>
  )
}
