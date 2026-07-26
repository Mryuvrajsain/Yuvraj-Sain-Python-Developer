"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const currentExperience = {
  role: "AI/ML Developer",
  company: "AIGETAI",
  location: "Remote",
  period: "Jan 2026 – Jul 2026",
  description: [
    "Developed and deployed machine learning models to solve real-world business problems, resulting in a 15% improvement in operational efficiency.",
    "Implemented JWT authentication and role-based permissions for secure multi-tenant access.",
    "Improved API response performance by up to 80% through advanced query and code optimization.",
    "Wrote 50+ automated tests ensuring robust backend reliability.",
    "Architected a modular backend system designed for long-term enterprise scalability."
  ]
}

const priorExperience = [
  {
    role: "EDP Executive",
    company: "Jyoti Automobiles",
    period: "2023 – 2025",
    description: "Cross-departmental data analysis and reporting for management decisions."
  },
  {
    role: "Quality Inspector",
    company: "Eicher Engines",
    period: "2022 – 2023",
    description: "Quality and performance reporting for production oversight."
  },
  {
    role: "Production Analyst",
    company: "Hitachi Astemo",
    period: "2021 – 2022",
    description: "Production data monitoring and process improvement collaboration."
  },
  {
    role: "Vehicle Validation Trainee",
    company: "CIT Hero MotoCorp",
    period: "2017 – 2018",
    description: "Vehicle testing, validation, and results documentation."
  }
]

export function Experience() {
  const [showPrior, setShowPrior] = useState(false)

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey and technical roles.
            </p>
          </div>
        </FadeIn>

        <div className="relative border-l border-border/60 ml-3 md:ml-0 md:pl-8 space-y-12">
          <FadeIn direction="up">
            <div className="relative pl-8 md:pl-0">
              <span className="absolute -left-[41px] md:-left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-4 ring-background">
                <Briefcase className="h-4 w-4 text-primary" />
              </span>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentExperience.role}</h3>
                  <div className="text-lg font-medium text-primary mt-1">
                    {currentExperience.company} <span className="text-muted-foreground font-normal">| {currentExperience.location}</span>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground md:self-start">
                  {currentExperience.period}
                </span>
              </div>

              <ul className="space-y-3 text-muted-foreground mt-4 list-none pl-0">
                {currentExperience.description.map((item, i) => (
                  <li key={i} className="relative pl-6">
                    <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center md:text-left md:pl-8">
          <Button
            variant="ghost"
            onClick={() => setShowPrior(!showPrior)}
            className="text-muted-foreground hover:text-foreground group"
          >
            {showPrior ? "Hide prior experience" : "View prior experience (2017 - 2025)"}
            {showPrior ? (
              <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            )}
          </Button>
        </FadeIn>

        <AnimatePresence>
          {showPrior && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="relative border-l border-border/40 ml-3 md:ml-0 md:pl-8 space-y-8 pt-8 mt-4">
                {priorExperience.map((exp, index) => (
                  <div key={index} className="relative pl-8 md:pl-0 opacity-70 hover:opacity-100 transition-opacity">
                    <span className="absolute -left-[37px] md:-left-[37px] flex h-6 w-6 items-center justify-center rounded-full bg-muted border border-border ring-4 ring-background">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                    </span>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                      <span className="text-sm font-medium text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {exp.company}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
