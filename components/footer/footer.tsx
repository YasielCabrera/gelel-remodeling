import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, MessageCircle, MessageSquareMore } from "lucide-react";
import { isFeatureEnabled } from "@/config";

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
    },
    {
      href: "https://wa.me/+17864583366",
      icon: MessageCircle,
      label: "WhatsApp",
    },
    {
      href: "sms:+17864583366?body=Hello, I'm interested in your services.",
      icon: MessageSquareMore,
      label: "SMS",
    },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    // { href: "/terms", label: "Terms of Service" },
    // { href: "/cookies", label: "Cookies Settings" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section - Desktop: Logo | Navigation | Social Icons */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Gelel Remodeling Logo"
              width={32}
              height={32}
              className="size-8"
            />
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="text-xl font-semibold whitespace-nowrap">
                Gelel Remodeling
              </span>
              <span className="text-sm font-light text-muted-foreground whitespace-nowrap -mt-1">
                Flooring services
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-foreground hover:text-foreground/80 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-6" />

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            Copyright © 2025 gelelremodeling.com. All rights reserved.
          </div>

          {/* Legal Links */}
          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
