import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { isFeatureEnabled } from "@/config";

export default function Home() {
  const isFaqEnabled = isFeatureEnabled('faq');
  
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      {isFaqEnabled && <FAQ />}
    </div>
  );
}
