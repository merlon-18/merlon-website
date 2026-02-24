import RadarOption from './RadarOption'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Step3Maturity({ value, onChange }) {
  const { t } = useLanguage()
  const maturityOptions = t.radar.maturityOptions
  const stepTexts = t.radar.stepTexts

  return (
    <div>
      <h3
        className="font-display font-extralight tracking-[-1px] text-text mb-2"
        style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
      >
        {stepTexts[3].title}
      </h3>
      <p className="text-text-2 text-sm font-light mb-8">{stepTexts[3].description}</p>

      <div className="space-y-2.5 sm:space-y-3">
        {maturityOptions.map((opt) => (
          <RadarOption
            key={opt.id}
            label={opt.label}
            icon={opt.icon}
            selected={value === opt.id}
            onClick={() => onChange(opt.id)}
          />
        ))}
      </div>
    </div>
  )
}
