import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const GALLERY_IMAGES_COUNT = 16;

const allGalleryImages = Array.from(
  { length: GALLERY_IMAGES_COUNT },
  (_, index) => ({
    src: `/gallery/${index + 1}.jpg`,
    alt: `Gallery Image ${index + 1}`,
  })
);

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
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={250}
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
            <Link href="/#free-estimate">Get Your Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
