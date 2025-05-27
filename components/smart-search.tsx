"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  X,
  ArrowRight,
  Tag,
  TrendingUp,
  Lightbulb,
  Star,
  MessageCircle,
  ExternalLink,
  Brain,
  Target,
  Code,
  DollarSign,
  Zap,
  BarChart3,
  Smartphone,
  Shield,
} from "lucide-react"

// Enhanced search data with richer metadata
const searchData = {
  tags: [
    { name: "AI", icon: Brain, count: 1234, color: "blue", description: "Artificial Intelligence solutions" },
    { name: "No-Code", icon: Code, count: 856, color: "purple", description: "Build without coding" },
    { name: "Marketing", icon: Target, count: 642, color: "green", description: "Growth and marketing tools" },
    { name: "Finance", icon: DollarSign, count: 789, color: "yellow", description: "Financial technology" },
    { name: "Analytics", icon: BarChart3, count: 567, color: "indigo", description: "Data analysis tools" },
    { name: "Mobile", icon: Smartphone, count: 445, color: "cyan", description: "Mobile applications" },
    { name: "Security", icon: Shield, count: 334, color: "red", description: "Cybersecurity solutions" },
    { name: "Automation", icon: Zap, count: 298, color: "orange", description: "Workflow automation" },
  ],
  topics: [
    {
      title: "AI-powered productivity tools",
      count: 89,
      description: "Tools that use AI to enhance workplace productivity and efficiency",
      trending: true,
    },
    {
      title: "Subscription management platforms",
      count: 67,
      description: "Solutions for managing recurring subscriptions and billing",
      trending: false,
    },
    {
      title: "E-commerce automation tools",
      count: 54,
      description: "Automated solutions for online stores and marketplaces",
      trending: true,
    },
    {
      title: "Job search optimization",
      count: 43,
      description: "Tools to improve job hunting and career development",
      trending: false,
    },
    {
      title: "B2B marketing stacks",
      count: 38,
      description: "Comprehensive marketing tool suites for businesses",
      trending: true,
    },
    {
      title: "No-code app builders",
      count: 35,
      description: "Visual development platforms for non-developers",
      trending: true,
    },
  ],
  ideas: [
    {
      title: "AI agent for gym instructors",
      summary: "Automate workout planning and client progress tracking with AI",
      source: "Reddit",
      upvotes: 234,
      score: 8.5,
      tags: ["AI", "Fitness", "SaaS"],
    },
    {
      title: "Reddit sentiment scraper for stocks",
      summary: "Track social sentiment for investment decisions",
      source: "Hacker News",
      upvotes: 189,
      score: 7.8,
      tags: ["Finance", "Data", "API"],
    },
    {
      title: "No-code resume optimizer",
      summary: "AI-powered resume enhancement for job seekers",
      source: "Indie Hackers",
      upvotes: 156,
      score: 8.2,
      tags: ["AI", "Career", "No-code"],
    },
    {
      title: "Automated invoice generator",
      summary: "Smart invoicing system for freelancers and small businesses",
      source: "Product Hunt",
      upvotes: 142,
      score: 7.5,
      tags: ["Finance", "Automation", "B2B"],
    },
    {
      title: "Social media scheduler with AI",
      summary: "AI-powered content scheduling and optimization",
      source: "Reddit",
      upvotes: 128,
      score: 8.0,
      tags: ["AI", "Marketing", "Social"],
    },
  ],
}

interface SmartSearchProps {
  isMobile?: boolean
}

