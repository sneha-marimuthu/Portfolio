import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import SocialButtons from './SocialButtons'
import { fadeIn } from '../animations/motionVariants'
import profileImage from '../assets/profile.jpeg'

export default function Hero(){
  const phrases = ['Full Stack Developer', 'UI/UX Designer', 'Java Enthusiast', 'Consistent Learner']

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: profile image - only on md+ */}
        <motion.div className="hidden md:flex justify-center" variants={fadeIn(0.1)} initial="hidden" animate="visible">
          <div className="w-3/4 max-w-[520px] aspect-square glass rounded-2xl shadow-xl border border-white/20 overflow-hidden flex items-center justify-center">
            <img src={profileImage} alt="profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div className="flex flex-col items-start md:items-start justify-center py-12" variants={fadeIn(0.2)} initial="hidden" animate="visible">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-matteBlack">Sneha M</h1>
          <div className="mt-4 text-xl">
            <Typewriter phrases={phrases} />
          </div>

          <p className="mt-6 text-gray-700 max-w-xl">Passionate Full Stack Developer crafting clean, user-focused digital experiences. Consistent learner driven by innovation, problem-solving, and modern technology.</p>

          <SocialButtons />
        </motion.div>
      </div>
    </div>
  )
}
