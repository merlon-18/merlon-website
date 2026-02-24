import RadarOption from './RadarOption'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Step4Timeline({ size, deadline, onChangeSize, onChangeDeadline }) {
  const { t } = useLanguage()
  const sizeOptions = t.radar.sizeOptions
  const deadlineOptions = t.radar.deadlineOptions
  const stepTexts = t.radar.stepTexts

  return (
    <div>
      <h3
        className="font-display font-extralight tracking-[-1px] text-text mb-2"
        style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
      >
        {stepTexts[4].title}
      </h3>
      <p className="text-text-2 text-sm font-light mb-8">{stepTexts[4].description}</p>

      <div className="space-y-8">
        <div>
          <p className="font-mono text-xs text-text-3 uppercase tracking-[0.06em] mb-3">
            {t.radar.projectSizeLabel}
          </p>
          <div className="space-y-2.5 sm:space-y-3">
            {sizeOptions.map((opt) => (
              <RadarOption
                key={opt.id}
                label={opt.label}
                selected={size === opt.id}
                onClick={() => onChangeSize(opt.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-text-3 uppercase tracking-[0.06em] mb-3">
            {t.radar.deadlineLabel}
          </p>
          <div className="space-y-2.5 sm:space-y-3">
            {deadlineOptions.map((opt) => (
              <RadarOption
                key={opt.id}
                label={opt.label}
                selected={deadline === opt.id}
                onClick={() => onChangeDeadline(opt.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
