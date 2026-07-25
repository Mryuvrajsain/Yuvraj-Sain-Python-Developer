"use client"

import { useEffect, useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, GitFork, BookMarked, Users, ExternalLink } from "lucide-react"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface GithubData {
  followers: number
  publicRepos: number
  totalStars: number
  repos: Array<{
    name: string
    description: string
    stars: number
    language: string
    url: string
  }>
}

export function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const res = await fetch("/api/github")
        if (res.ok) {
          const json = await res.json()
          setData(json)
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats", error)
      } finally {
        setLoading(false)
      }
    }
    fetchGithubStats()
  }, [])

  return (
    <section id="github" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center space-x-4 mb-12">
            <Icons.github className="h-10 w-10 text-foreground" />
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">GitHub Activity</h2>
              <p className="text-muted-foreground text-lg">
                Open source contributions and recent projects.
              </p>
            </div>
          </div>
        </FadeIn>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-muted animate-pulse rounded-xl border border-border/50"></div>
            ))}
          </div>
        ) : data ? (
          <>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-background/50 border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                      <BookMarked className="mr-2 h-4 w-4" />
                      Public Repos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-mono">{data.publicRepos}</div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                      <Star className="mr-2 h-4 w-4" />
                      Total Stars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-mono">{data.totalStars}</div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Followers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-mono">{data.followers}</div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.repos.map((repo, index) => (
                <FadeIn key={repo.name} delay={0.2 + (index * 0.1)}>
                  <Link href={repo.url} target="_blank">
                    <Card className="h-full bg-background border-border/50 hover:border-primary/30 transition-colors group">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                          <span className="truncate">{repo.name}</span>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                          {repo.description || "No description provided."}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          {repo.language && (
                            <span className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-primary mr-1.5"></span>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center">
                            <Star className="mr-1 h-3 w-3" />
                            {repo.stars}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-muted-foreground border border-border/50 rounded-xl bg-background/30">
            Failed to load GitHub statistics. Please try again later.
          </div>
        )}
      </div>
    </section>
  )
}
