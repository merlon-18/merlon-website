import { useRef, useEffect } from 'react'

export default function DotGrid() {
  const overlayRef = useRef(null)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return

    const onMove = (e) => {
      el.style.setProperty('--mx', e.clientX + 'px')
      el.style.setProperty('--my', e.clientY + 'px')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 60vh, transparent 100vh)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60vh, transparent 100vh)',
      }}
    >
      {/* Base dots — subtle beige grid */}
      <div className="absolute inset-0 dot-base" />
      {/* Hover layer — enlarged dots near cursor */}
      <div ref={overlayRef} className="absolute inset-0 dot-hover" />
    </div>
  )
}
