import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { TagPill } from "@/components/ui/TagPill";
import { ProjectGallery } from "@/components/ProjectGallery";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jerry Nordman`,
    description: project.shortDesc,
  };
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/[?&]v=([^&]+)/);
  return match?.[1] ?? null;
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const { title, year, role, tags, longDesc, thumbnail, media, youtubeUrl, playUrl, repoUrl, downloadUrl } = project;
  const ytId = youtubeUrl ? getYouTubeId(youtubeUrl) : null;

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-amber-400"
        >
          <span aria-hidden>←</span> All Projects
        </Link>

        {/* Two-column grid: text left, image right */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* Left: text content */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#ededed] sm:text-5xl">
                {title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50">
                <span>{year}</span>
                <span className="text-white/20">·</span>
                <span>{role}</span>
              </div>
              {tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
              )}
            </div>

            <p className="text-base leading-relaxed text-white/70">{longDesc}</p>

            {/* Action buttons */}
            {(playUrl || repoUrl || downloadUrl) && (
              <div className="flex flex-wrap gap-3">
                {playUrl && (
                  <a
                    href={playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-[#0a0a0f] transition-all duration-150 hover:brightness-110 active:scale-95"
                  >
                    Play on itch.io
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-[#ededed] ring-1 ring-white/20 transition-colors hover:ring-white/50"
                  >
                    View on GitHub
                  </a>
                )}
                {downloadUrl && (
                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-[#ededed] ring-1 ring-white/20 transition-colors hover:ring-white/50"
                  >
                    Download
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right: gallery — below text on mobile, right column on desktop */}
          {thumbnail && (
            <div className="order-first lg:order-none">
              <ProjectGallery thumbnail={thumbnail} media={media} title={title} />
            </div>
          )}
        </div>

        {/* YouTube embed — full width below the grid */}
        {ytId && (
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ytId}`}
              title={`${title} gameplay video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        )}

      </div>
    </main>
  );
}
