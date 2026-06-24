"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  thumbnail: string;
  media: string[];
  title: string;
};

export function ProjectGallery({ thumbnail, media, title }: Props) {
  const [active, setActive] = useState(thumbnail);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={active}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {media.length > 1 && (
        <div className="flex flex-row gap-2">
          {media.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(src)}
              aria-label={`Show image`}
              className={`relative h-[60px] w-[80px] shrink-0 overflow-hidden rounded-md ring-2 transition-colors ${
                active === src ? "ring-amber-400" : "ring-transparent hover:ring-white/30"
              }`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
