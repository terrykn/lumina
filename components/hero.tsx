"use client";

import { siteConfig } from "@/lib/site-config";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Iphone } from "@/components/ui/iphone";
import { BlurFade } from "@/components/ui/blur-fade";
import { Ripple } from "@/components/ui/ripple";
import { AuroraText } from "@/components/ui/aurora-text";
import Link from "next/link";
import Image from "next/image";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { Backlight } from "./ui/backlight";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center pt-12 pb-24 overflow-hidden min-h-[90vh]">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-10">
        <BlurFade delay={0.05}>
          {siteConfig.appIcon && (
            <Backlight className="mb-4 mx-auto">
              <div className="relative h-18 w-18 md:h-22 md:w-22 overflow-hidden rounded-[25%] border border-muted shadow-2xl">
                <Image
                  src={siteConfig.appIcon}
                  alt={`${siteConfig.name} Icon`}
                  fill
                  className="object-cover"
                />
              </div>
            </Backlight>
          )}
        </BlurFade>

        <BlurFade delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl">
            <AuroraText>{siteConfig.hero.headline}</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
            {siteConfig.hero.subheadline}
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.hero.showApple && (
                <Link href={siteConfig.hero.appleLink} target="_blank">
                  <InteractiveHoverButton className="px-6">
                    <div className="flex items-center gap-2">
                      <FaApple className="h-5 w-5 fill-current" />
                      <span>App Store</span>
                    </div>
                  </InteractiveHoverButton>
                </Link>
              )}
              {siteConfig.hero.showAndroid && (
                <Link href={siteConfig.hero.androidLink} target="_blank">
                  <InteractiveHoverButton className="px-6">
                    <div className="flex items-center gap-2">
                      <FaGooglePlay className="h-5 w-5 fill-current" />
                      <span>Google Play</span>
                    </div>
                  </InteractiveHoverButton>
                </Link>
              )}
              {siteConfig.hero.showWaitlist && (
                <Link href={`#${siteConfig.waitlist.anchor}`}>
                  <InteractiveHoverButton className="px-6">
                    {siteConfig.hero.cta}
                  </InteractiveHoverButton>
                </Link>
              )}
            </div>
            {siteConfig.hero.showCount === "waitlist" && (
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">
                  <NumberTicker value={siteConfig.hero.waitlistCount} />
                </span>{" "}
                people already waiting
              </p>
            )}
            {siteConfig.hero.showCount === "users" && (
              <p className="text-sm text-muted-foreground">
                Trusted by{" "}
                <span className="font-bold text-foreground">
                  <NumberTicker value={siteConfig.hero.userCount} />+
                </span>{" "}
                {siteConfig.hero.userCountLabel}
              </p>
            )}
          </div>
        </BlurFade>

        <BlurFade delay={0.4} className="w-full mt-20">
          <div className="relative flex justify-center items-center h-[400px]">
            {/* Ripple Background behind primary mockup */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
              <Ripple />
            </div>

            {/* Triple iPhone Mockups */}
            <div className="relative flex items-center justify-center gap-2 md:gap-12">
              {/* Left Mockup */}
              <div className="w-36 md:w-42 rotate-[-10deg] translate-x-8 md:translate-x-12 translate-y-12 transition-all hover:opacity-100 hover:blur-0">
                <Iphone src={siteConfig.hero.secondaryScreenshot} />
              </div>

              {/* Center Mockup (Primary) */}
              <div className="w-52 md:w-56 z-10 drop-shadow-2xl">
                <Iphone src={siteConfig.hero.primaryScreenshot} />
              </div>

              {/* Right Mockup */}
              <div className="w-36 md:w-42 rotate-[10deg] -translate-x-8 md:translate-x-[-3rem] translate-y-12 transition-all hover:opacity-100 hover:blur-0">
                <Iphone src={siteConfig.hero.tertiaryScreenshot} />
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
