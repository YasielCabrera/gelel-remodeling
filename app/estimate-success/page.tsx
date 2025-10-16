import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EstimateSuccessPage() {
  return (
    <section className="py-20 pt-36 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Thank You!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We've received your request for a free estimate. Our team will
              contact you within 24 hours to discuss your ceramic tile
              project.
            </p>
            <Link href="/">
              <Button className="px-8 py-3" variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
