import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

function ZigzagStep({ step, index }) {
  const isEven = index % 2 === 0

  return (
    <>
      {/* Desktop: two-column zigzag */}
      <motion.div
        className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center"
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {isEven ? (
          <>
            {/* Number side (left) */}
            <div className="flex justify-end">
              <motion.span
                className="font-mono font-bold leading-none block text-right"
                style={{
                  fontSize: 'clamp(80px, 10vw, 120px)',
                  color: 'oklch(0.60 0.17 255 / 0.12)',
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {step.num}
              </motion.span>
            </div>
            {/* Divider line */}
            <motion.div
              className="w-[2px] h-20 rounded-full"
              style={{ background: 'oklch(0.60 0.17 255 / 0.15)' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            {/* Text side (right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="font-display text-2xl font-normal text-text mb-3">{step.title}</h3>
              <p className="text-text-2 text-base font-light leading-relaxed max-w-md">
                {step.description}
              </p>
            </motion.div>
          </>
        ) : (
          <>
            {/* Text side (left) */}
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="font-display text-2xl font-normal text-text mb-3">{step.title}</h3>
              <p className="text-text-2 text-base font-light leading-relaxed max-w-md ml-auto">
                {step.description}
              </p>
            </motion.div>
            {/* Divider line */}
            <motion.div
              className="w-[2px] h-20 rounded-full"
              style={{ background: 'oklch(0.60 0.17 255 / 0.15)' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            {/* Number side (right) */}
            <div className="flex justify-start">
              <motion.span
                className="font-mono font-bold leading-none block"
                style={{
                  fontSize: 'clamp(80px, 10vw, 120px)',
                  color: 'oklch(0.60 0.17 255 / 0.12)',
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {step.num}
              </motion.span>
            </div>
          </>
        )}
      </motion.div>

      {/* Mobile: glass card */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass rounded-xl p-6">
          <span
            className="font-mono font-bold leading-none mb-3 block"
            style={{
              fontSize: '48px',
              color: 'oklch(0.60 0.17 255 / 0.15)',
            }}
          >
            {step.num}
          </span>
          <h3 className="font-display text-lg font-normal text-text mb-2">{step.title}</h3>
          <p className="text-text-2 text-sm font-light leading-relaxed">{step.description}</p>
        </div>
      </motion.div>
    </>
  )
}

export default function Process({ onOpenRadar }) {
  const { t } = useLanguage()
  const steps = t.process.steps

  return (
    <section id="process" className="section-std section-bg-accent-hint">
      <div className="wrap">
        <motion.div
          className="text-center mb-10 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-mono">{t.process.sectionLabel}</p>
          <h2
            className="font-display font-extralight tracking-[-1.5px] leading-[1.2] text-text"
            style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
          >
            {t.process.heading} <em className="italic font-light text-gradient">{t.process.headingHighlight}</em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-20 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ZigzagStep key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <button onClick={() => onOpenRadar()} className="btn-primary">
            {t.process.ctaButton}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
