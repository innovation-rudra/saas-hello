"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  ArrowRight,
  Heart,
  MessageCircle,
  ExternalLink,
  Flame,
  Zap,
  Star,
  Clock,
  Users,
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"

const trendingIdeas = [
  {
    id: 1,
    title: "AI agent for gym instructors",
    description: "Automate workout planning and client progress tracking with intelligent AI assistance",
    tags: ["AI", "Fitness", "SaaS"],
    upvotes: 234,
    comments: 45,
    views: 1200,
    source: "Reddit",
    timeAgo: "2h ago",
    trending: true,
    growth: "+45%",
    category: "hot",
    sourceColor: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "Reddit sentiment scraper for stocks",
    description: "Track social sentiment for investment decisions with real-time analysis",
    tags: ["Finance", "Data", "API"],
    upvotes: 189,
    comments: 32,
    views: 890,
    source: "Hacker News",
    timeAgo: "4h ago",
    trending: true,
    growth: "+32%",
    category: "rising",
    sourceColor: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    title: "No-code resume optimizer",
    description: "AI-powered resume enhancement for job seekers with ATS optimization",
    tags: ["AI", "Career", "No-code"],
    upvotes: 156,
    comments: 28,
    views: 670,
    source: "Indie Hackers",
    timeAgo: "6h ago",
    trending: false,
    growth: "+28%",
    category: "new",
    sourceColor: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Automated invoice generator",
    description: "Smart invoicing system for freelancers with payment tracking",
    tags: ["Finance", "Automation", "B2B"],
    upvotes: 142,
    comments: 24,
    views: 520,
    source: "Product Hunt",
    timeAgo: "8h ago",
    trending: true,
    growth: "+25%",
    category: "hot",
    sourceColor: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Social media scheduler with AI",
    description: "AI-powered content scheduling and optimization for maximum engagement",
    tags: ["AI", "Marketing", "Social"],
    upvotes: 128,
    comments: 19,
    views: 445,
    source: "Reddit",
    timeAgo: "12h ago",
    trending: false,
    growth: "+22%",
    category: "rising",
    sourceColor: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Customer feedback analyzer",
    description: "Analyze customer feedback with sentiment analysis and actionable insights",
    tags: ["AI", "Analytics", "CRM"],
    upvotes: 98,
    comments: 15,
    views: 320,
    source: "Hacker News",
    timeAgo: "1d ago",
    trending: false,
    growth: "+18%",
    category: "new",
    sourceColor: "from-blue-500 to-purple-500",
  },
]

const categoryConfig = {
  hot: {
    icon: Flame,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    label: "🔥 Hot",
  },
  rising: {
    icon: TrendingUp,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    label: "📈 Rising",
  },
  new: {
    icon: Zap,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    label: "✨ New",
  },
}

export default function TrendingIdeas() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isAutoPlay && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(filteredIdeas.length / 3))
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlay, isVisible, selectedCategory])

  const filteredIdeas =
    selectedCategory === "all" ? trendingIdeas : trendingIdeas.filter((idea) => idea.category === selectedCategory)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(filteredIdeas.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(filteredIdeas.length / 3)) % Math.ceil(filteredIdeas.length / 3))
  }

  const getCurrentIdeas = () => {
    const startIndex = currentIndex * 3
    return filteredIdeas.slice(startIndex, startIndex + 3)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 text-transparent bg-clip-text rounded-full px-8 py-4 text-lg font-bold mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-full animate-pulse"></div>
            <Flame className="w-6 h-6 text-orange-500 animate-bounce" />
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent font-bold">
              Trending Right Now
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hottest SaaS Ideas
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Discovered Today
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Real-time insights from the world's top communities. These ideas are gaining massive traction right now.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              All Ideas ({trendingIdeas.length})
            </button>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === key
                    ? `bg-gradient-to-r ${config.color} text-white shadow-lg scale-105`
                    : `${config.bgColor} ${config.textColor} hover:scale-105`
                }`}
              >
                <config.icon className="w-4 h-4" />
                {config.label} ({trendingIdeas.filter((idea) => idea.category === key).length})
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
                  isAutoPlay
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                {isAutoPlay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>

              <div className="text-sm text-gray-500 font-medium">
                {currentIndex + 1} / {Math.ceil(filteredIdeas.length / 3)}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>

          {/* Ideas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
            {getCurrentIdeas().map((idea, index) => {
              const categoryInfo = categoryConfig[idea.category as keyof typeof categoryConfig]
              return (
                <Card
                  key={`${idea.id}-${currentIndex}`}
                  className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 overflow-hidden border-0 ${
                    hoveredCard === index ? "scale-105 shadow-2xl" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    background: `linear-gradient(135deg, ${idea.sourceColor.replace("from-", "").replace("to-", ", ")})`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-0 relative overflow-hidden">
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>

                    {/* Content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge
                            className={`${categoryInfo.bgColor} ${categoryInfo.textColor} border-0 px-3 py-1 font-medium`}
                          >
                            <categoryInfo.icon className="w-3 h-3 mr-1" />
                            {categoryInfo.label}
                          </Badge>
                          {idea.trending && (
                            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                              <TrendingUp className="w-4 h-4" />
                              {idea.growth}
                            </div>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs bg-white/80">
                          {idea.source}
                        </Badge>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {idea.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">{idea.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {idea.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="font-medium">{idea.upvotes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">{idea.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-purple-500" />
                            <span className="font-medium">{idea.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Clock className="w-3 h-3" />
                          {idea.timeAgo}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                        >
                          Explore Idea
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(filteredIdeas.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Don't Miss the Next Big Thing</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of entrepreneurs who discover trending opportunities before they go mainstream
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Star className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View All Trending Ideas
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
