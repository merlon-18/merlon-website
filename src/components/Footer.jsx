export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-light text-text-3">
          merlon<span className="text-accent"> studios</span> — {new Date().getFullYear()}
        </span>
        <div className="flex gap-6">
          <a
            href="mailto:leon@merlon.digital"
            className="font-mono text-[11px] text-text-3 no-underline hover:text-accent transition-colors py-2"
          >
            leon@merlon.digital
          </a>
          <span className="font-mono text-[11px] text-text-3 py-2">
            merlon.digital
          </span>
        </div>
      </div>
    </footer>
  )
}
