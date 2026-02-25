import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

function FloatingShape({ className, delay = 0, duration = 20, rotateRange = 15, yRange = 30, children }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.4, duration: 0.8 }}
      style={{ perspective: '800px' }}
    >
      <motion.div
        animate={{
          y: [0, -yRange, yRange * 0.3, -yRange * 0.6, 0],
          x: [0, yRange * 0.2, -yRange * 0.15, yRange * 0.1, 0],
          rotateX: [0, rotateRange, -rotateRange * 0.5, rotateRange * 0.7, 0],
          rotateY: [0, -rotateRange * 0.8, rotateRange, -rotateRange * 0.3, 0],
          rotateZ: [0, rotateRange * 0.3, -rotateRange * 0.2, rotateRange * 0.4, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero({ onOpenRadar }) {
  const { t, lang } = useLanguage()

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-16 pb-12 sm:pb-0 overflow-hidden">
      {/* Subtle radial accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.60 0.17 255 / 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Left side — 3D floating shapes */}
      <FloatingShape className="left-[4%] top-[18%] hidden md:block" delay={0} duration={18} rotateRange={20} yRange={35}>
        <div
          className="w-20 h-20 rounded-2xl border border-accent/20"
          style={{
            background: 'linear-gradient(135deg, oklch(0.60 0.17 255 / 0.06), oklch(0.65 0.20 290 / 0.03))',
            boxShadow: '0 8px 32px oklch(0.60 0.17 255 / 0.06)',
          }}
        />
      </FloatingShape>
      <FloatingShape className="left-[9%] top-[52%] hidden md:block" delay={0.3} duration={22} rotateRange={25} yRange={25}>
        <div
          className="w-14 h-14 rounded-full border border-border/50"
          style={{
            background: 'radial-gradient(circle at 30% 30%, oklch(0.45 0.12 30 / 0.06), oklch(0.45 0.12 30 / 0.02))',
            boxShadow: '0 4px 20px oklch(0.45 0.12 30 / 0.04)',
          }}
        />
      </FloatingShape>
      <FloatingShape className="left-[14%] top-[74%] hidden lg:block" delay={0.6} duration={15} rotateRange={30} yRange={20}>
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: 'oklch(0.60 0.17 255 / 0.3)',
            boxShadow: '0 0 12px oklch(0.60 0.17 255 / 0.2)',
          }}
        />
      </FloatingShape>
      <FloatingShape className="left-[2%] top-[38%] hidden lg:block" delay={0.15} duration={20} rotateRange={12} yRange={40}>
        <div
          className="w-10 h-10 rounded-lg border border-accent/10"
          style={{
            background: 'oklch(0.60 0.17 255 / 0.03)',
            transform: 'rotateX(45deg)',
          }}
        />
      </FloatingShape>

      {/* Right side — 3D floating shapes */}
      <FloatingShape className="right-[4%] top-[22%] hidden md:block" delay={0.15} duration={20} rotateRange={22} yRange={30}>
        <div
          className="w-16 h-16 rounded-xl border border-border/40"
          style={{
            background: 'linear-gradient(225deg, oklch(0.65 0.20 290 / 0.05), oklch(0.60 0.17 255 / 0.03))',
            boxShadow: '0 8px 32px oklch(0.65 0.20 290 / 0.05)',
          }}
        />
      </FloatingShape>
      <FloatingShape className="right-[8%] top-[58%] hidden md:block" delay={0.45} duration={24} rotateRange={18} yRange={35}>
        <div
          className="w-24 h-24 rounded-3xl border border-accent/12"
          style={{
            background: 'linear-gradient(180deg, oklch(0.60 0.17 255 / 0.04), transparent)',
            boxShadow: '0 12px 40px oklch(0.60 0.17 255 / 0.05)',
          }}
        />
      </FloatingShape>
      <FloatingShape className="right-[16%] top-[78%] hidden lg:block" delay={0.35} duration={16} rotateRange={35} yRange={18}>
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: 'oklch(0.65 0.20 290 / 0.25)',
            boxShadow: '0 0 16px oklch(0.65 0.20 290 / 0.15)',
          }}
        />
      </FloatingShape>
      <FloatingShape className="right-[13%] top-[32%] hidden lg:block" delay={0.1} duration={19} rotateRange={15} yRange={28}>
        <div
          className="w-12 h-12 rounded-lg border border-accent/8"
          style={{
            background: 'oklch(0.60 0.17 255 / 0.02)',
            boxShadow: 'inset 0 1px 0 oklch(1 0 0 / 0.03)',
          }}
        />
      </FloatingShape>

      <div className="wrap text-center relative z-10">
        <motion.p
          className="section-mono mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {t.hero.label}
        </motion.p>

        <motion.h1
          className="font-display font-extralight tracking-[-2.5px] leading-[1.08] text-text mb-6"
          style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {lang === 'hu' ? (
            <>
              {t.hero.title}<br />
              {t.hero.titleBreak} <em className="italic font-light text-gradient">{t.hero.titleHighlight}</em>
            </>
          ) : (
            <>
              {t.hero.title}<br />
              <em className="italic font-light text-gradient">{t.hero.titleHighlight}</em>
            </>
          )}
        </motion.h1>

        <motion.p
          className="text-text-2 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button onClick={() => onOpenRadar()} className="btn-primary">
            {t.hero.ctaPrimary}
          </button>
          <a href={`/${lang}#services`} className="btn-secondary">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
