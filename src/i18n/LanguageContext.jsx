import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

function getLangFromURL() {
  const match = window.location.pathname.match(/^\/(hu|en)/)
  return match ? match[1] : null
}

function detectPreference() {
  const browserLang = navigator.language || navigator.languages?.[0] || ''
  if (browserLang.startsWith('hu')) return 'hu'

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (tz === 'Europe/Budapest') return 'hu'
  } catch {}

  return 'en'
}

function initLanguage() {
  const urlLang = getLangFromURL()
  if (urlLang) return urlLang

  // Root "/" — detect preference and silently redirect
  const preferred = detectPreference()
  const hash = window.location.hash
  window.history.replaceState(null, '', `/${preferred}${hash}`)
  return preferred
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initLanguage)
  const t = translations[lang]

  // Sync <html lang> attribute
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Handle browser back/forward
  useEffect(() => {
    const onPopState = () => {
      const urlLang = getLangFromURL()
      if (urlLang && urlLang !== lang) {
        setLangState(urlLang)
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [lang])

  const setLang = useCallback((l) => {
    const next = typeof l === 'function' ? l(lang) : l
    const hash = window.location.hash
    window.history.pushState(null, '', `/${next}${hash}`)
    document.documentElement.lang = next
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
