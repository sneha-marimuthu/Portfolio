import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

export default function App(){
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <About />
        <Skills />
        <section id="projects" className="min-h-screen flex items-center justify-center">Projects placeholder</section>
        <section id="contact" className="min-h-screen flex items-center justify-center">Contact placeholder</section>
      </main>
    </div>
  )
}
