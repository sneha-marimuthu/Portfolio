import React, { useEffect, useState, useRef } from 'react'

export default function Typewriter({ phrases = [], typingSpeed = 80, pause = 1400 }){
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const mounted = useRef(true)

  useEffect(()=>{
    mounted.current = true
    let timeout
    const current = phrases[index % phrases.length]

    if (!isDeleting){
      timeout = setTimeout(()=>{
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length){
          setTimeout(()=>{
            if (mounted.current) setIsDeleting(true)
          }, pause)
        }
      }, typingSpeed)
    } else {
      timeout = setTimeout(()=>{
        setDisplay(current.slice(0, display.length - 1))
        if (display.length - 1 === 0){
          setIsDeleting(false)
          setIndex(i=>i+1)
        }
      }, typingSpeed / 1.5)
    }

    return ()=>{
      mounted.current = false
      clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, index])

  return (
    <span className="text-lg text-gray-700">
      {display}
      <span className="inline-block w-1 h-6 bg-forest ml-2 animate-pulse" aria-hidden />
    </span>
  )
}
