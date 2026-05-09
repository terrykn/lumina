"use client";

import { siteConfig } from "@/lib/site-config";
import { BlurFade } from "@/components/ui/blur-fade";

export function Waitlist() {
  return (
    <section id={siteConfig.waitlist.anchor} className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl text-center">
        <BlurFade inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            {siteConfig.waitlist.title}
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <p className="text-muted-foreground text-lg mb-8">
            {siteConfig.waitlist.subtitle}
          </p>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className="flex flex-col space-y-4">
            {/* Sibforms Iframe Container */}
            <div className="w-full min-h-[400px] border rounded-3xl bg-muted/10 overflow-hidden relative p-4">
               <iframe 
                  width="100%" 
                  height="400" 
                  src={siteConfig.waitlist.iframeUrl} 
                  allowFullScreen 
                  style={{ 
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    maxWidth: "100%",
                    borderRadius: "2.5rem"
                    
                  }}
                  title="Waitlist Subscription"
                />
            </div>
            <p className="text-xs text-muted-foreground">
              {siteConfig.waitlist.disclaimer}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
