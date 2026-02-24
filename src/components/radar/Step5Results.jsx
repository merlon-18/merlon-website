import { useState } from 'react'
import { motion } from 'framer-motion'
import { scoreServices } from './radarScoring'
import { useLanguage } from '../../i18n/LanguageContext'

function ResultCard({ service, index, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-card border border-border rounded-xl p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
        <h4 className="font-display text-sm sm:text-base font-normal text-text">{service.name}</h4>
        <span className="font-mono text-[10px] sm:text-[11px] text-accent bg-accent/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shrink-0">
          ~{service.deliveryDays} {t.radar.dayUnit}
        </span>
      </div>
      <p className="text-text-2 text-xs sm:text-sm font-light leading-relaxed mb-2 sm:mb-3">
        {service.whyText}
      </p>
      {service.isStrongMatch && (
        <span className="font-mono text-[10px] text-accent tracking-[0.04em] uppercase">
          {t.radar.strongMatch}
        </span>
      )}
    </motion.div>
  )
}

export default function Step5Results({ answers, onClose }) {
  const { lang, t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const stepTexts = t.radar.stepTexts
  const results = scoreServices(answers, t)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    setIsSubmitting(true)

    const payload = {
      contact: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      answers: {
        categories: answers.categories || [],
        details: answers.details || [],
        maturity: answers.maturity || null,
        size: answers.size || null,
        deadline: answers.deadline || null,
      },
      recommendations: results.map((r) => ({
        id: r.id,
        name: r.name,
        score: r.score,
        isStrongMatch: r.isStrongMatch,
        deliveryDays: r.deliveryDays,
      })),
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'project-radar',
        language: lang,
      },
    }

    try {
      await fetch('https://n8n.capmarketing.hu/webhook/merlon-offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.error('Radar webhook error:', err)
    } finally {
      setSubmitted(true)
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-8 sm:py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          className="mx-auto mb-5 sm:mb-6 sm:w-16 sm:h-16"
        >
          <motion.path
            d="M 14 48 L 14 16 L 26 16 L 26 32 L 38 32 L 38 16 L 50 16 L 50 48"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.svg>

        <h3
          className="font-display font-extralight tracking-[-1px] text-text mb-3"
          style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
        >
          {t.radar.thankYou}
        </h3>
        <p className="text-text-2 font-light mb-6 sm:mb-8 text-sm sm:text-base">
          {t.radar.thankYouMessage}
        </p>
        <button onClick={onClose} className="btn-secondary">
          {t.radar.close}
        </button>
      </motion.div>
    )
  }

  return (
    <div>
      <h3
        className="font-display font-extralight tracking-[-1px] text-text mb-2"
        style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
      >
        {stepTexts[5].title}
      </h3>
      <p className="text-text-2 text-xs sm:text-sm font-light mb-6 sm:mb-8">{stepTexts[5].description}</p>

      {/* Result cards */}
      <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
        {results.length > 0 ? (
          results.map((service, i) => (
            <ResultCard key={service.id} service={service} index={i} t={t} />
          ))
        ) : (
          <div className="bg-card border border-border rounded-xl p-4 sm:p-5 text-center">
            <p className="text-text-2 text-sm font-light">
              {t.radar.noResults}
            </p>
          </div>
        )}
      </div>

      {/* Contact form */}
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="font-mono text-[10px] sm:text-xs text-text-3 uppercase tracking-[0.06em] mb-3 sm:mb-4">
          {t.radar.sendMessage}
        </p>
        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <input
              type="text"
              className="input !text-sm !py-2.5 sm:!py-3"
              placeholder={t.radar.formName}
              required
              value={formData.name}
              onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
            />
            <input
              type="email"
              className="input !text-sm !py-2.5 sm:!py-3"
              placeholder={t.radar.formEmail}
              required
              value={formData.email}
              onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
            />
          </div>
          <input
            type="tel"
            className="input !text-sm !py-2.5 sm:!py-3"
            placeholder={t.radar.formPhone}
            value={formData.phone}
            onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
          />
          <textarea
            className="input !text-sm min-h-[70px] sm:min-h-[80px] resize-y"
            placeholder={t.radar.formMessage}
            value={formData.message}
            onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          />
          <button
            type="submit"
            className="btn-primary w-full !text-sm"
            disabled={isSubmitting || !formData.name || !formData.email}
          >
            {isSubmitting ? t.radar.formSubmitting : t.radar.formSubmit}
          </button>
        </form>
      </div>
    </div>
  )
}
