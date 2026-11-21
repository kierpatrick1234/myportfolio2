# Portfolio

Minimal resume portfolio built with Next.js (App Router) + TypeScript. No UI framework — just one hand-written stylesheet.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Edit your content

Everything lives in **`content/resume.ts`** — name, headline, stats, projects, experience, skills, education, links.
Search for `TODO` to find the placeholders to replace.

## Features

- Fixed sidebar nav with active-section highlight (becomes a slide-out drawer on mobile)
- Hero with halftone photo, inline icon chips in the bio, badges and stats
- Interactive fanned project deck — click a side card or use ← →
- Experience rows, stack chips, certification + recommendation cards
- Live GitHub contribution graph (set `github` in `content/resume.ts`)
- ⌘K / Ctrl+K quick-jump command menu
- System / light / dark theme toggle (remembered, no flash)
- Respects reduced-motion; keyboard accessible

## Your photo

Drop a square photo at `public/me.jpg` and set `photo: "/me.jpg"` in `content/resume.ts`.
It's automatically shown in grayscale with a halftone screen.

## Deploy

Push to GitHub and import the repo on [vercel.com](https://vercel.com) — zero config.
