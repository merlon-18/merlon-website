// Radar data is now sourced from translations via useLanguage().
// This file provides helper functions that accept the translation object `t`.

export function getCategories(t) {
  return t.radar.categories
}

export function getDetailOptions(t) {
  return t.radar.detailOptions
}

export function getMaturityOptions(t) {
  return t.radar.maturityOptions
}

export function getSizeOptions(t) {
  return t.radar.sizeOptions
}

export function getDeadlineOptions(t) {
  return t.radar.deadlineOptions
}

export function getServices(t) {
  return t.radar.services
}

export function getStepTexts(t) {
  return t.radar.stepTexts
}
