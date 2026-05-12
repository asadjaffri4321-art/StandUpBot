import { Reveal } from "./Reveal";
import { HandUnderline } from "./HandUnderline";
import { BriefMockup } from "./BriefMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line-strong)]">
      <div className="absolute inset-0 bg-grid bg-radial-fade" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24">
        <Reveal className="flex justify-center mb-8">
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--persian)] pulse-dot" />
            Built for student teams · Iterate '26
          </span>
        </Reveal>

        <Reveal variant="mask" as="h1" className="text-center font-display font-bold text-[clamp(2.75rem,8vw,7rem)] text-[var(--ink)]">
          Async standups that
        </Reveal>
        <div className="text-center mt-2">
          <h1 className="font-display font-bold text-[clamp(2.75rem,8vw,7rem)] text-[var(--ink)] inline-block relative">
            <span className="echo-text" data-text="actually think.">actually think.</span>
            <HandUnderline />
          </h1>
        </div>

        <Reveal className="mx-auto max-w-2xl text-center mt-10 text-lg text-[var(--ink-soft)] leading-relaxed">
          Each teammate answers 3 questions in 90 seconds. Our AI reads everyone's
          updates together and writes one brief that flags blockers, dependencies,
          new joiners, and missing members.
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a href="#cta" className="btn-primary">
            Start a project — it's free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#how" className="btn-ghost">See how it works</a>
        </Reveal>

        <Reveal className="mt-20 max-w-5xl mx-auto">
          <div className="float-soft">
            <BriefMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
