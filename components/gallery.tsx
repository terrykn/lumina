"use client";

import { siteConfig } from "@/lib/site-config";
import { BlurFade } from "@/components/ui/blur-fade";
import { Iphone } from "@/components/ui/iphone";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = siteConfig.gallery.screenshots;

  const getPosition = (idx: number) => {
    const total = screenshots.length;
    let diff = idx - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto mb-12 text-center">
        <BlurFade inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            {siteConfig.gallery.title}
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            {siteConfig.gallery.subtitle}
          </p>
        </BlurFade>
      </div>

      <div className="container px-4 mx-auto relative max-w-7xl">
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Main Display */}
          <div className="relative w-full flex items-center justify-center">
            {screenshots.map((shot, idx) => {
              const pos = getPosition(idx);
              const isVisible = Math.abs(pos) <= 2;

              return (
                <div
                  key={idx}
                  className={cn(
                    "absolute transition-all duration-700 ease-in-out transform w-64 md:w-56",
                    pos === 0 && "opacity-100 translate-x-0 scale-100 z-30 blur-0",
                    pos === 1 && "opacity-70 translate-x-32 md:translate-x-48 scale-90 z-20",
                    pos === -1 && "opacity-70 -translate-x-32 md:-translate-x-48 scale-90 z-20",
                    pos === 2 && "opacity-30 translate-x-56 md:translate-x-[20rem] scale-75 z-10",
                    pos === -2 && "opacity-30 -translate-x-56 md:-translate-x-[20rem] scale-75 z-10",
                    !isVisible && "opacity-0 scale-50 pointer-events-none"
                  )}
                >
                  <BlurFade inView delay={idx * 0.05}>
                    <div className="relative shadow-2xl rounded-[3rem] overflow-hidden">
                      <Iphone src={shot.url} />
                    </div>
                  </BlurFade>
                  <div className={cn(
                    "mt-4 text-center transition-opacity duration-500",
                    pos === 0 ? "opacity-100" : "opacity-0"
                  )}>
                    <p className="text-lg font-bold">{shot.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/50 backdrop-blur-md border hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/50 backdrop-blur-md border hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                idx === currentIndex ? "bg-primary w-8" : "bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
