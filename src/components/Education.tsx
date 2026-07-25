import { FadeIn } from "@/components/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "Bikaner Technical University",
    period: "2022 – 2025",
  },
  {
    degree: "Diploma in Engineering",
    institution: "Board of Technical Education Rajasthan (BTER)",
    period: "2018 – 2020",
  },
  {
    degree: "Industrial Training Institute (ITI)",
    institution: "National Council for Vocational Training (NCVT)",
    period: "2015 – 2017",
  }
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center">
              <GraduationCap className="mr-3 h-8 w-8 text-primary" />
              Education
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6">
          {education.map((item, index) => (
            <FadeIn key={item.degree} delay={index * 0.15} direction="up">
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:border-primary/20 transition-colors">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                    <p className="text-muted-foreground mt-1">{item.institution}</p>
                  </div>
                  <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground font-mono self-start md:self-auto whitespace-nowrap">
                    {item.period}
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
