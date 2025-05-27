"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Indie Hacker",
    company: "TaskFlow",
    content:
      "Found my SaaS idea through this platform. Now making $5k MRR! The AI curation saved me months of research.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    revenue: "$5k MRR",
  },
  {
    name: "Mike Rodriguez",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "The AI curation saves me hours of research every week. I've discovered 3 validated opportunities already.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    revenue: "3 Ideas Validated",
  },
  {
    name: "Emily Johnson",
    role: "Founder",
    company: "GrowthLab",
    content: "Best tool for validating market demand before building. The trend analysis is incredibly accurate.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    revenue: "2 SaaS Launched",
  },
  {
    name: "David Kim",
    role: "Serial Entrepreneur",
    company: "InnovateCo",
    content: "This platform helped me identify a gap in the market that became my most successful venture yet.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    revenue: "$12k MRR",
  },
  {
    name: "Lisa Wang",
    role: "Tech Consultant",
    company: "ConsultPro",
    content: "The quality of ideas and market insights is unmatched. My clients love the data-driven approach.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    revenue: "50+ Clients Served",
  },
  {
    name: "Alex Thompson",
    role: "Startup Founder",
    company: "NextGen Apps",
    content: "From idea discovery to launch in 6 months. The platform's insights were crucial to our success.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    revenue: "$8k MRR",
  },
]

const logos = [
  { name: "Reddit", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Hacker News", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Product Hunt", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Indie Hackers", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Gumroad", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Y Combinator", logo: "/placeholder.svg?height=40&width=100" },
]

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
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
    if (isPlaying && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
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
  }, [isPlaying, isVisible])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], displayIndex: i })
    }
    return visible
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2,000+</span>{" "}
            Indie Hackers
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join the community that's building the next generation of SaaS products with data-driven insights
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { number: "2,000+", label: "Active Users" },
              { number: "$2.5M+", label: "Revenue Generated" },
              { number: "500+", label: "SaaS Launched" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`max-w-7xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </button>

              <button
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-6 min-h-[300px]">
              {getVisibleTestimonials().map((testimonial, index) => (
                <Card
                  key={`${testimonial.name}-${currentIndex}`}
                  className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                    index === 1 ? "md:scale-105 ring-2 ring-blue-500/20" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6 z-10">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                      <p className="text-gray-700 italic pl-6 leading-relaxed">"{testimonial.content}"</p>
                    </div>

                    {/* Revenue Badge */}
                    <div className="mb-4 relative z-10">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {testimonial.revenue}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative z-10">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full ring-2 ring-white shadow-lg"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-center text-gray-600 mb-8 font-medium">Featured and trusted by leading platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
