import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'

const IconButton = ({ href, children, label }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-slate-50 transition shadow-sm">
    {children}
    <span className="text-sm">{label}</span>
  </a>
)

export default function SocialButtons(){
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <IconButton href="https://linkedin.com/in/sneha-marimuthu" label="LinkedIn">
        <FaLinkedin />
      </IconButton>
      <IconButton href="https://github.com/sneha-marimuthu" label="GitHub">
        <FaGithub />
      </IconButton>
      <IconButton href="mailto:mailsnehamarimuthu326@gmail.com" label="Email">
        <FaEnvelope />
      </IconButton>
      <IconButton href={resumeHref} label="Resume">
        <FaDownload />
      </IconButton>
    </div>
  )
}
