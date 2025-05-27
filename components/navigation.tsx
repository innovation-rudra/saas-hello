"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Twitter,
  ArrowRight,
  Mail,
  BookOpen,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Target,
  Shield,
  Star,
  Brain,
  Rocket,
  FileText,
  BarChart3,
  Sparkles,
} from "lucide-react"

// Add search data and state
// const searchData = {
//   tags: [
//     "AI",
//     "No-Code",
//     "Marketing",
//     "Finance",
//     "APIs",
//     "Automation",
//     "CRM Tools",
//     "E-commerce",
//     "Mobile Apps",
//     "Analytics",
//     "Security",
//     "Communication",
//     "Productivity",
//     "SaaS",
//     "B2B",
//     "Career",
//     "Development",
//   ],
//   topics: [
//     "AI-powered productivity tools",
//     "Subscription management",
//     "E-commerce automation",
//     "Job search optimization",
//     "B2B marketing stacks",
//     "No-code app builders",
//     "Customer support automation",
//     "Social media management",
//     "Email marketing tools",
//     "Project management software",
//   ],
//   ideas: [
//     "AI agent for gym instructors",
//     "Reddit sentiment scraper for stocks",
//     "No-code resume optimizer",
//     "Automated invoice generator",
//     "Social media scheduler",
//     "Customer feedback analyzer",
//   ],
// }

const megaMenuData = {
  features: {
    title: "Features",
    sections: [
      {
        title: "AI-Powered Discovery",
        items: [
          { name: "Idea Curation", description: "AI finds the best opportunities", icon: Brain },
          { name: "Trend Analysis", description: "Spot emerging market trends", icon: TrendingUp },
          { name: "Market Validation", description: "Validate demand before building", icon: Target },
          { name: "Sentiment Analysis", description: "Understand user emotions", icon: BarChart3 },
        ],
      },
      {
        title: "Data Sources",
        items: [
          { name: "Reddit Integration", description: "Monitor 500+ subreddits", icon: Globe },
          { name: "Hacker News", description: "Track HN discussions", icon: Zap },
          { name: "Product Hunt", description: "Analyze product launches", icon: Rocket },
          { name: "Indie Hackers", description: "Community insights", icon: Users },
        ],
      },
      {
        title: "Analytics & Insights",
        items: [
          { name: "Idea Scoring", description: "AI-powered opportunity ranking", icon: Star },
          { name: "Competition Analysis", description: "Understand the landscape", icon: Shield },
          { name: "Export Tools", description: "CSV, JSON, Notion integration", icon: FileText },
        ],
      },
    ],
  },
  resources: {
    title: "Resources",
    sections: [
      {
        title: "Learn",
        items: [
          { name: "SaaS Playbook", description: "Complete guide to building SaaS", icon: BookOpen },
          { name: "Market Research Guide", description: "How to validate ideas", icon: FileText },
          { name: "Case Studies", description: "Success stories from users", icon: FileText },
          { name: "Webinars", description: "Live sessions with experts", icon: Users },
        ],
      },
      {
        title: "Tools",
        items: [
          { name: "Idea Generator", description: "AI-powered idea suggestions", icon: Sparkles },
          { name: "Market Size Calculator", description: "Estimate market potential", icon: BarChart3 },
          { name: "Competition Tracker", description: "Monitor competitors", icon: Target },
        ],
      },
      {
        title: "Community",
        items: [
          { name: "Discord Community", description: "Join 2000+ entrepreneurs", icon: Users },
          { name: "Newsletter", description: "Weekly curated ideas", icon: Mail },
          { name: "Success Stories", description: "User achievements", icon: Star },
        ],
      },
    ],
  },
}

