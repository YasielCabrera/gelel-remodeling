import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const allGalleryImages = [
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Modern bathroom with ceramic tile installation",
    height: "h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Kitchen floor with ceramic tiles",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Bathroom shower with subway tiles",
    height: "h-96",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Living room floor renovation",
    height: "h-72",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Master bathroom tile work",
    height: "h-60",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Kitchen backsplash installation",
    height: "h-84",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Bathroom floor with mosaic tiles",
    height: "h-76",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Entryway ceramic tile installation",
    height: "h-68",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Modern bathroom with large format tiles",
    height: "h-88",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Guest bathroom renovation",
    height: "h-72",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Laundry room tile installation",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Powder room with accent tiles",
    height: "h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Basement floor renovation",
    height: "h-76",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor patio tile work",
    height: "h-84",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    alt: "Commercial bathroom installation",
    height: "h-68",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
      <div className="bg-muted/50 py-12 pt-28">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Complete Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive collection of ceramic tile installation
              projects. From modern bathrooms to elegant kitchen floors, see the
              quality and craftsmanship that sets us apart.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {allGalleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer break-inside-avoid"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us bring the same quality and attention to detail to your next
            project.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/#contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
