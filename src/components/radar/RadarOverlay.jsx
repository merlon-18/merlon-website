import { useReducer, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RadarStep from './RadarStep'
import Step1Category from './Step1Category'
import Step2Details from './Step2Details'
import Step3Maturity from './Step3Maturity'
import Step4Timeline from './Step4Timeline'
import Step5Results from './Step5Results'
import { useLanguage } from '../../i18n/LanguageContext'

const initialState = {
  step: 1,
  direction: 1,
  answers: {
    categories: [],
    details: [],
    maturity: null,
    size: null,
    deadline: null,
  },
  preSelectedCategory: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.field]: action.value },
      }
    case 'NEXT':
      return { ...state, step: Math.min(state.step + 1, 5), direction: 1 }
    case 'PREV':
      return { ...state, step: Math.max(state.step - 1, 1), direction: -1 }
    case 'INIT':
      return {
        ...initialState,
        answers: {
          ...initialState.answers,
          categories: action.category ? [action.category] : [],
        },
        preSelectedCategory: action.category || null,
      }
    default:
      return state
  }
}

export default function RadarOverlay({ isOpen, onClose, preSelectedCategory }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      dispatch({ type: 'INIT', category: preSelectedCategory })
      document.body.classList.add('overlay-open')
    } else {
      document.body.classList.remove('overlay-open')
    }
    return () => document.body.classList.remove('overlay-open')
  }, [isOpen, preSelectedCategory])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const canProceed = useCallback(() => {
    switch (state.step) {
      case 1: return state.answers.categories.length > 0
      case 2: return state.answers.details.length > 0 || state.answers.categories.includes('unknown')
      case 3: return !!state.answers.maturity
      case 4: return !!state.answers.size && !!state.answers.deadline
      default: return true
    }
  }, [state.step, state.answers])

  const { step, direction, answers } = state

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex flex-col"
          style={{ zIndex: 1100 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-bg/95"
            style={{ backdropFilter: 'blur(24px)' }}
            onClick={onClose}
          />

          {/* Content — responsive width + padding */}
          <div className="relative flex flex-col h-full max-w-xl mx-auto w-full px-4 sm:px-6">
            {/* Top bar */}
            <div className="flex items-center justify-between py-3 sm:py-4 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 64 64" className="sm:w-6 sm:h-6">
                  <path
                    d="M 14 48 L 14 16 L 26 16 L 26 32 L 38 32 L 38 16 L 50 16 L 50 48"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-mono text-[10px] sm:text-xs text-text-2 tracking-[0.04em]">
                  project.radar
                </span>
              </div>

              {/* Progress dots */}
              <div className="flex gap-1.5 sm:gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 ${
                      n === step ? 'bg-accent' : n < step ? 'bg-accent/40' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-text-3 hover:text-text transition-colors bg-transparent border-none cursor-pointer"
                aria-label={t.radar.close}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Step content — extra horizontal padding so hover scale doesn't clip */}
            <div className="flex-1 overflow-y-auto overflow-x-visible py-4 sm:py-6 -mx-1 px-1">
              <AnimatePresence mode="wait" custom={direction}>
                {step === 1 && (
                  <RadarStep direction={direction} stepKey="step1">
                    <Step1Category
                      values={answers.categories}
                      onChange={(v) => dispatch({ type: 'SET_ANSWER', field: 'categories', value: v })}
                      preSelectedCategory={state.preSelectedCategory}
                    />
                  </RadarStep>
                )}
                {step === 2 && (
                  <RadarStep direction={direction} stepKey="step2">
                    <Step2Details
                      categories={answers.categories}
                      values={answers.details}
                      onChange={(v) => dispatch({ type: 'SET_ANSWER', field: 'details', value: v })}
                    />
                  </RadarStep>
                )}
                {step === 3 && (
                  <RadarStep direction={direction} stepKey="step3">
                    <Step3Maturity
                      value={answers.maturity}
                      onChange={(v) => dispatch({ type: 'SET_ANSWER', field: 'maturity', value: v })}
                    />
                  </RadarStep>
                )}
                {step === 4 && (
                  <RadarStep direction={direction} stepKey="step4">
                    <Step4Timeline
                      size={answers.size}
                      deadline={answers.deadline}
                      onChangeSize={(v) => dispatch({ type: 'SET_ANSWER', field: 'size', value: v })}
                      onChangeDeadline={(v) => dispatch({ type: 'SET_ANSWER', field: 'deadline', value: v })}
                    />
                  </RadarStep>
                )}
                {step === 5 && (
                  <RadarStep direction={direction} stepKey="step5">
                    <Step5Results answers={answers} onClose={onClose} />
                  </RadarStep>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom bar — responsive */}
            {step < 5 && (
              <div className="flex items-center justify-between py-3 sm:py-4 border-t border-border shrink-0 gap-2">
                <button
                  onClick={() => dispatch({ type: 'PREV' })}
                  className={`btn-secondary !py-2 !px-3 sm:!px-5 !text-[11px] sm:!text-[12px] ${step === 1 ? 'invisible' : ''}`}
                >
                  {t.radar.back}
                </button>

                <span className="font-mono text-[10px] sm:text-xs text-text-3">
                  {step} / 5
                </span>

                <button
                  onClick={() => dispatch({ type: 'NEXT' })}
                  className="btn-primary !py-2 !px-4 sm:!px-6 !text-[12px] sm:!text-[13px]"
                  disabled={!canProceed()}
                >
                  {t.radar.next}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
