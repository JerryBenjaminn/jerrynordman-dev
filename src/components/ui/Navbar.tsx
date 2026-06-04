import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#ededed] transition-colors hover:text-white"
        >
          Jerry Nordman
        </Link>
        <ul className="flex items-center gap-7">
          <li>
            <Link
              href="/projects"
              className="text-sm text-white/55 transition-colors hover:text-amber-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm text-white/55 transition-colors hover:text-amber-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm text-white/55 transition-colors hover:text-amber-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
