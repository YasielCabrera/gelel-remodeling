import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <FAQ />
    </div>
  );
}
