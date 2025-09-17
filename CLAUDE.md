# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production  
- `pnpm start` - Start the production server

### Package Management
- Uses `pnpm` as the package manager (not npm or yarn)
- `pnpm-lock.yaml` is the lockfile

## Architecture

This is a **Next.js 13+ App Router** portfolio/blog template with the following key architecture:

### Framework & Styling
- **Next.js** (canary version) with App Router
- **Tailwind CSS v4** (alpha) with PostCSS plugin
- **TypeScript** (strict mode disabled but strictNullChecks enabled)
- **Geist** font family (Sans & Mono variants)

### Blog System
- **MDX/Markdown** blog posts stored in `app/blog/posts/`
- Blog posts use **frontmatter** with fields: `title`, `publishedAt`, `summary`, `image`
- Custom MDX components for enhanced rendering (links, images, code highlighting)
- **Static generation** for all blog routes
- **Syntax highlighting** via `sugar-high` library

### SEO & Analytics
- **Dynamic OG image** generation at `/og` route
- **RSS feed** at `/rss` route  
- **Sitemap** generation
- **JSON-LD schema** for blog posts
- **Vercel Analytics** and **Speed Insights** integrated

### File Structure
```
app/
├── blog/
│   ├── [slug]/page.tsx    # Dynamic blog post pages
│   ├── posts/             # MDX blog post files
│   ├── page.tsx           # Blog listing page
│   └── utils.ts           # Blog utilities (parsing, date formatting)
├── components/
│   ├── footer.tsx
│   ├── mdx.tsx           # Custom MDX components
│   ├── nav.tsx
│   └── posts.tsx         # Blog post listing component
├── og/route.tsx          # OG image generation
├── rss/route.ts          # RSS feed generation
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Homepage
└── sitemap.ts            # Sitemap generation
```

### Key Utilities
- `getBlogPosts()` - Reads and parses all MDX files from posts directory
- `formatDate()` - Formats dates with optional relative time display
- `parseFrontmatter()` - Extracts metadata from MDX frontmatter
- Custom MDX components for enhanced rendering (auto-linking headings, syntax highlighting)

### Deployment
- Optimized for **Vercel** deployment
- Uses Next.js static generation for optimal performance
- All blog posts are statically generated at build time