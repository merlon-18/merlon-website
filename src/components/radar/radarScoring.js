export function scoreServices(answers, t) {
  const { categories = [], details = [], maturity, size, deadline } = answers
  const services = t.radar.services

  return services
    .map((service) => {
      let score = 0
      let reasons = []

      // Category match: +40
      if (categories.includes(service.category) || categories.includes('unknown')) {
        score += categories.includes('unknown') ? 20 : 40
      }

      // Detail/need match: +20 per match
      const detailMatches = details.filter((d) => service.tags.includes(d))
      score += detailMatches.length * 20
      if (detailMatches.length > 0) {
        reasons.push(t.radar.reasonFitsNeeds)
      }

      // Maturity fit: +10
      if (maturity && service.maturityFit.includes(maturity)) {
        score += 10
        reasons.push(t.radar.reasonFitsSituation)
      }

      // Urgency + fast service bonus: +15
      if (
        (deadline === 'asap' || maturity === 'urgent') &&
        service.deliveryDays <= 3
      ) {
        score += 15
        reasons.push(t.radar.reasonFastDelivery)
      }

      // Size/complexity match bonus
      if (size === 'simple' && service.deliveryDays <= 3) score += 5
      if (size === 'moderate' && service.deliveryDays <= 7) score += 5
      if (size === 'complex' && service.deliveryDays > 5) score += 5

      // Get recommendation text
      const whyText =
        service.whyRecommend[maturity] || service.whyRecommend.default

      return {
        ...service,
        score,
        reasons,
        whyText,
        isStrongMatch: score >= 60,
      }
    })
    .filter((s) => s.score > 30)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
}
