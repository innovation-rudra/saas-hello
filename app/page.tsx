import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TrendingIdeas from "@/components/trending-ideas"
import HowItWorks from "@/components/how-it-works"
import PopularTags from "@/components/popular-tags"
import PricingSection from "@/components/pricing-section"
import SocialProof from "@/components/social-proof"
import NewsletterCTA from "@/components/newsletter-cta"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <TrendingIdeas />
      <HowItWorks />
      <PopularTags />
      <PricingSection />
      <SocialProof />
      <NewsletterCTA />
      <Footer />
    </div>
  )
}
