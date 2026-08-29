import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Database, LayoutTemplate, Palette, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 sm:py-16 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-center">
          <Badge variant="secondary" className="gap-1.5 py-1 px-3 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Full-Stack Monorepo Starter
          </Badge>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Next.js + Sanity Studio
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern full-stack monorepo with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, one-click dark/light theme toggle, and Sanity CMS backend.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="http://localhost:3333" target="_blank" rel="noreferrer">
            <Button className="gap-2 shadow-sm">
              Open Sanity Studio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="#features">
            <Button variant="outline">Explore Setup</Button>
          </a>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <CardTitle>Next.js 15 (App Router)</CardTitle>
            <CardDescription>
              React Server Components with TypeScript, Turbopack, and automated metadata.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Located in <code className="text-xs bg-muted px-1.5 py-0.5 rounded">apps/web</code></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Runs on <code className="text-xs bg-muted px-1.5 py-0.5 rounded">http://localhost:3000</code></span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Palette className="w-5 h-5" />
            </div>
            <CardTitle>Tailwind & shadcn/ui</CardTitle>
            <CardDescription>
              Customizable accessible components and one-click dark/light theme toggle.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>One-click Theme Button</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Tailwind CSS variable tokens</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Database className="w-5 h-5" />
            </div>
            <CardTitle>Sanity Studio (Backend CMS)</CardTitle>
            <CardDescription>
              Real-time headless CMS with structured schemas and live preview capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Located in <code className="text-xs bg-muted px-1.5 py-0.5 rounded">apps/studio</code></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Runs on <code className="text-xs bg-muted px-1.5 py-0.5 rounded">http://localhost:3333</code></span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Start Guide */}
      <section className="rounded-xl border bg-card p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Monorepo Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-muted/50 border space-y-2">
            <p className="font-semibold text-foreground">1. Development</p>
            <p className="text-muted-foreground">Run both frontend and studio concurrently from root:</p>
            <pre className="bg-background p-2.5 rounded text-xs overflow-x-auto border"><code>pnpm dev</code></pre>
          </div>
          <div className="p-4 rounded-lg bg-muted/50 border space-y-2">
            <p className="font-semibold text-foreground">2. Add Sanity Credentials</p>
            <p className="text-muted-foreground">Update your Sanity Project ID in <code className="text-xs">apps/web/.env.local</code> and <code className="text-xs">apps/studio/.env</code>:</p>
            <pre className="bg-background p-2.5 rounded text-xs overflow-x-auto border"><code>NEXT_PUBLIC_SANITY_PROJECT_ID=your_id</code></pre>
          </div>
        </div>
      </section>
    </div>
  );
}
