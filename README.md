# baia-website

Next.js web pro značku BAIA (ilustrace) a UX portfolio pod `/product-design`.

## Active routes

- `/` - ilustrace (homepage)
- `/o-mne`, `/kontakt`, `/[id]` - ilustrace (podstránky a detail)
- `/product-design` - UX/Product Design portfolio
- `/product-design/projects/[id]` - project detail

Staré URL `/illustration/*` přesměrovávají na kořenové cesty (301).

## Project structure

- `app/` - routes and page-level layout/styles
- `components/` - reusable UI sections
- `data/projects.ts` - product design content
- `data/illustrations.ts` - ilustrace v galerii
- `images/` - imported image assets used via `next/image`
- `public/` - static public assets served by URL

## Run locally

```bash
npm install
npm run dev
```
