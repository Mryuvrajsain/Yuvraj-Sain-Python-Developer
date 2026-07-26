import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-6">
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Available for new opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Yuvraj Sain
              <span className="block text-muted-foreground mt-2 text-3xl sm:text-4xl md:text-5xl">
                Python Developer
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-[700px] text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Building production REST APIs with Django REST Framework and FastAPI.
              Currently shipping a CRM platform with <strong className="text-foreground font-semibold">50+ endpoints</strong> and <strong className="text-foreground font-semibold">JWT-secured role-based access</strong>.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}>
                View projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/resume.pdf" target="_blank" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-6" })}>
                <Download className="mr-2 h-4 w-4" />
                Download resume
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} direction="up" className="mt-20 sm:mt-24 border-t border-border/50 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground">50+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">REST Endpoints</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground">80%</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Perf Increase</p>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground">100%</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Clean Architecture</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
