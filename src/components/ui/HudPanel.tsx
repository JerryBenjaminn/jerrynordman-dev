import { projects } from "@/data/projects";

export function HudPanel() {
  const count = projects.length;
  const latest = count > 0 ? projects[count - 1].title : "—";

  return (
    <div className="lg:flex lg:justify-end">
      <div className="relative w-full max-w-xs">
        {/* Animated corner brackets */}
        <span className="animate-hud-corner pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-amber-400" />
        <span className="animate-hud-corner [animation-delay:750ms] pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-amber-400" />
        <span className="animate-hud-corner [animation-delay:1500ms] pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-amber-400" />
        <span className="animate-hud-corner [animation-delay:2250ms] pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-amber-400" />

        {/* Panel body */}
        <div className="relative overflow-hidden border border-amber-400/20 bg-[#06060c] px-6 py-5 font-[family-name:var(--font-space-grotesk)]">
          {/* Scan line */}
          <div className="animate-hud-scan pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          {/* Header */}
          <div className="mb-4 flex items-center gap-2">
            <span className="animate-hud-blink h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] tracking-[0.25em] text-amber-400">
              SYSTEM STATUS
            </span>
          </div>

          <div className="mb-4 h-px bg-amber-400/20" />

          {/* Stat rows */}
          <div className="space-y-3">
            <HudRow label="PROJECTS" value={String(count).padStart(2, "0")} />
            <HudRow label="LATEST" value={latest} />
            <HudRow label="TOOLS" value="Unity · C# · C++ · Git" />
            <div className="h-px bg-white/5" />
            <div className="flex items-center justify-between gap-3">
              <span className="shrink-0 text-[10px] tracking-[0.2em] text-amber-400/60">
                STATUS
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="animate-hud-blink [animation-delay:500ms] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                Open to internship
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HudRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-[10px] tracking-[0.2em] text-amber-400/60">
        {label}
      </span>
      <span className="text-right text-[11px] leading-relaxed text-[#ededed]">
        {value}
      </span>
    </div>
  );
}
