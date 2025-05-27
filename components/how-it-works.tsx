"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Filter, Layers, Search, ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Monitor,
    title: "Monitor",
    description: "Track discussions across Reddit, HN, Product Hunt, and Indie Hackers",
    details: "Our AI continuously scans 50+ communities for emerging trends and pain points",
    color: "bg-blue-500",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Filter,
    title: "Filter",
    description: "NLP-powered trigger matching identifies promising opportunities",
    details: "Advanced algorithms filter out noise and identify high-potential ideas",
    color: "bg-purple-500",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Layers,
    title: "Cluster",
    description: "BERTopic AI groups similar ideas and identifies trends",
    details: "Machine learning clusters related concepts and reveals market patterns",
    color: "bg-green-500",
    gradient: "from-green-400 to-green-600",
  },
  {
    icon: Search,
    title: "Explore",
    description: "Visual dashboard with tag filters and detailed insights",
    details: "Interactive interface helps you discover and validate the perfect opportunity",
    color: "bg-orange-500",
    gradient: "from-orange-400 to-orange-600",
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzYzNjZmMSIgZmlsbE9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-6 py-3 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Idea Discovery to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Market Validation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered system continuously monitors, analyzes, and curates the best SaaS ideas from across the web
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full transform -translate-y-1/2 z-0">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              <div className="grid grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Card
                      className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                        activeStep === index ? "ring-2 ring-blue-500 shadow-xl scale-105" : ""
                      }`}
                    >
                      <CardContent className="p-8 text-center relative overflow-hidden">
                        {/* Background Gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        {/* Step Number */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                          {index + 1}
                        </div>

                        {/* Icon */}
                        <div
                          className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg ${
                            activeStep === index ? "animate-pulse" : ""
                          }`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                        <p className="text-sm text-gray-500 italic">{step.details}</p>

                        {/* Active Indicator */}
                        {activeStep === index && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-gray-500">Step {index + 1}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                        <p className="text-xs text-gray-500 italic">{step.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to discover your next big idea?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of entrepreneurs who trust our AI to find market opportunities
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              Start Exploring Ideas
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
