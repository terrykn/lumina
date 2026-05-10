import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link
          href="/"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <article className="prose dark:prose-invert lg:prose-xl max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {siteConfig.terms}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
