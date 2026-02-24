import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

function detectLanguage() {
  // 1. If user already chose, respect that
  const saved = localStorage.getItem('merlon-lang')
  if (saved === 'hu' || saved === 'en') return saved

  // 2. Check browser language
  const browserLang = navigator.language || navigator.languages?.[0] || ''
  if (browserLang.startsWith('hu')) return 'hu'

  // 3. Check timezone (Europe/Budapest = Hungary)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (tz === 'Europe/Budapest') return 'hu'
  } catch {}

  // 4. Default to English for everyone else
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)
  const t = translations[lang]

  const setLang = useCallback((l) => {
    const next = typeof l === 'function' ? l(lang) : l
    localStorage.setItem('merlon-lang', next)
    setLangState(next)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'hu' ? 'en' : 'hu'))
  }, [setLang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
