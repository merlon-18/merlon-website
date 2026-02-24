import RadarOption from './RadarOption'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Step1Category({ values, onChange, preSelectedCategory }) {
  const { t } = useLanguage()
  const categories = t.radar.categories
  const stepTexts = t.radar.stepTexts

  const toggle = (id) => {
    if (values.includes(id)) {
      onChange(values.filter((v) => v !== id))
    } else {
      // If selecting 'unknown', clear others. If selecting specific, remove 'unknown'
      if (id === 'unknown') {
        onChange([id])
      } else {
        onChange([...values.filter((v) => v !== 'unknown'), id])
      }
    }
  }

  return (
    <div>
      <h3
        className="font-display font-extralight tracking-[-1px] text-text mb-2"
        style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
      >
        {stepTexts[1].title}
      </h3>
      <p className="text-text-2 text-sm font-light mb-8">{stepTexts[1].description}</p>

      {preSelectedCategory && values.length > 0 && (
        <p className="text-accent text-sm font-mono mb-4">
          {t.radar.preSelectedHint}
        </p>
      )}

      <div className="space-y-3">
        {categories.map((cat) => (
          <RadarOption
            key={cat.id}
            label={cat.label}
            icon={cat.icon}
            description={cat.description}
            selected={values.includes(cat.id)}
            onClick={() => toggle(cat.id)}
            multi
          />
        ))}
      </div>
    </div>
  )
}
