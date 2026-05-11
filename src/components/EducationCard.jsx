import React from 'react'
import { motion } from 'framer-motion'

export default function EducationCard({ degree, institution, period, detail, index }){
  return (
    <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative pl-8 mb-6">
      <div className="absolute left-0 top-1">
        <div className="w-3 h-3 rounded-full bg-forest shadow-md animate-pulse" />
        <div className="w-px h-full bg-white/20 mt-2" />
      </div>

      <div className="glass p-4 rounded-xl shadow-sm border border-white/10">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900">{degree}</h4>
          <span className="text-sm text-gray-600">{period}</span>
        </div>
        <div className="text-sm text-gray-700 mt-1">{institution}</div>
        {detail && <div className="text-sm text-gray-600 mt-2">{detail}</div>}
      </div>
    </motion.div>
  )
}
