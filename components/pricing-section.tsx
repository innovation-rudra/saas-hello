"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Browse 10 ideas/month", "Basic filtering", "Community access", "Email support", "Weekly newsletter"],
    cta: "Start Free",
    popular: false,
    icon: Zap,
    gradient: "from-gray-500 to-gray-600",
    bgGradient: "from-gray-50 to-gray-100",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For serious idea hunters",
    features: [
      "Unlimited idea access",
      "Advanced tagging system",
      "Export to CSV/JSON",
      "Priority support",
      "Trend analytics",
      "Custom alerts",
      "API access",
      "Advanced filters",
    ],
    cta: "Start Pro",
    popular: true,
    icon: Star,
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
  },
  {
    name: "Agency",
    price: "$29",
    period: "per month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Export to Notion/Airtable",
      "White-label reports",
      "Advanced API access",
      "Dedicated support",
      "Custom integrations",
      "Team collaboration",
      "Priority feature requests",
    ],
    cta: "Start Agency",
    popular: false,
    icon: Crown,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full px-6 py-3 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start free and scale as you grow. All plans include access to our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
              Annual
              <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-500/50 shadow-2xl scale-105 lg:scale-110" : "hover:shadow-xl shadow-lg"
              }`}
              style={{
                background: `linear-gradient(135deg, ${plan.bgGradient.replace("from-", "").replace("to-", ", ")})`,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8 relative">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${plan.gradient} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <plan.icon className="w-8 h-8" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {plan.price === "$0"
                        ? "$0"
                        : isAnnual
                          ? `$${Number.parseInt(plan.price.slice(1)) * 10}`
                          : plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{plan.price === "$0" ? "forever" : isAnnual ? "per year" : plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600">{plan.description}</p>

                  {/* Annual Savings */}
                  {isAnnual && plan.price !== "$0" && (
                    <div className="mt-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        Save ${Number.parseInt(plan.price.slice(1)) * 2.4}/year
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0 relative">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

                <div className="relative z-10">
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r ${plan.gradient} flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full h-12 text-lg font-semibold transition-all duration-300 group-hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Additional Info */}
                  <p className="text-center text-xs text-gray-500 mt-4">
                    {plan.price === "$0" ? "No credit card required" : "Cancel anytime"}
                  </p>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              We offer enterprise plans with custom features, dedicated support, and flexible pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
              >
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                Compare All Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
