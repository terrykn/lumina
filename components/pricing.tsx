"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";
import { MagicCard } from "@/components/ui/magic-card";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Pricing() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const ctaHref = siteConfig.hero.showWaitlist
    ? `#${siteConfig.waitlist.anchor}`
    : "#hero";

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <BlurFade inView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {siteConfig.pricing.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              {siteConfig.pricing.subtitle}
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.pricing.tiers.map((tier, idx) => (
            <BlurFade key={idx} inView delay={0.2 + idx * 0.1}>
              <MagicCard
                className={cn(
                  "relative border-muted rounded-3xl transition-all duration-300 justify-between",
                  tier.highlighted && "border-transparent shadow-2xl scale-105 z-10"
                )}
                gradientColor={mounted && resolvedTheme === "dark" ? "#262626" : "#D9D9D955"}
                borderGradient={tier.highlighted}
                gradientFrom={tier.highlighted ? "#3b82f6" : undefined}
                gradientTo={tier.highlighted ? "#8b5cf6" : undefined}
              >
                <div className="flex flex-col h-full p-8">
                  {/* TOP SECTION: Name, Price, Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Custom" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* MIDDLE SECTION: Features (Added flex-grow here) */}
                  <div className="flex-grow space-y-4 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM SECTION: The Button */}
                  <Link href={ctaHref} className="w-full mt-auto">
                    {tier.highlighted ? (
                      <div className="flex justify-center w-full">
                        <InteractiveHoverButton className="w-full py-4 text-lg">
                          {tier.cta}
                        </InteractiveHoverButton>
                      </div>
                    ) : (
                      <button className="w-full py-3 px-4 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors cursor-pointer">
                        {tier.cta}
                      </button>
                    )}
                  </Link>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
