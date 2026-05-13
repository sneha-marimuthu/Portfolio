import React from 'react'
import SkillPill from './SkillPill'

// Row marquee: duplicates skills for seamless scroll
export default function SkillRow({ skills = [], direction = 'left', speed = 32 }){
  const repeatedGroups = 4

  return (
    <div className="overflow-hidden w-full py-3 relative marquee-container">
      {/* left/right fade overlays */}
      <div className="marquee-fade marquee-fade-left" aria-hidden />
      <div className="marquee-fade marquee-fade-right" aria-hidden />

      <div
        className={`marquee-track flex gap-3 items-center ${direction === 'right' ? 'rev' : ''}`}
        style={{ ['--marquee-duration']: `${speed}s` }}
      >
        {Array.from({ length: repeatedGroups }).map((_, group) => (
          <div key={`group-${group}`} className="marquee-group">
            {skills.map((s, i) => (
              <div key={`${group}-${s}-${i}`} className="inline-block">
                <SkillPill skillName={s} animationDirection={direction === 'right' ? 'reverse' : 'normal'} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
