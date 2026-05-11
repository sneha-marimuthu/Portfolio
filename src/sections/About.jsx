import React from 'react'
import AboutCard from '../components/AboutCard'
import EducationCard from '../components/EducationCard'
import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
    period: '2023 – Apr 2027',
    detail: 'GPA: 8.5 (Till 5th Semester)'
  },
  {
    degree: 'HSC',
    institution: 'Srinivasa Vidhyalaya Matric. Higher Secondary School, Udumalpet',
    period: 'Apr 2023',
    detail: 'Percentage: 92%'
  },
  {
    degree: 'SSLC',
    institution: 'Srinivasa Vidhyalaya Matric. Higher Secondary School, Udumalpet',
    period: 'May 2021',
    detail: 'Result: PASS'
  }
]

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-matteBlack mb-8">About Me</motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <AboutCard
              title="Hello — I’m Sneha"
              text={`I am a passionate Computer Science Engineering student with strong interest in Full Stack Development, UI/UX Design, Java, and problem-solving. I enjoy building practical real-world applications that combine clean design with efficient functionality. I continuously explore modern technologies, strengthen my development skills, and work on innovative projects that improve user experience and solve meaningful problems.`}
              highlights={[
                'Passionate about learning emerging technologies',
                'Strong interest in scalable application development',
                'Consistent learner with problem-solving mindset',
                'Interested in software engineering and creative UI experiences',
                'Team player with leadership and event management experience'
              ]}
            />
          </div>

          <div>
            <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold text-forest mb-4">Education</motion.h3>

            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 hidden md:block w-px bg-white/10" />
              <div className="pl-6">
                {education.map((e, i) => (
                  <EducationCard key={i} index={i} degree={e.degree} institution={e.institution} period={e.period} detail={e.detail} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
