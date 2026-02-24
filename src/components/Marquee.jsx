const techs = [
  'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'n8n',
  'Python', 'PostgreSQL', 'Vercel', 'Payload CMS', 'Google Workspace',
  'OpenAI', 'Stripe', 'Figma', 'Docker', 'Cloudflare',
]

function TechList() {
  return techs.map((t, i) => (
    <span key={i} className="flex items-center gap-5 shrink-0">
      <span className="font-mono text-sm text-text-3 tracking-[0.04em] uppercase transition-colors duration-300 hover:text-accent cursor-default">
        {t}
      </span>
      <span className="text-accent/40 text-[8px]">●</span>
    </span>
  ))
}

export default function Marquee() {
  return (
    <section className="py-14 border-t border-border overflow-hidden group">
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="animate-marquee flex gap-5 whitespace-nowrap group-hover:[animation-play-state:paused]">
          <TechList />
          <TechList />
        </div>
      </div>
    </section>
  )
}
