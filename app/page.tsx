import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCTA } from "@/components/floating-cta"
import { HeroSection } from "@/components/sections/hero"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { BenefitsSection } from "@/components/sections/benefits"
import { WhatYouGetSection } from "@/components/sections/what-you-get"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { GuaranteeSection } from "@/components/sections/guarantee"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <FAQSection />
        <GuaranteeSection />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  )
}
