import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, CheckCircle2 } from "lucide-react"
import { Icons } from "@/components/icons"
import Link from "next/link"

const projects = [
  {
    title: "StockSphere",
    description: "An AI-ready, enterprise-grade Inventory Management System designed to streamline inventory operations for businesses of all sizes.",
    fullDescription: "Built with Clean Architecture and a Service Layer, it provides a scalable platform for managing products, warehouses, suppliers, purchases, sales, and inventory movements. Includes real-time tracking, BI dashboards, workflow automation, and enterprise-grade security.",
    tags: ["React", "TypeScript", "Django REST Framework", "PostgreSQL", "Docker"],
    highlights: [
      "AI-ready enterprise architecture",
      "Multi-company & multi-warehouse support",
      "Real-time inventory tracking",
      "Business intelligence dashboards",
      "RESTful APIs with JWT auth",
    ],
    github: "https://github.com/Mryuvrajsain/stocksphere",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Browser",
    description: "Role-based SEO management platform for Admin, Employee, and User tiers with granular permission control.",
    fullDescription: "A secure multi-tenant SEO platform integrating 50+ REST APIs. Features include JWT authentication, Role-Based Access Control (RBAC), and a comprehensive automated test suite for reliability.",
    tags: ["Django REST Framework", "Python", "PostgreSQL", "JWT", "Pytest"],
    highlights: [
      "Granular permission control (RBAC)",
      "50+ REST API integrations",
      "Multi-tenant architecture",
      "Full automated test suite",
    ],
    github: "https://github.com/Mryuvrajsain/ai-browser",
    demo: "#",
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-0 -z-10 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="space-y-2 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-[800px]">
              Complex backend architectures and production-ready applications I've built.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.2} className="h-full">
              <Card className="flex flex-col h-full bg-background border-border/50 shadow-sm overflow-hidden group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge variant="default" className="font-mono text-xs">Featured</Badge>
                    )}
                  </div>
                  <CardDescription className="text-base text-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.fullDescription}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold font-mono uppercase tracking-wider">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-6 border-t border-border/40 gap-4">
                  <Link href={project.github} target="_blank" className={buttonVariants({ variant: "default", size: "sm", className: "w-full sm:w-auto" })}>
                    <Icons.github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                  <Link href={project.demo} target="_blank" className={buttonVariants({ variant: "secondary", size: "sm", className: "w-full sm:w-auto" })}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
