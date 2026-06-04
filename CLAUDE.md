# jerrybenjamin.dev — Game Developer Portfolio

## Project overview
Personal portfolio site for Jerry Benjamin, IT engineering student (game development) at Metropolia UAS.
Goal: land a game industry internship. Visitors are recruiters and industry contacts — first impression matters.

## Tech stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)

## Visual style
- Dark mode only — deep dark background (#0a0a0f or similar near-black)
- Accent color: Amber Gold `#f59e0b` — used for buttons, links, hover states, highlights, and tag pills
- Typography: clean, slightly techy — e.g. Inter or Geist for body, optional display font for headings
- Subtle animations allowed (Framer Motion or CSS), but keep them fast (<300ms) and purposeful
- No clutter — minimalist layout, generous whitespace

## Site structure
- `/` — Hero + featured projects preview + CTA
- `/projects` — All projects grid
- `/projects/[slug]` — Single project page
- `/about` — Bio, skills, background
- (optional) `/contact` — Links only, no form needed

## Project data system
All projects are defined in `/src/data/projects.ts` as a typed array.
Adding a new project = adding one object to this array. No other files should need editing.

Each project object shape:
```ts
{
  slug: string           // URL-safe identifier e.g. "arena-tactics"
  title: string
  year: number
  tags: string[]         // e.g. ["Unity", "C#", "Multiplayer"]
  role: string           // e.g. "Solo developer" or "Programmer"
  shortDesc: string      // 1-2 sentences, shown on card
  longDesc: string       // Full description for project page
  thumbnail: string      // Path to image in /public/projects/
  media: string[]        // Additional screenshots/GIFs
  playUrl?: string       // itch.io embed or external URL
  downloadUrl?: string   // Direct download if no web build
  repoUrl?: string       // GitHub link if public
  featured: boolean      // Show on landing page
}
```

## Code style
- Use named exports for components
- One component per file
- Tailwind only for styling — no CSS modules, no inline styles
- No `any` types
- Keep components small — split if over ~100 lines

## Workflow rules
- Plan mode first for any multi-file change
- Build and typecheck after each feature: `npm run build`
- Commit after each completed component or page
- Do not read files outside `/src` and `/public` unless explicitly asked

## Out of scope (do not implement)
- CMS or database — static data only
- Authentication
- Blog
- Contact form with backend
