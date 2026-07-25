import { NextResponse } from "next/server"

// Revalidate hourly
export const revalidate = 3600;

export async function GET() {
  const username = "Mryuvrajsain"
  const token = process.env.GITHUB_TOKEN
  
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3+json",
  }
  
  if (token) {
    headers["Authorization"] = `token ${token}`
  }

  try {
    // Fetch user data for public repo count and followers
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers })
    if (!userRes.ok) throw new Error("Failed to fetch GitHub user")
    const userData = await userRes.json()

    // Fetch repositories to get stars and language stats
    // Note: To get pinned repos specifically without GraphQL, we might just fetch public repos and sort by stars
    // But since the prompt mentions REST/GraphQL, let's use the REST API to get repos sorted by updated
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { headers })
    if (!reposRes.ok) throw new Error("Failed to fetch GitHub repos")
    const reposData = await reposRes.json()
    
    // Calculate total stars
    let totalStars = 0
    reposData.forEach((repo: any) => {
      totalStars += repo.stargazers_count
    })

    const repos = reposData.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
      url: repo.html_url,
    }))

    return NextResponse.json({
      followers: userData.followers,
      publicRepos: userData.public_repos,
      totalStars,
      repos,
    })
  } catch (error) {
    console.error("GitHub API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    )
  }
}
