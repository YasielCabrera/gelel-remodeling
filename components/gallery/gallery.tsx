import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const galleryImages = Array.from({ length: 12 }, (_, index) => ({
  src: `/gallery/${index + 1}.jpg`,
  alt: `Gallery Image ${index + 1}`,
  height: "h-14",
}));

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 bg-secondary scroll-mt-0 md:scroll-mt-14"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our recent ceramic tile installation projects
          </p>
        </div>

        {/* Modern CSS Masonry Gallery Grid */}
        <div className="relative max-h-210 overflow-hidden">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[10px]"
            style={{
              gridAutoRows: "10px",
            }}
          >
            {galleryImages.map((image, index) => {
              // Calculate dynamic row span based on image aspect ratio
              const getRowSpan = (height: string) => {
                const heightMap: { [key: string]: number } = {
                  "h-14": 12, // Smaller row span for compact layout
                  "h-16": 14,
                  "h-20": 18,
                  "h-24": 22,
                  "h-28": 26,
                };
                return heightMap[height] || 18;
              };

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  style={{
                    gridRowEnd: `span ${getRowSpan(image.height)}`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={250}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              );
            })}
          </div>

          {/* Gradient Fade Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-secondary via-secondary/90 to-transparent pointer-events-none" />
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/gallery">View more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Gallery };
