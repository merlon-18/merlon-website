import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { name: 'Weboldal', days: 5, progress: 80 },
  { name: 'Automatizáció', days: 3, progress: 90 },
  { name: 'Landing page', days: 2, progress: 95 },
  { name: 'CRM integráció', days: 4, progress: 70 },
  { name: 'BI Dashboard', days: 6, progress: 60 },
]

export default function TerminalWidget({ onClick }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const project = projects[index]

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="cursor-pointer group w-full max-w-[440px] mx-auto"
    >
      <div
        className="rounded-xl glass transition-all duration-300 overflow-hidden group-hover:border-accent/40 group-hover:shadow-[0_0_20px_oklch(0.60_0.17_255/0.12)]"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-text-3/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-3/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-3/30" />
          </div>
          <span className="font-mono text-[11px] text-text-3 ml-2">merlon.deliver()</span>
        </div>

        {/* Content */}
        <div className="px-5 py-4 font-mono text-[13px] min-h-[120px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-3 mb-2">
                <span className="text-text-3">projekt:</span>
                <span className="text-accent">"{project.name}"</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-text-3">állapot:</span>
                <div className="flex-1 h-2.5 bg-border rounded-full overflow-hidden max-w-[160px]">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
                <span className="text-text-2 text-[11px]">{project.progress}%</span>
              </div>
              <div className="flex gap-3">
                <span className="text-text-3">kész:</span>
                <span className="text-text">{project.days} nap múlva</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <p className="text-center text-text-2 text-sm mt-5 font-light">
        Nem hónapok. Nem hetek. <em className="text-accent font-light italic">Napok.</em>
      </p>
    </div>
  )
}
