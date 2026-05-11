import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navVariants } from '../animations/motionVariants'
import useScrollDirection from '../hooks/useScrollDirection'
import { NAV_LINKS } from '../constants/navLinks'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar(){
  const { direction, allowAutoHide } = useScrollDirection()
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    if (direction === 'down'){
      if (allowAutoHide.current) setVisible(false)
    } else {
      setVisible(true)
    }
  }, [direction, allowAutoHide])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navVariants}
          className="fixed top-4 left-0 right-0 mx-auto max-w-6xl px-6 z-40"
        >
          <div className="glass rounded-xl shadow-md backdrop-blur-sm border border-white/20 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="#home" className="text-forest font-bold">Sneha M</a>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(l => (
                <a key={l.id} href={`#${l.id}`} className="text-sm text-gray-800 hover:text-forest transition">{l.label}</a>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={()=>setOpen(v=>!v)} aria-label="menu" className="p-2">
                {open ? <FiX size={20}/> : <FiMenu size={20}/>} 
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden mt-2 px-2">
              <div className="glass rounded-lg p-3 space-y-2">
                {NAV_LINKS.map(l => (
                  <a key={l.id} href={`#${l.id}`} className="block text-gray-800 py-1">{l.label}</a>
                ))}
              </div>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
