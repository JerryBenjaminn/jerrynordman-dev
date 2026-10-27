import type { Metadata } from "next";
import { TagPill } from "@/components/ui/TagPill";
import { socialLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "About — Jerry Nordman",
  description: "IT engineering student at Metropolia UAS, specializing in game development.",
};

const skills = [
  "Unity", "C#", "C++", "Git", "Next.js", "TypeScript",
];

const currently = [
  "Studying game development at Metropolia UAS",
  "Building my portfolio",
  "QA/Game Design intern at JetDogs Studios",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 font-[family-name:var(--font-geist-sans)]">

      <h1 className="mb-10 text-4xl font-bold tracking-tight text-[#ededed]">
        About
      </h1>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

        {/* Left column: bio + contact */}
        <div className="flex flex-col gap-10">
          <p className="text-base leading-relaxed text-white/70">
            IT engineering student at Metropolia UAS, specializing in game development.
            I build games with Unity and C#, with a focus on system architecture and
            game design. Actively exploring AI-assisted development workflows as part
            of my practice.
          </p>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#ededed]">Contact</h2>
            <ul className="flex flex-col gap-4">
              {socialLinks.map(({ label, sublabel, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-amber-400"
                  >
                    <Icon size={16} strokeWidth={1.5} aria-hidden />
                    {external ? label : sublabel}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column: skills + currently */}
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#ededed]">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TagPill key={skill} label={skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#ededed]">Currently</h2>
            <ul className="flex flex-col gap-3">
              {currently.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

      </div>
    </main>
  );
}
