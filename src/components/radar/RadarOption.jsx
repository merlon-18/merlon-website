import { motion } from 'framer-motion'

export default function RadarOption({ label, icon, description, selected, onClick, multi }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.008 }}
      whileTap={{ scale: 0.995 }}
      className={`
        w-full text-left px-3.5 py-3 sm:px-5 sm:py-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
        ${selected
          ? 'border-accent bg-accent/10 shadow-accent-sm'
          : 'border-border bg-card hover:border-text-3'
        }
      `}
    >
      <div className="flex items-start gap-2.5 sm:gap-3">
        {/* Checkbox / radio indicator */}
        <div className={`
          mt-0.5 w-4 h-4 sm:w-5 sm:h-5 shrink-0 flex items-center justify-center transition-colors border-2
          ${multi ? 'rounded-md' : 'rounded-full'}
          ${selected ? 'border-accent bg-accent' : 'border-text-3'}
        `}>
          {selected && (
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {icon && <span className="text-base sm:text-lg">{icon}</span>}
            <span className="font-display text-[14px] sm:text-[15px] text-text font-normal">{label}</span>
          </div>
          {description && (
            <p className="text-text-3 text-[11px] sm:text-xs mt-0.5 sm:mt-1 font-light">{description}</p>
          )}
        </div>
      </div>
    </motion.button>
  )
}
