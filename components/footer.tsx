"use client";

import { siteConfig } from "@/lib/site-config";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Link from "next/link";
import { IconRenderer } from "./icon-renderer";

export function Footer() {
  return (
    <footer className="py-12 border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <AnimatedGradientText className="text-xl font-bold">
                {siteConfig.name}
              </AnimatedGradientText>
            </Link>
            <p className="text-muted-foreground max-w-[300px]">
              {siteConfig.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">Legal</h4>
            {siteConfig.footer.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex space-x-6">
            {siteConfig.footer.socials.map((social, idx) => (
              <Link 
                key={idx} 
                href={social.link} 
                target="_blank" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconRenderer name={social.icon} className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          {siteConfig.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
