import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { TagPill } from "@/components/ui/TagPill";

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
  "Open to internship opportunities",
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  {
    label: "GitHub",
    href: "https://github.com/JerryBenjaminn",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jerry-nordman-82a801227/",
    icon: LinkedInIcon,
  },
  {
    label: "nordmanjerry@gmail.com",
    href: "mailto:nordmanjerry@gmail.com",
    icon: () => <Mail size={16} strokeWidth={1.5} aria-hidden />,
  },
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
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-amber-400"
                  >
                    <Icon />
                    {label}
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
