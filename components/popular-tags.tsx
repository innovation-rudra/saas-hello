"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  TrendingUp,
  Filter,
  Search,
  Sparkles,
  Zap,
  Target,
  Users,
  Code,
  DollarSign,
  Smartphone,
  Database,
  Shield,
  BarChart3,
  MessageSquare,
  ShoppingCart,
  Rocket,
  Brain,
  Settings,
  X,
  ArrowRight,
} from "lucide-react"

const popularTags = [
  {
    name: "AI",
    count: 1234,
    growth: "+15%",
    color: "from-blue-500 to-blue-600",
    icon: Brain,
    description: "Artificial Intelligence and Machine Learning solutions",
  },
  {
    name: "No-Code",
    count: 856,
    growth: "+23%",
    color: "from-purple-500 to-purple-600",
    icon: Code,
    description: "Build without coding knowledge",
  },
  {
    name: "Marketing",
    count: 642,
    growth: "+8%",
    color: "from-green-500 to-green-600",
    icon: Target,
    description: "Marketing automation and growth tools",
  },
  {
    name: "Finance",
    count: 789,
    growth: "+12%",
    color: "from-yellow-500 to-yellow-600",
    icon: DollarSign,
    description: "Financial technology and management",
  },
  {
    name: "APIs",
    count: 567,
    growth: "+18%",
    color: "from-indigo-500 to-indigo-600",
    icon: Database,
    description: "Application Programming Interfaces",
  },
  {
    name: "Automation",
    count: 445,
    growth: "+25%",
    color: "from-orange-500 to-orange-600",
    icon: Settings,
    description: "Workflow and process automation",
  },
  {
    name: "CRM Tools",
    count: 334,
    growth: "+10%",
    color: "from-pink-500 to-pink-600",
    icon: Users,
    description: "Customer Relationship Management",
  },
  {
    name: "E-commerce",
    count: 298,
    growth: "+14%",
    color: "from-teal-500 to-teal-600",
    icon: ShoppingCart,
    description: "Online commerce and retail solutions",
  },
  {
    name: "Mobile Apps",
    count: 267,
    growth: "+20%",
    color: "from-cyan-500 to-cyan-600",
    icon: Smartphone,
    description: "Mobile application development",
  },
  {
    name: "Analytics",
    count: 234,
    growth: "+16%",
    color: "from-red-500 to-red-600",
    icon: BarChart3,
    description: "Data analysis and business intelligence",
  },
  {
    name: "Security",
    count: 189,
    growth: "+22%",
    color: "from-gray-500 to-gray-600",
    icon: Shield,
    description: "Cybersecurity and data protection",
  },
  {
    name: "Communication",
    count: 156,
    growth: "+11%",
    color: "from-violet-500 to-violet-600",
    icon: MessageSquare,
    description: "Team communication and collaboration",
  },
]

