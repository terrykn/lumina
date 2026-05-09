import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        
        <article className="prose prose-invert lg:prose-xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: May 9, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">1. Acceptance of Terms</h2>
            <p>By using the {siteConfig.name} application or website, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">2. Use of Service</h2>
            <p>You are responsible for any content you create within {siteConfig.name}. You must not use the service for any illegal or unauthorized purposes. For collaborative features, you agree to respect the privacy and data of other participants.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">3. Syncing and Third-Party Services</h2>
            <p>{siteConfig.name} relies on third-party services like iCloud for data synchronization. We are not responsible for any service interruptions or data loss caused by these third-party providers.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">4. Intellectual Property</h2>
            <p>All software, designs, and brand assets associated with {siteConfig.name} are the exclusive property of {siteConfig.name} Inc. and its licensors.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">5. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the service at any time, without notice, for conduct that we believe violates these terms or is harmful to other users.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">6. Changes to Terms</h2>
            <p>We may update these terms from time to time. Your continued use of the service after such changes constitutes your acceptance of the new terms.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
