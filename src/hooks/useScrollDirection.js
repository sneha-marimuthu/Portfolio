import { useEffect, useRef, useState } from 'react'

// Hook tracks scroll direction and enforces a 7s visible window after upward scroll
export default function useScrollDirection(){
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const [direction, setDirection] = useState('up')
  const allowAutoHide = useRef(true)
  const timerRef = useRef(null)

  useEffect(()=>{
    const handle = ()=>{
      const y = window.scrollY
      if (y > lastY.current + 5) {
        // scrolling down
        setDirection('down')
        if (allowAutoHide.current) {
          // allow hide
        }
      } else if (y < lastY.current - 5) {
        // scrolling up
        setDirection('up')
        allowAutoHide.current = false
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(()=>{
          allowAutoHide.current = true
        }, 7000)
      }
      lastY.current = y
    }

    const throttled = () => handle()
    window.addEventListener('scroll', throttled, { passive: true })
    return ()=>{
      window.removeEventListener('scroll', throttled)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return { direction, allowAutoHide }
}
