import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ScrollProgress
