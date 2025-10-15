import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Modern bathroom with ceramic tile installation",
    height: "h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Kitchen floor with ceramic tiles",
    height: "h-24",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Bathroom shower with subway tiles",
    height: "h-36",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Living room floor renovation",
    height: "h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Master bathroom tile work",
    height: "h-24",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Kitchen backsplash installation",
    height: "h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Bathroom floor with mosaic tiles",
    height: "h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Entryway ceramic tile installation",
    height: "h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Modern bathroom with large format tiles",
    height: "h-32",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-secondary scroll-mt-0 md:scroll-mt-14">
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
            className="grid gap-4 auto-rows-[10px]"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gridAutoRows: "10px",
            }}
          >
            {galleryImages.map((image, index) => {
              // Calculate dynamic row span based on image aspect ratio
              const getRowSpan = (height: string) => {
                const heightMap: { [key: string]: number } = {
                  "h-36": 14, // 144px / 10px = 14
                  "h-40": 16, // 160px / 10px = 16
                  "h-44": 18, // 176px / 10px = 18
                  "h-48": 19, // 192px / 10px = 19
                  "h-52": 21, // 208px / 10px = 21
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
                  <img
                    src={image.src}
                    alt={image.alt}
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
