import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Instagram, MessageCircle, MessageSquareMore } from "lucide-react";
import { isFeatureEnabled } from "@/config";
import { cn } from "@/lib/utils";

function Footer() {
  const isFaqEnabled = isFeatureEnabled("faq");

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#gallery", label: "Gallery" },
    ...(isFaqEnabled ? [{ href: "/#faqs", label: "FAQs" }] : []),
    { href: "/#free-estimate", label: "Get a free estimate" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/gelelremodeling/",
      icon: Instagram,
      label: "Instagram",
      color: "from-purple-500 via-pink-500 to-orange-500",
      hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
    },
    {
      href: "https://wa.me/+17864583366",
      icon: MessageCircle,
      label: "WhatsApp",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700",
    },
    {
      href: "sms:+17864583366?body=Hello, I'm interested in your services.",
      icon: MessageSquareMore,
      label: "SMS",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600",
    },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    // { href: "/terms", label: "Terms of Service" },
    // { href: "/cookies", label: "Cookies Settings" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-muted/30 border-t border-border/50 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        {/* Top Section - Desktop: Logo | Navigation | Social Icons */}
        <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:items-center md:space-y-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Gelel Remodeling Logo"
                width={40}
                height={40}
                className="size-10 drop-shadow-lg"
              />
            </div>
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="text-xl font-semibold whitespace-nowrap text-foreground">
                Gelel Remodeling
              </span>
              <span className="text-sm font-light text-muted-foreground whitespace-nowrap -mt-1">
                Flooring services
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-foreground/90",
                  "hover:text-foreground hover:bg-primary/10",
                  "transition-all duration-300 ease-out",
                  "before:absolute before:inset-0 before:rounded-lg before:bg-primary/5",
                  "before:opacity-0 before:scale-95 before:transition-all before:duration-300",
                  "hover:before:opacity-100 hover:before:scale-100",
                  "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2",
                  "after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary/50",
                  "after:transition-all after:duration-300 hover:after:w-3/4",
                  "font-medium text-sm",
                  "transform hover:-translate-y-0.5"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative flex items-center justify-center",
                    "w-11 h-11 rounded-full",
                    "bg-gradient-to-br",
                    social.color,
                    social.hoverColor,
                    "shadow-lg shadow-black/5",
                    "transition-all duration-300 ease-out",
                    "hover:scale-110 hover:shadow-xl hover:shadow-black/10",
                    "hover:-translate-y-1",
                    "active:scale-95"
                  )}
                  aria-label={social.label}
                  style={{
                    animationDelay: `${(navigationLinks.length + index) * 50}ms`,
                  }}
                >
                  <Icon className="h-5 w-5 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-150 group-active:opacity-0 transition-all duration-500" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Separator with gradient */}
        <div className="relative my-8 md:my-10">
          <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background px-4">
              <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground/80 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-2 group md:justify-start md:px-0">
            <span className="transition-colors duration-300 group-hover:text-foreground/70 whitespace-nowrap">
              Copyright © 2025
            </span>
            <Link
              href="/"
              className="font-semibold text-foreground/70 hover:text-primary transition-all duration-300 hover:underline underline-offset-4 whitespace-nowrap break-all sm:break-normal"
            >
              gelelremodeling.com
            </Link>
            <span className="transition-colors duration-300 group-hover:text-foreground/70 whitespace-nowrap">
              . All rights reserved.
            </span>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm text-muted-foreground/70",
                  "hover:text-primary transition-all duration-300",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px",
                  "after:bg-gradient-to-r after:from-primary after:to-transparent",
                  "after:transition-all after:duration-300",
                  "hover:after:w-full",
                  "font-medium whitespace-nowrap"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
}

export { Footer };
