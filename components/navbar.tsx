"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Smartphone } from "lucide-react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

export function Navbar() {
  const ctaHref = siteConfig.hero.showWaitlist 
    ? `#${siteConfig.waitlist.anchor}` 
    : "#hero";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          {siteConfig.appIcon ? (
            <div className="relative h-8 w-8 overflow-hidden rounded-[25%] border border-muted shadow-sm">
              <Image
                src={siteConfig.appIcon}
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <Smartphone className="h-6 w-6" />
          )}
          <AnimatedGradientText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </AnimatedGradientText>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href={ctaHref}>
            <InteractiveHoverButton className="h-10 px-6">
              <span className="text-sm font-bold">
                {siteConfig.hero.cta}
              </span>
            </InteractiveHoverButton>
          </Link>
        </div>

        {/* Mobile CTA only */}
        <div className="md:hidden">
          <Link href={ctaHref}>
            <InteractiveHoverButton>
              Join
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}
