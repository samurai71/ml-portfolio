import {
  ArrowRight,
  CheckCircle2,
  Database,
  LayoutTemplate,
  Palette,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl space-y-12 px-4 py-12 sm:py-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="flex justify-center">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            Full-Stack Monorepo Starter
          </Badge>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Mark Landeryou's Portfolio
        </h1>
        <p className="text-muted-foreground text-lg">
          A modern full-stack monorepo with Next.js 15, TypeScript, Tailwind
          CSS, shadcn/ui, one-click dark/light theme toggle, and Sanity CMS
          backend.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="http://localhost:3333" target="_blank" rel="noreferrer">
            <Button className="gap-2 shadow-sm">
              Open Sanity Studio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#features">
            <Button variant="outline">Explore Setup</Button>
          </a>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section id="features" className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
              <LayoutTemplate className="h-5 w-5" />
            </div>
            <CardTitle>Next.js 15 (App Router)</CardTitle>
            <CardDescription>
              React Server Components with TypeScript, Turbopack, and automated
              metadata.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>
                Located in{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                  apps/web
                </code>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>
                Runs on{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                  http://localhost:3000
                </code>
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
              <Palette className="h-5 w-5" />
            </div>
            <CardTitle>Tailwind & shadcn/ui</CardTitle>
            <CardDescription>
              Customizable accessible components and one-click dark/light theme
              toggle.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>One-click Theme Button</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Tailwind CSS variable tokens</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
              <Database className="h-5 w-5" />
            </div>
            <CardTitle>Sanity Studio (Backend CMS)</CardTitle>
            <CardDescription>
              Real-time headless CMS with structured schemas and live preview
              capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>
                Located in{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                  apps/studio
                </code>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>
                Runs on{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                  http://localhost:3333
                </code>
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Start Guide */}
      <section className="bg-card space-y-6 rounded-xl border p-6 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Monorepo Quick Reference
        </h2>
        <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
          <div className="bg-muted/50 space-y-2 rounded-lg border p-4">
            <p className="text-foreground font-semibold">1. Development</p>
            <p className="text-muted-foreground">
              Run both frontend and studio concurrently from root:
            </p>
            <pre className="bg-background overflow-x-auto rounded border p-2.5 text-xs">
              <code>pnpm dev</code>
            </pre>
          </div>
          <div className="bg-muted/50 space-y-2 rounded-lg border p-4">
            <p className="text-foreground font-semibold">
              2. Add Sanity Credentials
            </p>
            <p className="text-muted-foreground">
              Update your Sanity Project ID in{" "}
              <code className="text-xs">apps/web/.env.local</code> and{" "}
              <code className="text-xs">apps/studio/.env</code>:
            </p>
            <pre className="bg-background overflow-x-auto rounded border p-2.5 text-xs">
              <code>NEXT_PUBLIC_SANITY_PROJECT_ID=your_id</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