const trendingTopics = [
  {
    title: "AI-powered productivity tools",
    count: 89,
    growth: "+32%",
    description: "Tools that use AI to enhance workplace productivity",
    tags: ["AI", "Productivity", "Automation"],
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Subscription management",
    count: 67,
    growth: "+28%",
    description: "Platforms for managing recurring subscriptions",
    tags: ["Finance", "SaaS", "Management"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "E-commerce automation",
    count: 54,
    growth: "+24%",
    description: "Automated solutions for online stores",
    tags: ["E-commerce", "Automation", "Marketing"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Job search optimization",
    count: 43,
    growth: "+19%",
    description: "Tools to improve job hunting and career development",
    tags: ["Career", "AI", "Optimization"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "B2B marketing stacks",
    count: 38,
    growth: "+15%",
    description: "Comprehensive marketing tool suites for businesses",
    tags: ["Marketing", "B2B", "Analytics"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "No-code app builders",
    count: 35,
    growth: "+41%",
    description: "Visual development platforms for non-developers",
    tags: ["No-Code", "Development", "Tools"],
    color: "from-indigo-500 to-purple-500",
  },
]

export default function PopularTags() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [animatedCounts, setAnimatedCounts] = useState<{ [key: string]: number }>({})
  const [activeTab, setActiveTab] = useState("tags")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          popularTags.forEach((tag, index) => {
            setTimeout(() => {
              animateCounter(tag.name, tag.count)
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const animateCounter = (tagName: string, targetCount: number) => {
    let current = 0
    const increment = targetCount / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        current = targetCount
        clearInterval(timer)
      }
      setAnimatedCounts((prev) => ({ ...prev, [tagName]: Math.floor(current) }))
    }, 50)
  }

  const toggleTag = (tagName: string) => {
    setSelectedTags((prev) => (prev.includes(tagName) ? prev.filter((t) => t !== tagName) : [...prev, tagName]))
  }

  const clearFilters = () => {
    setSelectedTags([])
    setSearchQuery("")
    setShowSuggestions(false)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    if (value.length > 0) {
      const allItems = [...popularTags.map((tag) => `#${tag.name}`), ...trendingTopics.map((topic) => topic.title)]
      const filtered = [...new Set(allItems.filter((item) => item.toLowerCase().includes(value.toLowerCase())))].slice(
        0,
        10,
      )
      setSearchSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const selectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
  }

  const filteredTags = popularTags.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase().replace("#", "")),
  )

  const filteredTopics = trendingTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase().replace("#", ""))),
  )

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzYzNjZmMSIgZmlsbE9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 rounded-full px-6 py-3 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />🔥 Trending Now
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular Tags &
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Topics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore what's trending among founders, developers, and entrepreneurs across Reddit, HN, and Product Hunt
          </p>

          {/* Search Bar */}
          <div ref={searchRef} className="max-w-md mx-auto relative mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search tags, topics, or ideas..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setShowSuggestions(false)
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search Suggestions */}
            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-[9999] max-w-md mx-auto">
                <div className="py-1 max-h-64 overflow-y-auto">
                  {searchSuggestions.slice(0, 8).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectSuggestion(suggestion)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{suggestion}</span>
                    </button>
                  ))}
                </div>
                {searchSuggestions.length > 8 && (
                  <div className="border-t border-gray-100 px-4 py-2 text-xs text-gray-500 bg-gray-50 rounded-b-xl">
                    +{searchSuggestions.length - 8} more results
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ paddingTop: showSuggestions ? "100px" : "0px" }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="tags" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Tags ({filteredTags.length})
              </TabsTrigger>
              <TabsTrigger value="topics" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Topics ({filteredTopics.length})
              </TabsTrigger>
            </TabsList>

            {/* Filter Controls */}
            {(selectedTags.length > 0 || searchQuery) && (
              <div className="flex flex-wrap items-center gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Active filters:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Search: {searchQuery}
                    </Badge>
                  )}
                  {selectedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear All
                </Button>
              </div>
            )}

            {/* Enhanced Tags Tab - 3 Cards Per Row */}
            <TabsContent value="tags" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTags.map((tag, index) => (
                  <Card
                    key={tag.name}
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 overflow-hidden ${
                      selectedTags.includes(tag.name) ? "ring-2 ring-blue-500 shadow-lg scale-105" : "hover:scale-105"
                    } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => toggleTag(tag.name)}
                  >
                    <CardContent className="p-6 bg-white relative">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${tag.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <tag.icon className="w-6 h-6" />
                        </div>
                        <Badge className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1">
                          {tag.growth}
                        </Badge>
                      </div>

                      {/* Tag Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        #{tag.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tag.description}</p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{animatedCounts[tag.name] || 0}</div>
                          <div className="text-xs text-gray-500">ideas found</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-700">Popularity</div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                            <div
                              className={`h-full bg-gradient-to-r ${tag.color} rounded-full transition-all duration-1000`}
                              style={{ width: isVisible ? `${Math.min((tag.count / 1500) * 100, 100)}%` : "0%" }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <Button
                        size="sm"
                        className={`w-full transition-all duration-300 ${
                          selectedTags.includes(tag.name)
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {selectedTags.includes(tag.name) ? "Selected" : "Explore Ideas"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>

                      {/* Selection Indicator */}
                      {selectedTags.includes(tag.name) && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTags.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-6">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No tags found</h3>
                  <p className="text-gray-600 text-lg">Try adjusting your search query or browse all available tags</p>
                  <Button
                    variant="outline"
                    className="mt-6 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Topics Tab */}
            <TabsContent value="topics" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTopics.map((topic, index) => (
                  <Card
                    key={topic.title}
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 relative">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 ml-2 flex-shrink-0">{topic.growth}</Badge>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{topic.count}</div>
                          <div className="text-xs text-gray-500">ideas</div>
                        </div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${topic.color} transition-all duration-1000 ease-out`}
                            style={{ width: isVisible ? `${Math.min((topic.count / 100) * 100, 100)}%` : "0%" }}
                          />
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {topic.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs hover:bg-gray-100 transition-colors">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Search className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTopics.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
                  <p className="text-gray-600">Try adjusting your search query</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
            <p className="text-gray-600 mb-6">
              Suggest new tags or topics to help the community discover more opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white group">
                <Sparkles className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                Suggest a Tag
              </Button>
              <Button variant="outline" className="group">
                <Rocket className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Browse All Ideas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
