"use client";

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
    description: "Complete tile flooring installation and repair services for all areas of your home",
    icon: Square,
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 via-blue-50/80 to-indigo-50/50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200/60",
    hoverBorder: "hover:border-blue-400",
    iconBg: "bg-blue-100",
    hoverIconBg: "group-hover:bg-blue-200"
  },
  {
    title: "Flooring",
    description: "Professional tile flooring installation and repair services for any room in your home",
    icon: Home,
    gradient: "from-emerald-500 via-green-600 to-teal-600",
    bgGradient: "from-emerald-50 via-green-50/80 to-teal-50/50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200/60",
    hoverBorder: "hover:border-emerald-400",
    iconBg: "bg-emerald-100",
    hoverIconBg: "group-hover:bg-emerald-200"
  },
  {
    title: "Bath Remodeling",
    description: "Complete bathroom renovation and remodeling services",
    icon: Bath,
    gradient: "from-purple-500 via-violet-600 to-indigo-600",
    bgGradient: "from-purple-50 via-violet-50/80 to-indigo-50/50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200/60",
    hoverBorder: "hover:border-purple-400",
    iconBg: "bg-purple-100",
    hoverIconBg: "group-hover:bg-purple-200"
  },
  {
    title: "Marble & Stone",
    description: "Premium marble and natural stone installation for countertops, floors, and walls",
    icon: Mountain,
    gradient: "from-slate-500 via-gray-600 to-zinc-600",
    bgGradient: "from-slate-50 via-gray-50/80 to-zinc-50/50",
    iconColor: "text-slate-600",
    borderColor: "border-slate-200/60",
    hoverBorder: "hover:border-slate-400",
    iconBg: "bg-slate-100",
    hoverIconBg: "group-hover:bg-slate-200"
  },
  {
    title: "Backsplash",
    description: "Beautiful kitchen and bathroom backsplash installation with various materials",
    icon: BrickWall,
    gradient: "from-amber-500 via-orange-600 to-red-500",
    bgGradient: "from-amber-50 via-orange-50/80 to-red-50/50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200/60",
    hoverBorder: "hover:border-amber-400",
    iconBg: "bg-amber-100",
    hoverIconBg: "group-hover:bg-amber-200"
  },
  {
    title: "Demolition",
    description: "Safe and efficient demolition services for renovation projects",
    icon: Hammer,
    gradient: "from-red-500 via-rose-600 to-pink-600",
    bgGradient: "from-red-50 via-rose-50/80 to-pink-50/50",
    iconColor: "text-red-600",
    borderColor: "border-red-200/60",
    hoverBorder: "hover:border-red-400",
    iconBg: "bg-red-100",
    hoverIconBg: "group-hover:bg-red-200"
  },
  {
    title: "Painting",
    description: "Interior and exterior painting services with quality finishes",
    icon: Paintbrush,
    gradient: "from-pink-500 via-rose-600 to-fuchsia-600",
    bgGradient: "from-pink-50 via-rose-50/80 to-fuchsia-50/50",
    iconColor: "text-pink-600",
    borderColor: "border-pink-200/60",
    hoverBorder: "hover:border-pink-400",
    iconBg: "bg-pink-100",
    hoverIconBg: "group-hover:bg-pink-200"
  }
];

