import { Gamepad2 } from "lucide-react";
import { itchUrl } from "@/data/links";

export function ItchBanner() {
  return (
    <a
      href={itchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-10 flex items-center gap-5 rounded-xl border border-white/10 px-6 py-5 transition-all duration-150 hover:border-amber-400/40 hover:bg-white/[0.04]"
    >
      <span className="text-white/40 transition-colors group-hover:text-amber-400">
        <Gamepad2 size={24} strokeWidth={1.5} aria-hidden />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-[#ededed] transition-colors group-hover:text-amber-400">
          More games on itch.io
        </span>
        <span className="text-xs text-white/40">
          Game jams, prototypes and smaller projects
        </span>
      </span>
      <span className="ml-auto text-white/20 transition-colors group-hover:text-amber-400/60">
        →
      </span>
    </a>
  );
}
