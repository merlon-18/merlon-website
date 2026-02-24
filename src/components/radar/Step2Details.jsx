import RadarOption from './RadarOption'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Step2Details({ categories, values, onChange }) {
  const { t } = useLanguage()
  const detailOptions = t.radar.detailOptions
  const stepTexts = t.radar.stepTexts

  // Merge detail options from all selected categories
  const options = categories.flatMap((cat) => detailOptions[cat] || [])
  // Deduplicate by id
  const uniqueOptions = options.filter((opt, i, arr) => arr.findIndex((o) => o.id === opt.id) === i)
  const hasUnknown = categories.includes('unknown')

  const toggle = (id) => {
    if (values.includes(id)) {
      onChange(values.filter((v) => v !== id))
    } else {
      onChange([...values, id])
    }
  }

  return (
    <div>
      <h3
        className="font-display font-extralight tracking-[-1px] text-text mb-2"
        style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
      >
        {stepTexts[2].title}
      </h3>
      <p className="text-text-2 text-sm font-light mb-8">{stepTexts[2].description}</p>

      {hasUnknown ? (
        <div>
          <textarea
            className="input min-h-[120px] resize-y"
            placeholder={t.radar.freeformPlaceholder}
            value={values[0] || ''}
            onChange={(e) => onChange([e.target.value])}
          />
        </div>
      ) : (
        <div className="space-y-2">
          {uniqueOptions.map((opt) => (
            <RadarOption
              key={opt.id}
              label={opt.label}
              selected={values.includes(opt.id)}
              onClick={() => toggle(opt.id)}
              multi
            />
          ))}
        </div>
      )}
    </div>
  )
}
