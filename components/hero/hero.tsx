import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Star, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-cover bg-center min-h-[80vh] flex items-center",
      )}
      style={{
        backgroundImage:
          // "url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')",
          "url('/background.png')",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/15" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex max-w-4xl flex-1 flex-col items-start gap-6 lg:gap-8">
            <div className="flex flex-col items-start gap-6">
              {/* Badge */}
              <div className="flex items-center justify-start text-sm font-medium w-fit gap-1 text-gray-800 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <span>🏠</span>
                Complete Flooring Solutions
              </div>

              {/* Main heading */}
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Expert Flooring
                <span className="block text-gray-800">
                  Installation & Remodeling
                </span>
              </h1>

              {/* Description */}
              <p className="text-base text-gray-800 lg:text-lg max-w-2xl leading-relaxed">
                Professional flooring installation and remodeling services
                including ceramic tiles, porcelain tiles, natural stone, and
                laminate flooring. Expert craftsmanship, competitive pricing,
                and guaranteed quality workmanship that transforms your home
                with precision and care.
              </p>
            </div>

            {/* CTA Button */}

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg h-auto"
              asChild
            >
              <Link href="/#free-estimate">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-6">
              <div className="flex items-center gap-2.5 group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/15 border border-yellow-500/20 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/30 transition-all duration-200">
                  <Star className="h-3.5 w-3.5 text-yellow-600 fill-yellow-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">10+ Years Experience</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300/60" />
              <div className="flex items-center gap-2.5 group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-200">
                  <Award className="h-3.5 w-3.5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">Licensed & Insured</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300/60" />
              <div className="flex items-center gap-2.5 group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15 border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-200">
                  <CheckCircle className="h-3.5 w-3.5 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Fade Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />
    </section>
  );
}

export { Hero };
