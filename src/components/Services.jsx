import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services({ onOpenRadar }) {
  const { t } = useLanguage()
  const serviceGroups = t.services.groups
  const [activeGroup, setActiveGroup] = useState(0)
  const groupRefs = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observers = []
    groupRefs.current.forEach((ref, i) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveGroup(i)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(ref)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToGroup = (i) => {
    groupRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: 'oklch(0.11 0.02 265)' }}
    >
      {/* ── Desktop: sticky sidebar + scrolling cards ── */}
      <div className="hidden md:block">
        <div className="wrap">
          <div className="grid grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
            {/* Left sticky sidebar */}
            <div className="sticky top-24 self-start py-20">
              <p className="section-mono text-xs mb-6">{t.services.sectionLabel}</p>
              <h2
                className="font-display font-extralight tracking-[-2px] leading-[1.1] text-text mb-14"
                style={{ fontSize: 'clamp(34px, 4vw, 48px)' }}
              >
                {t.services.heading}<br />
                <em className="italic font-light text-gradient">{t.services.headingHighlight}</em>
              </h2>

              <nav className="flex flex-col gap-2">
                {serviceGroups.map((group, i) => (
                  <button
                    key={group.id}
                    onClick={() => scrollToGroup(i)}
                    className="text-left px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer border border-transparent"
                    style={{
                      background: i === activeGroup ? 'oklch(0.18 0.02 260 / 0.8)' : 'transparent',
                      borderColor: i === activeGroup ? 'oklch(0.60 0.17 255 / 0.3)' : 'transparent',
                      boxShadow: i === activeGroup ? '0 0 24px oklch(0.60 0.17 255 / 0.1)' : 'none',
                    }}
                  >
                    <span
                      className="font-mono text-xs tracking-[0.08em] uppercase transition-colors duration-300 block mb-1"
                      style={{
                        color: i === activeGroup ? 'oklch(0.60 0.17 255)' : 'oklch(0.40 0.02 250)',
                      }}
                    >
                      {group.num}
                    </span>
                    <span
                      className="block font-display text-lg font-normal transition-colors duration-300"
                      style={{
                        color: i === activeGroup ? 'oklch(0.96 0.005 250)' : 'oklch(0.47 0.02 250)',
                      }}
                    >
                      {group.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right scrolling content */}
            <div className="py-20">
              {serviceGroups.map((group, gi) => (
                <div
                  key={group.id}
                  ref={(el) => (groupRefs.current[gi] = el)}
                  className="mb-24 last:mb-0"
                >
                  {/* Group header */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="font-mono text-[11px] text-accent tracking-[0.1em] uppercase">
                      {group.num} / {String(serviceGroups.length).padStart(2, '0')}
                    </span>
                    <h3
                      className="font-display font-extralight tracking-[-1px] text-text mt-2"
                      style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}
                    >
                      {group.label}
                    </h3>
                  </motion.div>

                  {/* 2-column card grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {group.services.map((s, i) => (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{
                          delay: i * 0.08,
                          type: 'spring',
                          stiffness: 120,
                          damping: 16,
                        }}
                      >
                        <ServiceCard
                          icon={s.icon}
                          title={s.title}
                          description={s.description}
                          categoryId={group.id}
                          onOpenRadar={onOpenRadar}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA per group */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <button onClick={() => onOpenRadar(group.id)} className="btn-primary">
                      {t.services.ctaButton}
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: stacked vertical ── */}
      <div className="md:hidden py-12 overflow-x-hidden">
        <div className="wrap mb-10">
          <p className="section-mono">{t.services.sectionLabel}</p>
          <h2
            className="font-display font-extralight tracking-[-1.5px] leading-[1.2] text-text"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
          >
            {t.services.heading} <em className="italic font-light text-gradient">{t.services.headingHighlight}</em>
          </h2>
        </div>

        {serviceGroups.map((group, gi) => (
          <div
            key={group.id}
            ref={(el) => {
              if (!groupRefs.current[gi]) groupRefs.current[gi] = el
            }}
            className="border-t border-border/50 py-10"
          >
            <div className="wrap">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-mono text-[11px] text-accent tracking-[0.1em] uppercase">
                  {group.num} / {String(serviceGroups.length).padStart(2, '0')}
                </span>
                <h3
                  className="font-display font-extralight tracking-[-1px] text-text mt-2"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 34px)' }}
                >
                  {group.label}
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <ServiceCard
                      icon={s.icon}
                      title={s.title}
                      description={s.description}
                      categoryId={group.id}
                      onOpenRadar={onOpenRadar}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button onClick={() => onOpenRadar(group.id)} className="btn-primary">
                  {t.services.ctaButton}
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
