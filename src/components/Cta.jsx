import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Cta({ onOpenRadar }) {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-32 border-t border-border">
      <div className="wrap">
        <motion.div
          className="text-center max-w-lg mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Local accent glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, oklch(0.60 0.17 255 / 0.08) 0%, transparent 70%)',
            }}
          />

          {/* Subtle glow pulse */}
          <div className="absolute -inset-16 rounded-3xl glow-pulse pointer-events-none" />

          <p className="section-mono">{t.cta.sectionLabel}</p>
          <h2
            className="font-display font-extralight tracking-[-1.5px] leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
          >
            <em className="italic font-light text-gradient">{t.cta.heading}</em>
          </h2>
          <p className="text-text-2 font-light mb-10">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onOpenRadar()} className="btn-primary">
              {t.cta.ctaPrimary}
            </button>
            <a href="mailto:leon@merlon.digital" className="btn-secondary">
              leon@merlon.digital
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
