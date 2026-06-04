import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { HudPanel } from "@/components/ui/HudPanel";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="px-6 pb-12 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-400">
                Game Developer
              </p>
              <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-[#ededed] sm:text-6xl">
                Jerry Nordman
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/60">
                I build games with Unity and C#.
              </p>
              <a
                href="#projects"
                className="inline-block rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-[#0a0a0f] transition-all duration-150 hover:brightness-110 active:scale-95"
              >
                View my work
              </a>
            </div>
            <HudPanel />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section id="projects" className="px-6 pb-24 pt-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#ededed]">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              All projects →
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex h-48 items-center justify-center rounded-xl border border-white/10 text-white/30">
              Projects coming soon
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
