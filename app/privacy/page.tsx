import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        
        <article className="prose prose-invert lg:prose-xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 9, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">1. Introduction</h2>
            <p>At {siteConfig.name}, we are committed to protecting your privacy. This policy explains how we handle your data when you use the {siteConfig.name} app and our synchronization services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">2. Data Synchronization and iCloud</h2>
            <p>{siteConfig.name} uses iCloud to keep your reminders in sync across all your devices. Your data is stored in your private iCloud database and is not accessible by us. Encryption ensures that your tasks, lists, and attachments remain secure during transit and while at rest.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">3. Location-Based Reminders</h2>
            <p>If you choose to use location-based reminders, {siteConfig.name} will access your location data. This information is processed locally on your device to trigger notifications when you arrive at or leave a specific place. We do not track or store your location history on our servers.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">4. Collaboration and Shared Lists</h2>
            <p>When you share a list with others, participants can see the reminders, subtasks, and attachments within that list. Your name and contact information associated with your account may be visible to other participants in the shared list to facilitate collaboration.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">5. Waitlist Information</h2>
            <p>For users joining our waitlist, we collect your email address solely to provide updates on app availability and beta testing opportunities. We do not sell or share this information with third parties.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8">6. Your Choices</h2>
            <p>You can manage your data by editing or deleting reminders directly in the app. You can also disable iCloud sync or location permissions in your device settings at any time.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
