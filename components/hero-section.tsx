"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Brain, Target, Rocket } from "lucide-react"

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  const animatedTexts = ["Discover Your Next SaaS Idea", "Find Market Opportunities", "Validate Real Demand"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentFullText = animatedTexts[currentText]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentText((prev) => (prev + 1) % animatedTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentText, animatedTexts])

  const floatingIcons = [
    { Icon: Brain, delay: 0, position: { top: "20%", left: "10%" } },
    { Icon: Target, delay: 1, position: { top: "30%", right: "15%" } },
    { Icon: Zap, delay: 2, position: { top: "60%", left: "5%" } },
    { Icon: Rocket, delay: 3, position: { top: "70%", right: "10%" } },
    { Icon: TrendingUp, delay: 4, position: { top: "15%", right: "25%" } },
    { Icon: Users, delay: 5, position: { top: "80%", left: "20%" } },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white min-h-screen flex items-center pt-20">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">AI-Powered Idea Discovery</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block min-h-[1.2em]">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="inline-block w-1 h-[0.9em] bg-gradient-to-r from-blue-300 to-purple-300 ml-1 animate-pulse"></span>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100 max-w-lg leading-relaxed">
                AI-curated insights from <span className="font-semibold text-white">Reddit</span>,{" "}
                <span className="font-semibold text-white">HN</span>, and more. Filter, explore, and validate real
                market demand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 group px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Explore Ideas
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-white/5"
              >
                Submit Your Idea
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="flex gap-8 pt-8">
              {[
                { number: "2,000+", label: "Active Users", icon: Users },
                { number: "10K+", label: "Ideas Curated", icon: Brain },
                { number: "500+", label: "SaaS Launched", icon: Rocket },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-200 group-hover:text-white transition-colors mr-2" />
                    <div className="text-3xl font-bold group-hover:scale-110 transition-transform">{stat.number}</div>
                  </div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Animated Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Central Dashboard Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Main Dashboard */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl hover:scale-110 transition-all duration-500 group">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                      <div className="text-xs font-medium">AI Engine</div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  {floatingIcons.map((item, i) => (
                    <div
                      key={i}
                      className="absolute w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 animate-float"
                      style={{
                        ...item.position,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${item.delay * 0.5}s`,
                      }}
                    >
                      <item.Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white/80" />
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {floatingIcons.map((_, i) => (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}%`}
                        y2={`${50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}%`}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </svg>

                  {/* Data Flow Animation */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full animate-ping"
                        style={{
                          top: `${50 + 30 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                          left: `${50 + 30 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
