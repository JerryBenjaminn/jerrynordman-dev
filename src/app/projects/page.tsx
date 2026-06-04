import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Jerry Nordman",
  description: "Games and projects built by Jerry Nordman.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-[#ededed]">
        Projects
      </h1>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center rounded-xl border border-white/10 text-white/30">
          No projects yet
        </div>
      )}
    </main>
  );
}
