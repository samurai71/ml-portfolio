# Next.js + Sanity Monorepo

Full-stack monorepo built with **pnpm workspaces**, **Turborepo**, **Next.js 15**, **Tailwind CSS**, **shadcn/ui**, **next-themes**, and **Sanity Studio v3**.

## Monorepo Structure

```
.
├── apps/
│   ├── studio/                  # Sanity Studio (Backend CMS) - Port 3333
│   │   ├── schemaTypes/         # Document and Object Schemas
│   │   │   ├── index.ts
│   │   │   ├── author.ts
│   │   │   └── post.ts
│   │   ├── sanity.config.ts
│   │   ├── sanity.cli.ts
│   │   └── package.json
│   └── web/                     # Next.js App Router (Frontend) - Port 3000
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx   # Root layout with ThemeProvider & ModeToggle
│       │   │   ├── page.tsx     # Landing page
│       │   │   └── globals.css  # Tailwind + shadcn CSS variables
│       │   ├── components/
│       │   │   ├── ui/          # shadcn components (Button, Card, Badge)
│       │   │   ├── theme-provider.tsx
│       │   │   └── mode-toggle.tsx  # Direct button mode toggle
│       │   └── sanity/          # Sanity client & GROQ queries
│       │       ├── client.ts
│       │       ├── image.ts
│       │       └── queries.ts
│       ├── components.json
│       ├── tailwind.config.ts
│       └── package.json
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Connect Your Sanity Project
Create or retrieve your Sanity project ID at [sanity.io/manage](https://www.sanity.io/manage), then update:
- `apps/web/.env.local`:
  ```env
  NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
  NEXT_PUBLIC_SANITY_DATASET=production
  NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
  ```
- `apps/studio/.env`:
  ```env
  SANITY_STUDIO_PROJECT_ID=your_actual_project_id
  SANITY_STUDIO_DATASET=production
  ```

### 3. Run Development Servers
From the root directory:
```bash
pnpm dev
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio CMS**: [http://localhost:3333](http://localhost:3333)

### 4. Build for Production
```bash
pnpm build
```

## Features Included
- 🌗 **One-Click Theme Toggle**: Direct button switching between light and dark mode using `next-themes` and Lucide icons.
- 🎨 **Tailwind CSS & shadcn/ui**: Fully customizable CSS variable tokens with accessible components (`Button`, `Card`, `Badge`).
- ⚡ **Turborepo Caching**: Fast parallel builds and hot reloading across apps.
- 📝 **Sanity Studio v3**: Pre-configured with `Post` and `Author` content models and GROQ query helpers.
