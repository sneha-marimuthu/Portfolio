import React from 'react'
import SkillPill from './SkillPill'

// Row marquee: duplicates skills for seamless scroll
export default function SkillRow({ skills = [], direction = 'left', speed = 32 }){
  // Duplicate skills to ensure seamless scroll (enough length for smooth loop)
  const display = [...skills, ...skills]

  return (
    <div className="overflow-hidden w-full py-3 relative marquee-container">
      {/* left/right fade overlays */}
      <div className="marquee-fade marquee-fade-left" aria-hidden />
      <div className="marquee-fade marquee-fade-right" aria-hidden />

      <div
        className={`marquee-track flex gap-3 items-center ${direction === 'right' ? 'rev' : ''}`}
        style={{ ['--marquee-duration']: `${speed}s` }}
      >
        {display.map((s, i) => (
          <div key={`${s}-${i}`} className="inline-block">
            <SkillPill skillName={s} animationDirection={direction === 'right' ? 'reverse' : 'normal'} />
          </div>
        ))}
      </div>
    </div>
  )
}
