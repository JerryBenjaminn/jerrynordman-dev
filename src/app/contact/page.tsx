import type { Metadata } from "next";
import { socialLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Contact — Jerry Nordman",
  description: "Get in touch with Jerry Nordman.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 font-[family-name:var(--font-geist-sans)]">

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#ededed]">
        Contact
      </h1>
      <p className="mb-12 text-base text-white/50">
        Want to get in touch? Find me here.
      </p>

      <ul className="flex flex-col gap-3">
        {socialLinks.map(({ label, sublabel, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-5 rounded-xl border border-white/10 px-6 py-5 transition-all duration-150 hover:border-amber-400/40 hover:bg-white/[0.04]"
            >
              <span className="text-white/40 transition-colors group-hover:text-amber-400">
                <Icon size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-[#ededed] transition-colors group-hover:text-amber-400">
                  {label}
                </span>
                <span className="text-xs text-white/40">{sublabel}</span>
              </span>
              <span className="ml-auto text-white/20 transition-colors group-hover:text-amber-400/60">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

    </main>
  );
}
