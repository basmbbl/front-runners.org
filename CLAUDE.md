# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run Next.js linting
```

## Architecture Overview

This is a **Next.js 14 App Router** website for Front Runners, a Dutch HR/employership program. It's a single-page marketing site with multilingual support (Dutch/English).

### Key Patterns

**Internationalization (i18n)**
- Server-side locale detection via `Accept-Language` header in `app/layout.tsx`
- Client-side language switching via React Context (`components/LanguageProvider.tsx`)
- Translation files in `locales/nl.json` and `locales/en.json`
- Use the `useLanguage()` hook in components to access `t` (translations) and `setLocale`
- User preference persisted to localStorage

**Component Structure**
- All page sections are in `components/` (Header, Hero, WhySection, ProgramSection, CTASection, Footer)
- Main page (`app/page.tsx`) is a client component managing modal state
- Brochure request modal state is lifted to page level and passed down via props

**API Routes**
- `app/api/brochure/route.ts` - POST endpoint that sends form submissions to Discord webhook
- Discord webhook URL configurable via `DISCORD_WEBHOOK_URL` environment variable

**Styling & Design System**
- Tailwind CSS with custom color palette defined in `tailwind.config.js`
- **Primary color**: `#0b2c75` (deep navy blue) - used for headings, buttons, footer
- **Secondary color**: `#22b3c3` (teal/cyan) - used for accents, badges, gradient text
- **Typography**: DM Sans for body text, Outfit for headings, JetBrains Mono for monospace
- **Key utility classes**:
  - `.btn-primary` - Primary filled button with shadow
  - `.btn-secondary` - Outline button with primary border
  - `.card` - Rounded card with border and hover effects
  - `.gradient-text` - Gradient from secondary to primary
- Framer Motion for animations

**Design Patterns from Reference**
- Sticky nav with backdrop blur: `bg-background/80 backdrop-blur-md`
- Hero badge with pulse animation: `bg-secondary/10 border-secondary/20`
- Gradient headline: `bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent`
- Cards: `rounded-xl border-border/60 hover:border-secondary/50`
- Step numbers: `bg-secondary/10 text-secondary font-mono`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DISCORD_WEBHOOK_URL` | Discord webhook for brochure form submissions |
