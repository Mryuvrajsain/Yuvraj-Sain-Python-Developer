import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "FastAPI"],
  },
  {
    title: "Authentication",
    skills: ["JWT", "Token-based Auth", "Role-Based Access Control"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "Thunder Client"],
  },
  {
    title: "AI & Other",
    skills: ["Prompt Engineering", "Generative AI Fundamentals"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
            <p className="text-muted-foreground text-lg max-w-[800px]">
              Technologies and tools I use to build scalable backend systems and REST APIs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1} direction="up">
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-mono">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-medium bg-secondary/60 hover:bg-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
