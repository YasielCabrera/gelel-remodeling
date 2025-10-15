import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, CheckCircle } from "lucide-react";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center min-h-[80vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/70" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex max-w-4xl flex-1 flex-col items-start gap-6 lg:gap-8">
            <div className="flex flex-col items-start gap-6">
              {/* Badge */}
              <div className="flex items-center justify-start text-sm font-medium w-fit gap-1 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span>🏠</span>
                Complete Flooring Solutions
              </div>

              {/* Main heading */}
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Expert Flooring
                <span className="block text-muted-foreground">
                  Installation & Remodeling
                </span>
              </h1>

              {/* Description */}
              <p className="text-base text-white/90 lg:text-lg max-w-2xl leading-relaxed">
                Professional flooring installation and remodeling services including ceramic tiles, porcelain tiles, natural stone, and laminate flooring. Expert craftsmanship, competitive pricing, and guaranteed quality workmanship that transforms your home with precision and care.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg h-auto"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start gap-6 text-white/80 text-sm mt-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
