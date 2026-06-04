import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { TagPill } from "./TagPill";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const { slug, title, year, tags, shortDesc, thumbnail } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/[0.07] hover:ring-amber-400/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-white/20">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight text-[#ededed]">{title}</h3>
          <span className="mt-0.5 shrink-0 text-xs text-white/40">{year}</span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-white/60">{shortDesc}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
