import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Nav({ onOpenRadar }) {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    let lastY = 0
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 80 && y > lastY)
      setScrolled(y > 20)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-350"
      style={{
        background: scrolled ? 'oklch(0.18 0.02 260 / 0.6)' : 'oklch(0.14 0.02 265 / 0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled ? 'oklch(0.22 0.02 255 / 0.5)' : 'transparent'}`,
        boxShadow: scrolled ? '0 4px 20px oklch(0 0 0 / 0.3)' : 'none',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: 64 }}>
        <a href={`/${lang}`} className="font-display text-[22px] font-light tracking-[-0.5px] text-text no-underline">
          merlon<span className="text-accent"> digital</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href={`/${lang}#services`} className="font-mono text-xs text-text-3 tracking-[0.04em] no-underline hover:text-text transition-colors">
            {t.nav.services}
          </a>
          <a href={`/${lang}#process`} className="font-mono text-xs text-text-3 tracking-[0.04em] no-underline hover:text-text transition-colors">
            {t.nav.process}
          </a>
          <LanguageToggle lang={lang} onToggle={toggleLang} />
          <button onClick={() => onOpenRadar()} className="btn-secondary !py-2 !px-5 !text-[11px]">
            project.radar
          </button>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <LanguageToggle lang={lang} onToggle={toggleLang} />
          <button
            onClick={() => onOpenRadar()}
            className="font-mono text-xs text-accent tracking-[0.04em] bg-transparent border-none cursor-pointer min-h-[44px] px-3 flex items-center"
          >
            radar →
          </button>
        </div>
      </div>
    </nav>
  )
}
