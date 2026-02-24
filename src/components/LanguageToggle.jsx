import { useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FlagHU({ size = 16, clipId }) {
  const r = size / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <defs>
        <clipPath id={clipId}>
          <circle cx={r} cy={r} r={r} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width={size} height={size} fill="#ffffff" />
        <rect width={size} height={size / 3} y={0} fill="#ce2939" />
        <rect width={size} height={size / 3} y={(size / 3) * 2} fill="#477050" />
      </g>
    </svg>
  )
}

function FlagEN({ size = 16, clipId }) {
  const r = size / 2
  const s = size
  return (
    <svg width={size} height={size} viewBox={`0 0 ${s} ${s}`} style={{ display: 'block' }}>
      <defs>
        <clipPath id={clipId}>
          <circle cx={r} cy={r} r={r} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width={s} height={s} fill="#00247d" />
        <path d={`M0,0 L${s},${s} M${s},0 L0,${s}`} stroke="#ffffff" strokeWidth={s * 0.13} />
        <path d={`M0,0 L${s},${s} M${s},0 L0,${s}`} stroke="#cf142b" strokeWidth={s * 0.07} />
        <path d={`M${r},0 L${r},${s} M0,${r} L${s},${r}`} stroke="#ffffff" strokeWidth={s * 0.17} />
        <path d={`M${r},0 L${r},${s} M0,${r} L${s},${r}`} stroke="#cf142b" strokeWidth={s * 0.1} />
      </g>
    </svg>
  )
}

export default function LanguageToggle({ lang = 'hu', onToggle }) {
  const uid = useId()
  const isEN = lang === 'en'

  const trackW = 52
  const trackH = 28
  const trackR = trackH / 2
  const knobSize = 22
  const knobPad = (trackH - knobSize) / 2
  const knobTravel = trackW - knobSize - knobPad * 2
  const flagSize = 14

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isEN ? 'Switch to Hungarian' : 'Switch to English'}
      className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 select-none min-h-[44px]"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* HU label */}
      <span
        className="font-mono text-[10px] tracking-[0.06em] transition-colors duration-200"
        style={{
          color: !isEN ? 'oklch(0.60 0.17 255)' : 'oklch(0.47 0.02 250)',
          fontWeight: !isEN ? 600 : 400,
        }}
      >
        HU
      </span>

      {/* Track */}
      <div className="relative flex-shrink-0" style={{ width: trackW, height: trackH }}>
        {/* Track background */}
        <motion.div
          className="absolute inset-0"
          style={{
            borderRadius: trackR,
            border: '1px solid oklch(0.28 0.03 255 / 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          animate={{
            background: isEN
              ? 'oklch(0.22 0.06 255 / 0.7)'
              : 'oklch(0.18 0.02 260 / 0.6)',
            boxShadow: isEN
              ? '0 0 12px oklch(0.60 0.17 255 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.04)'
              : '0 0 0px oklch(0.60 0.17 255 / 0), inset 0 1px 0 oklch(1 0 0 / 0.03)',
            borderColor: isEN
              ? 'oklch(0.40 0.10 255 / 0.5)'
              : 'oklch(0.28 0.03 255 / 0.5)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glass highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: trackR,
            background: 'linear-gradient(180deg, oklch(1 0 0 / 0.04) 0%, transparent 50%)',
          }}
        />

        {/* Sliding knob */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{
            width: knobSize,
            height: knobSize,
            top: knobPad,
            borderRadius: '50%',
            background: 'oklch(0.22 0.02 260)',
            border: '1px solid oklch(0.35 0.03 255 / 0.6)',
            boxShadow: '0 2px 6px oklch(0 0 0 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.06)',
            overflow: 'hidden',
          }}
          animate={{ left: isEN ? knobPad + knobTravel : knobPad }}
          transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.8 }}
        >
          {/* Single flag with crossfade */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isEN ? 'en' : 'hu'}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              {isEN ? (
                <FlagEN size={flagSize} clipId={`${uid}-en`} />
              ) : (
                <FlagHU size={flagSize} clipId={`${uid}-hu`} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* EN label */}
      <span
        className="font-mono text-[10px] tracking-[0.06em] transition-colors duration-200"
        style={{
          color: isEN ? 'oklch(0.60 0.17 255)' : 'oklch(0.47 0.02 250)',
          fontWeight: isEN ? 600 : 400,
        }}
      >
        EN
      </span>
    </button>
  )
}
