import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaaS Idea Explorer - Discover Your Next Big Opportunity",
  description:
    "AI-curated SaaS ideas from Reddit, Hacker News, and more. Filter, explore, and validate real market demand.",
  keywords: "SaaS ideas, startup ideas, market validation, Reddit, Hacker News, AI curation",
  authors: [{ name: "SaaS Idea Explorer Team" }],
  openGraph: {
    title: "SaaS Idea Explorer - Discover Your Next Big Opportunity",
    description: "AI-curated SaaS ideas from Reddit, Hacker News, and more.",
    type: "website",
    url: "https://saasideaexplorer.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Idea Explorer",
    description: "AI-curated SaaS ideas from Reddit, Hacker News, and more.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
