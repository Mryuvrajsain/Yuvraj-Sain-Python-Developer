import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { GithubStats } from "@/components/GithubStats"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <GithubStats />
      <Contact />
      
      <footer className="py-8 border-t border-border/50 bg-background text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yuvraj Sain. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
