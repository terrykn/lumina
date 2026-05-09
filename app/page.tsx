import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AppGallery } from "@/components/gallery";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Waitlist } from "@/components/waitlist";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollProgress className="top-0" />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AppGallery />
        <HowItWorks />
        <Pricing />
        {siteConfig.hero.showWaitlist && <Waitlist />}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
