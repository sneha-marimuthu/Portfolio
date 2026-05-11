import React from 'react'
import { motion } from 'framer-motion'

export default function AboutCard({ title, text, highlights = [] }){
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="glass p-6 rounded-xl shadow-md border border-white/20">
      <h3 className="text-2xl font-semibold text-forest mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{text}</p>

      {highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-forest" />
              <span className="text-gray-700">{h}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
