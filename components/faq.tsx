"use client";

import { siteConfig } from "@/lib/site-config";
import { BlurFade } from "@/components/ui/blur-fade";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <BlurFade inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
            {siteConfig.faq.title}
          </h2>
        </BlurFade>

        <div className="space-y-4">
          {siteConfig.faq.items.map((item, idx) => (
            <BlurFade key={idx} inView delay={0.2 + idx * 0.1}>
              <details className="group border rounded-3xl bg-background overflow-hidden cursor-pointer transition-all hover:border-primary/50">
                <summary className="flex items-center justify-between font-bold text-lg list-none p-6 outline-none focus:bg-muted/50 transition-colors">
                  <span className="pr-4">{item.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {item.answer}
                </div>
              </details>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