import SmartSearch from "./smart-search"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // const [searchQuery, setSearchQuery] = useState("")
  // const [searchResults, setSearchResults] = useState<any[]>([])
  // const [showSearchResults, setShowSearchResults] = useState(false)
  // const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  // const handleSearch = (query: string) => {
  //   setSearchQuery(query)

  //   if (query.length > 0) {
  //     const results: any[] = []

  //     // Search tags
  //     const matchingTags = searchData.tags
  //       .filter((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  //       .slice(0, 3)
  //       .map((tag) => ({ type: "tag", value: tag, icon: "Tag" }))

  //     // Search topics
  //     const matchingTopics = searchData.topics
  //       .filter((topic) => topic.toLowerCase().includes(query.toLowerCase()))
  //       .slice(0, 3)
  //       .map((topic) => ({ type: "topic", value: topic, icon: "Lightbulb" }))

  //     // Search ideas
  //     const matchingIdeas = searchData.ideas
  //       .filter((idea) => idea.toLowerCase().includes(query.toLowerCase()))
  //       .slice(0, 3)
  //       .map((idea) => ({ type: "idea", value: idea, icon: "Sparkles" }))

  //     results.push(...matchingTags, ...matchingTopics, ...matchingIdeas)
  //     setSearchResults(results.slice(0, 8))
  //     setShowSearchResults(true)
  //   } else {
  //     setShowSearchResults(false)
  //   }
  // }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100" : "bg-white/95 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">SaaS Idea Explorer</span>
              <div className="text-xs text-gray-500">AI-Powered Discovery</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search Bar */}
            {/* <div className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search ideas, tags, topics..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setShowSearchResults(false)
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
            {/* {showSearchResults && searchFocused && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                  <div className="p-2">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSearchQuery(result.value)
                          setShowSearchResults(false)
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              result.type === "tag"
                                ? "bg-blue-100"
                                : result.type === "topic"
                                  ? "bg-green-100"
                                  : "bg-purple-100"
                            }`}
                          >
                            {result.type === "tag" && <Target className="w-4 h-4 text-blue-600" />}
                            {result.type === "topic" && <TrendingUp className="w-4 h-4 text-green-600" />}
                            {result.type === "idea" && <Sparkles className="w-4 h-4 text-purple-600" />}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-500 capitalize">{result.type}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Search Footer */}
            {/* <div className="border-t border-gray-100 p-3 bg-gray-50 rounded-b-xl">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {searchResults.length} results for "{searchQuery}"
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">View all results</button>
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            {/* Features Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuHover("features")}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Features
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Features Mega Menu Dropdown */}
              {activeMenu === "features" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-screen max-w-4xl">
                  <Card className="shadow-2xl border-0 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenuData.features.sections.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                              {section.title}
                            </h3>
                            <div className="space-y-3">
                              {section.items.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href="#"
                                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                                >
                                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <item.icon className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 text-sm">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.description}</div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Section */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">Ready to explore?</h4>
                            <p className="text-sm text-gray-500">Start discovering ideas today</p>
                          </div>
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            Try Free Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Resources Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuHover("resources")}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Resources
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Resources Mega Menu Dropdown */}
              {activeMenu === "resources" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-screen max-w-4xl">
                  <Card className="shadow-2xl border-0 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenuData.resources.sections.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                              {section.title}
                            </h3>
                            <div className="space-y-3">
                              {section.items.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href="#"
                                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors group"
                                >
                                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                    <item.icon className="w-4 h-4 text-green-600" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 text-sm">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.description}</div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Featured Resource */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                              <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">The Complete SaaS Playbook</h4>
                              <p className="text-sm text-gray-600">Free 50-page guide to building successful SaaS</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">Free</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <a href="#pricing" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <SmartSearch />
            <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-6">
              {/* Mobile Search */}
              <div>
                <SmartSearch isMobile={true} />
              </div>

              {/* Mobile Search Results */}
              {/* {showSearchResults && searchResults.length > 0 && (
                <div className="mt-3 bg-gray-50 rounded-lg p-3 max-h-60 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(result.value)
                        setShowSearchResults(false)
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-white rounded-lg transition-colors mb-2 last:mb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center ${
                            result.type === "tag"
                              ? "bg-blue-100"
                              : result.type === "topic"
                                ? "bg-green-100"
                                : "bg-purple-100"
                          }`}
                        >
                          {result.type === "tag" && <Target className="w-3 h-3 text-blue-600" />}
                          {result.type === "topic" && <TrendingUp className="w-3 h-3 text-green-600" />}
                          {result.type === "idea" && <Sparkles className="w-3 h-3 text-purple-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">{result.value}</div>
                          <div className="text-xs text-gray-500 capitalize">{result.type}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )} */}

              {/* Mobile Features */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                <div className="space-y-2 pl-4">
                  <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI-Powered Discovery
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Market Validation
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Trend Analysis
                  </a>
                </div>
              </div>

              {/* Mobile Resources */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                <div className="space-y-2 pl-4">
                  <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    SaaS Playbook
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Case Studies
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Community
                  </a>
                </div>
              </div>

              {/* Mobile Simple Links */}
              <div className="space-y-3">
                <a href="#pricing" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Pricing
                </a>
                <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </a>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Start Free Trial
                </Button>
              </div>

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
