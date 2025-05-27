"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
            <Mail className="w-4 h-4" />
            Weekly Newsletter
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get Weekly Curated SaaS Ideas</h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Straight from Reddit & HN. Join 5,000+ entrepreneurs who get the best opportunities delivered to their
            inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-green-100 font-medium">
                🎉 Thanks for subscribing! Check your email for confirmation.
              </div>
            </div>
          )}

          <p className="text-blue-200 text-sm mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
        </div>
      </div>
    </section>
  )
}
