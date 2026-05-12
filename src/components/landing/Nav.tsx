export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-strong)] bg-[color-mix(in_oklab,var(--ghost)_85%,transparent)] backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="inline-block w-2.5 h-2.5 bg-[var(--persian)] rotate-45" />
          <span className="font-bold">StandupBot</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--ink-soft)]">
          <a href="#how" className="hover:text-[var(--ink)]">How it works</a>
          <a href="#features" className="hover:text-[var(--ink)]">Features</a>
          <a href="#problem" className="hover:text-[var(--ink)]">Why us</a>
          <a href="#cta" className="hover:text-[var(--ink)]">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-sm font-medium text-[var(--ink)] hover:underline">Log in</a>
          <a href="#cta" className="btn-primary text-sm !py-2 !px-4 rounded-full">
            Start free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
