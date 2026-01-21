import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { ComparisonSection } from "@/components/comparison-section"
import { TargetAudience } from "@/components/target-audience"
import { ImpactSection } from "@/components/impact-section"
import { Security } from "@/components/security"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ComparisonSection />
        <TargetAudience />
        <ImpactSection />
        <Security />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