function Services() {
  return (
    <section id="services" className="py-16 bg-background scroll-mt-0 md:scroll-mt-14">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              <Card 
                key={index} 
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${service.bgGradient}
                  border-2 ${service.borderColor} ${service.hoverBorder}
                  hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.02]
                  animate-in fade-in slide-in-from-bottom-8
                  cursor-pointer
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Colored glow shadow */}
                <div className={`
                  absolute -inset-1 bg-gradient-to-br ${service.gradient}
                  opacity-0 group-hover:opacity-20 blur-xl
                  transition-opacity duration-500
                  -z-10
                `} />
                
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.gradient}
                  opacity-0 group-hover:opacity-5
                  transition-opacity duration-500
                `} />
                
                <CardHeader className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`
                      relative p-4 rounded-2xl
                      ${service.iconBg} ${service.hoverIconBg}
                      transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3
                      shadow-lg shadow-black/5
                    `}>
                      <IconComponent 
                        className={`
                          h-8 w-8 ${service.iconColor}
                          transition-all duration-500
                          group-hover:scale-110
                        `} 
                      />
                      {/* Animated pulse ring */}
                      <div className={`
                        absolute inset-0 rounded-2xl
                        ${service.iconBg}
                        opacity-0 group-hover:opacity-30
                        animate-ping
                        transition-opacity duration-500
                      `} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 transition-colors duration-300 group-hover:text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Shine effect */}
                <div className="
                  absolute inset-0 -translate-x-full group-hover:translate-x-full
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transition-transform duration-1000 ease-in-out
                  pointer-events-none
                " />
              </Card>
            );
          })}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.slice(2, 5).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index + 2} 
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${service.bgGradient}
                  border-2 ${service.borderColor} ${service.hoverBorder}
                  hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.02]
                  animate-in fade-in slide-in-from-bottom-8
                  cursor-pointer
                `}
                style={{
                  animationDelay: `${(index + 2) * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Colored glow shadow */}
                <div className={`
                  absolute -inset-1 bg-gradient-to-br ${service.gradient}
                  opacity-0 group-hover:opacity-20 blur-xl
                  transition-opacity duration-500
                  -z-10
                `} />
                
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.gradient}
                  opacity-0 group-hover:opacity-5
                  transition-opacity duration-500
                `} />
                
                <CardHeader className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`
                      relative p-4 rounded-2xl
                      ${service.iconBg} ${service.hoverIconBg}
                      transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3
                      shadow-lg shadow-black/5
                    `}>
                      <IconComponent 
                        className={`
                          h-8 w-8 ${service.iconColor}
                          transition-all duration-500
                          group-hover:scale-110
                        `} 
                      />
                      {/* Animated pulse ring */}
                      <div className={`
                        absolute inset-0 rounded-2xl
                        ${service.iconBg}
                        opacity-0 group-hover:opacity-30
                        animate-ping
                        transition-opacity duration-500
                      `} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 transition-colors duration-300 group-hover:text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Shine effect */}
                <div className="
                  absolute inset-0 -translate-x-full group-hover:translate-x-full
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transition-transform duration-1000 ease-in-out
                  pointer-events-none
                " />
              </Card>
            );
          })}
        </div>

        {/* Third row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(5, 7).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index + 5} 
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${service.bgGradient}
                  border-2 ${service.borderColor} ${service.hoverBorder}
                  hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.02]
                  animate-in fade-in slide-in-from-bottom-8
                  cursor-pointer
                `}
                style={{
                  animationDelay: `${(index + 5) * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Colored glow shadow */}
                <div className={`
                  absolute -inset-1 bg-gradient-to-br ${service.gradient}
                  opacity-0 group-hover:opacity-20 blur-xl
                  transition-opacity duration-500
                  -z-10
                `} />
                
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.gradient}
                  opacity-0 group-hover:opacity-5
                  transition-opacity duration-500
                `} />
                
                <CardHeader className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`
                      relative p-4 rounded-2xl
                      ${service.iconBg} ${service.hoverIconBg}
                      transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3
                      shadow-lg shadow-black/5
                    `}>
                      <IconComponent 
                        className={`
                          h-8 w-8 ${service.iconColor}
                          transition-all duration-500
                          group-hover:scale-110
                        `} 
                      />
                      {/* Animated pulse ring */}
                      <div className={`
                        absolute inset-0 rounded-2xl
                        ${service.iconBg}
                        opacity-0 group-hover:opacity-30
                        animate-ping
                        transition-opacity duration-500
                      `} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 transition-colors duration-300 group-hover:text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Shine effect */}
                <div className="
                  absolute inset-0 -translate-x-full group-hover:translate-x-full
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transition-transform duration-1000 ease-in-out
                  pointer-events-none
                " />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services };
