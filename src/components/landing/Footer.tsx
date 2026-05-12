export function Footer() {
  return (
    <footer className="bg-[var(--ghost)]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--ink-soft)]">
        <div className="flex items-center gap-2 font-display text-base text-[var(--ink)]">
          <span className="inline-block w-2.5 h-2.5 bg-[var(--persian)] rotate-45" />
          StandupBot
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          Built for Iterate '26 · © {new Date().getFullYear()}
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[var(--ink)]">Twitter</a>
          <a href="#" className="hover:text-[var(--ink)]">GitHub</a>
          <a href="#" className="hover:text-[var(--ink)]">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