export default function SmartSearch({ isMobile = false }: SmartSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any>({ tags: [], topics: [], ideas: [] })
  const [showResults, setShowResults] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [hoveredResult, setHoveredResult] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("all")
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
        setSearchFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (query.length > 0) {
      const results = {
        tags: searchData.tags.filter((tag) => tag.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3),
        topics: searchData.topics
          .filter((topic) => topic.title.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 3),
        ideas: searchData.ideas
          .filter(
            (idea) =>
              idea.title.toLowerCase().includes(query.toLowerCase()) ||
              idea.summary.toLowerCase().includes(query.toLowerCase()) ||
              idea.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
          )
          .slice(0, 2),
      }

      setSearchResults(results)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowResults(false)
    inputRef.current?.focus()
  }

  const selectResult = (result: any, type: string) => {
    setSearchQuery(type === "tag" ? `#${result.name}` : result.title)
    setShowResults(false)
  }

  const getTotalResults = () => {
    return searchResults.tags.length + searchResults.topics.length + searchResults.ideas.length
  }

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
    }
    return colorMap[color] || colorMap.blue
  }

  if (isMobile) {
    return (
      <div ref={searchRef} className="w-full">
        {/* Mobile Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search ideas, tags, topics..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile Search Results */}
        {showResults && searchFocused && getTotalResults() > 0 && (
          <div className="mt-3 bg-white rounded-lg border border-gray-200 shadow-lg max-h-80 overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-none border-b">
                <TabsTrigger value="all" className="text-xs">
                  All ({getTotalResults()})
                </TabsTrigger>
                <TabsTrigger value="tags" className="text-xs">
                  Tags ({searchResults.tags.length})
                </TabsTrigger>
                <TabsTrigger value="topics" className="text-xs">
                  Topics ({searchResults.topics.length})
                </TabsTrigger>
                <TabsTrigger value="ideas" className="text-xs">
                  Ideas ({searchResults.ideas.length})
                </TabsTrigger>
              </TabsList>

              <div className="max-h-60 overflow-y-auto">
                <TabsContent value="all" className="mt-0 space-y-1 p-2">
                  {/* Tags */}
                  {searchResults.tags.map((tag: any, index: number) => (
                    <MobileResultCard
                      key={`tag-${index}`}
                      type="tag"
                      data={tag}
                      onClick={() => selectResult(tag, "tag")}
                    />
                  ))}
                  {/* Topics */}
                  {searchResults.topics.map((topic: any, index: number) => (
                    <MobileResultCard
                      key={`topic-${index}`}
                      type="topic"
                      data={topic}
                      onClick={() => selectResult(topic, "topic")}
                    />
                  ))}
                  {/* Ideas */}
                  {searchResults.ideas.map((idea: any, index: number) => (
                    <MobileResultCard
                      key={`idea-${index}`}
                      type="idea"
                      data={idea}
                      onClick={() => selectResult(idea, "idea")}
                    />
                  ))}
                </TabsContent>

                <TabsContent value="tags" className="mt-0 space-y-1 p-2">
                  {searchResults.tags.map((tag: any, index: number) => (
                    <MobileResultCard
                      key={`tag-${index}`}
                      type="tag"
                      data={tag}
                      onClick={() => selectResult(tag, "tag")}
                    />
                  ))}
                </TabsContent>

                <TabsContent value="topics" className="mt-0 space-y-1 p-2">
                  {searchResults.topics.map((topic: any, index: number) => (
                    <MobileResultCard
                      key={`topic-${index}`}
                      type="topic"
                      data={topic}
                      onClick={() => selectResult(topic, "topic")}
                    />
                  ))}
                </TabsContent>

                <TabsContent value="ideas" className="mt-0 space-y-1 p-2">
                  {searchResults.ideas.map((idea: any, index: number) => (
                    <MobileResultCard
                      key={`idea-${index}`}
                      type="idea"
                      data={idea}
                      onClick={() => selectResult(idea, "idea")}
                    />
                  ))}
                </TabsContent>
              </div>
            </Tabs>

            {/* Mobile Footer */}
            <div className="border-t border-gray-100 p-3 bg-gray-50">
              <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                View all results for "{searchQuery}" →
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Desktop Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search ideas, tags, topics..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          className="w-80 pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white focus:bg-white"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Desktop Search Results Dropdown */}
      {showResults && searchFocused && getTotalResults() > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
            {/* Tags Section */}
            {searchResults.tags.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Tags ({searchResults.tags.length})</span>
                </div>
                <div className="space-y-1">
                  {searchResults.tags.map((tag: any, index: number) => (
                    <DesktopResultCard
                      key={`tag-${index}`}
                      type="tag"
                      data={tag}
                      onClick={() => selectResult(tag, "tag")}
                      onHover={setHoveredResult}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Topics Section */}
            {searchResults.topics.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Topics ({searchResults.topics.length})</span>
                </div>
                <div className="space-y-1">
                  {searchResults.topics.map((topic: any, index: number) => (
                    <DesktopResultCard
                      key={`topic-${index}`}
                      type="topic"
                      data={topic}
                      onClick={() => selectResult(topic, "topic")}
                      onHover={setHoveredResult}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Ideas Section */}
            {searchResults.ideas.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Ideas ({searchResults.ideas.length})</span>
                </div>
                <div className="space-y-1">
                  {searchResults.ideas.map((idea: any, index: number) => (
                    <DesktopResultCard
                      key={`idea-${index}`}
                      type="idea"
                      data={idea}
                      onClick={() => selectResult(idea, "idea")}
                      onHover={setHoveredResult}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Footer */}
          <div className="border-t border-gray-100 p-3 bg-gray-50 rounded-b-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {getTotalResults()} results for "{searchQuery}"
              </span>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group">
                View all results
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hover Preview Card (Desktop Only) */}
      {hoveredResult && hoveredResult.type === "idea" && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 w-80 z-60 animate-in slide-in-from-right-2 duration-200">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary" className="text-xs">
                  {hoveredResult.data.source}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {hoveredResult.data.score}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{hoveredResult.data.title}</h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{hoveredResult.data.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {hoveredResult.data.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {hoveredResult.data.upvotes} upvotes
                </div>
                <ExternalLink className="w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

// Desktop Result Card Component
function DesktopResultCard({ type, data, onClick, onHover }: any) {
  const handleMouseEnter = () => {
    onHover({ type, data })
  }

  const handleMouseLeave = () => {
    onHover(null)
  }

  if (type === "tag") {
    const colors = getColorClasses(data.color)
    return (
      <button
        onClick={() => onClick()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}>
            <data.icon className={`w-4 h-4 ${colors.text}`} />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600">#{data.name}</div>
            <div className="text-xs text-gray-500">{data.count} ideas tagged</div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </div>
      </button>
    )
  }

  if (type === "topic") {
    return (
      <button
        onClick={() => onClick()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full text-left px-3 py-2 hover:bg-green-50 rounded-lg transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm group-hover:text-green-600 line-clamp-1">
              {data.title}
            </div>
            <div className="text-xs text-gray-500">{data.count} ideas • Topic</div>
          </div>
          {data.trending && <Badge className="bg-orange-100 text-orange-600 text-xs">🔥 Trending</Badge>}
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
        </div>
      </button>
    )
  }

  if (type === "idea") {
    return (
      <button
        onClick={() => onClick()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full text-left px-3 py-2 hover:bg-purple-50 rounded-lg transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm group-hover:text-purple-600 line-clamp-1">
              {data.title}
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span>{data.source}</span>
              <span>•</span>
              <span>⭐ {data.score}</span>
              <span>•</span>
              <span>{data.upvotes} upvotes</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
        </div>
      </button>
    )
  }

  return null
}

// Mobile Result Card Component
function MobileResultCard({ type, data, onClick }: any) {
  if (type === "tag") {
    const colors = getColorClasses(data.color)
    return (
      <button
        onClick={() => onClick()}
        className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 ${colors.bg} rounded flex items-center justify-center`}>
            <data.icon className={`w-3 h-3 ${colors.text}`} />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm">#{data.name}</div>
            <div className="text-xs text-gray-500">{data.count} ideas • Tag</div>
          </div>
        </div>
      </button>
    )
  }

  if (type === "topic") {
    return (
      <button
        onClick={() => onClick()}
        className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm line-clamp-1">{data.title}</div>
            <div className="text-xs text-gray-500">{data.count} ideas • Topic</div>
          </div>
        </div>
      </button>
    )
  }

  if (type === "idea") {
    return (
      <button
        onClick={() => onClick()}
        className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
            <Lightbulb className="w-3 h-3 text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm line-clamp-1">{data.title}</div>
            <div className="text-xs text-gray-500">
              {data.source} • ⭐ {data.score}
            </div>
          </div>
        </div>
      </button>
    )
  }

  return null
}

// Helper function for color classes
function getColorClasses(color: string) {
  const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
    red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
  }
  return colorMap[color] || colorMap.blue
}
