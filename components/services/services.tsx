import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Square, 
  Home, 
  Bath, 
  Mountain, 
  BrickWall, 
  Hammer, 
  Paintbrush 
} from "lucide-react";

const services = [
  {
    title: "Full Tile Service",
    description: "Complete ceramic tile installation and repair services for all areas of your home",
    icon: Square,
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Flooring",
    description: "Professional ceramic tile flooring installation for any room in your home",
    icon: Home,
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Bath Remodeling",
    description: "Complete bathroom renovation and remodeling services from design to completion",
    icon: Bath,
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Marble & Stone",
    description: "Premium marble and natural stone installation for countertops, floors, and walls",
    icon: Mountain,
    color: "bg-gray-50 border-gray-200 hover:bg-gray-100",
    iconColor: "text-gray-600"
  },
  {
    title: "Backsplash",
    description: "Beautiful kitchen and bathroom backsplash installation with various materials",
    icon: BrickWall,
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    title: "Demolition",
    description: "Safe and efficient demolition services for renovation projects",
    icon: Hammer,
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    iconColor: "text-red-600"
  },
  {
    title: "Painting",
    description: "Interior and exterior painting services with quality finishes",
    icon: Paintbrush,
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    iconColor: "text-pink-600"
  }
];

function Services() {
  return (
    <section id="services" className="py-16 bg-background scroll-mt-0 md:scroll-mt-14">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional ceramic tile installation and remodeling services
          </p>
        </div>
        
        {/* First row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${service.color}`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`h-12 w-12 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.slice(2, 5).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index + 2} className={`hover:shadow-lg transition-all duration-300 ${service.color}`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`h-12 w-12 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Third row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(5, 7).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index + 5} className={`hover:shadow-lg transition-all duration-300 ${service.color}`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`h-12 w-12 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services };
