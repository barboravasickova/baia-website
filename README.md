# baia-website

Next.js portfolio web with a split landing page and two main sections.

## Active routes

- `/` - main split landing (signpost)
- `/product-design` - UX/Product Design portfolio
- `/product-design/projects/[id]` - project detail
- `/illustration` - BAIA illustration and shop landing

## Project structure

- `app/` - routes and page-level layout/styles
- `components/` - reusable UI sections
- `data/projects.ts` - editable site content (texts + project data)
- `images/` - imported image assets used via `next/image`
- `public/` - static public assets served by URL

## Content editing

- Portfolio and project texts: `data/projects.ts`
- Product design page composition: `app/product-design/page.tsx`
- Illustration page composition: `app/illustration/page.tsx`

## Run locally

```bash
npm install
npm run dev
```