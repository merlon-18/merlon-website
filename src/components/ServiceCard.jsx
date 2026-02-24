import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon, categoryId, onOpenRadar }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -8, y: x * 8 })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={() => onOpenRadar(categoryId)}
      onKeyDown={(e) => e.key === 'Enter' && onOpenRadar(categoryId)}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative glass rounded-xl p-5 sm:p-8 cursor-pointer overflow-hidden"
      animate={{
        y: hovered ? -6 : 0,
        borderColor: hovered ? 'oklch(0.60 0.17 255)' : 'oklch(0.22 0.02 255 / 0.5)',
        boxShadow: hovered
          ? '0 0 20px oklch(0.60 0.17 255 / 0.15), 0 8px 32px oklch(0.60 0.17 255 / 0.08)'
          : '0 0 0 oklch(0.60 0.17 255 / 0)',
      }}
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="font-display text-lg sm:text-xl font-normal text-text mb-2 sm:mb-3">{title}</h3>
      <p className="text-text-2 text-sm sm:text-base font-light leading-relaxed mb-1 sm:mb-6">{description}</p>

      {/* Radar CTA — slide-up */}
      <motion.span
        className="font-mono text-[10px] text-accent tracking-[0.04em] absolute bottom-4 right-5"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        project.radar →
      </motion.span>
    </motion.div>
  )
}
