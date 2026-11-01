"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  title: string;
  poster: string;
  sizeMb?: number;
};

// Loads the web build only when the visitor asks for it, so the project page stays light.
export function GameEmbed({ src, title, poster, sizeMb }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="play" className="mt-10 scroll-mt-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
        {playing ? (
          <iframe
            src={src}
            title={`${title} — play in browser`}
            allow="fullscreen; autoplay"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${title} in the browser`}
          >
            <Image src={poster} alt="" fill className="object-cover opacity-50 transition-opacity duration-200 group-hover:opacity-60" sizes="(max-width: 1024px) 100vw, 896px" />
            <span className="relative flex flex-col items-center gap-2">
              <span className="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-[#0a0a0f] transition-all duration-150 group-hover:brightness-110 group-active:scale-95">
                Play in browser
              </span>
              {sizeMb && <span className="text-xs text-white/60">{sizeMb} MB download</span>}
            </span>
          </button>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-white/40">
        <span>Best on a desktop or tablet. On a phone, turn it sideways.</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-400">
          Open in a new tab ↗
        </a>
      </div>
    </section>
  );
}
