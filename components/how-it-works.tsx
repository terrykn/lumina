"use client";

import { siteConfig } from "@/lib/site-config";
import { BlurFade } from "@/components/ui/blur-fade";
import { Iphone } from "@/components/ui/iphone";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <BlurFade inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
            {siteConfig.howItWorks.title}
          </h2>
        </BlurFade>

        <div className="space-y-16 md:space-y-24">
          {siteConfig.howItWorks.steps.map((step, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Mockup Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <BlurFade inView delay={0.2} direction={idx % 2 === 1 ? "left" : "right"}>
                  <div className="w-80 md:w-64 relative shadow-2xl rounded-[3rem] overflow-hidden">
                    <Iphone src={siteConfig.gallery.screenshots[idx % siteConfig.gallery.screenshots.length].url} />
                  </div>
                </BlurFade>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-4 max-w-lg text-center md:text-left">
                <BlurFade inView delay={0.3}>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    {step.label}
                  </h3>
                </BlurFade>
                <BlurFade inView delay={0.4}>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </BlurFade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
