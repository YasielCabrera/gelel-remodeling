"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { isFeatureEnabled } from "@/config";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isFaqEnabled = isFeatureEnabled('faq');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="border-border bg-background sticky top-0 isolate z-50 border-b px-4 py-2.5 md:fixed md:top-4 md:left-4 md:right-4 md:w-auto md:max-w-6xl md:mx-auto md:rounded-xl md:border md:p-3 md:shadow-lg">
        <div className="m-auto flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6">
          <div className="flex justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Gelel Remodeling Logo"
                width={32}
                height={32}
                className="size-8"
              />
              <div className="hidden md:flex flex-col leading-tight">
                <span className="text-xl font-semibold whitespace-nowrap">
                  Gelel Remodeling
                </span>
                <span className="text-sm font-light text-muted-foreground whitespace-nowrap -mt-1">
                  Flooring services
                </span>
              </div>
            </Link>
            <Button
              onClick={toggleMobileMenu}
              className="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 px-4 py-2 has-[>svg]:px-3 flex size-9 items-center justify-center md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </Button>
          </div>
          <div className="hidden w-full flex-row justify-end gap-5 md:flex">
            <div className="flex flex-col gap-1 md:flex-row">
              <Link href="/#services">
                <Button variant="ghost">Services</Button>
              </Link>
              <Link href="/#gallery">
                <Button variant="ghost">Gallery</Button>
              </Link>
              {isFaqEnabled && (
                <Link href="/#faqs">
                  <Button variant="ghost">FAQs</Button>
                </Link>
              )}
              <Link href="/#free-estimate">
                <Button variant="default">Get free estimate</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Gelel Remodeling Logo"
                width={32}
                height={32}
                className="size-8"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold whitespace-nowrap">
                  Gelel Remodeling
                </span>
                <span className="text-sm font-light text-muted-foreground whitespace-nowrap -mt-1">
                  Flooring services
                </span>
              </div>
            </div>
            <Button
              onClick={closeMobileMenu}
              variant="ghost"
              size="icon"
              className="size-8"
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-4">
            <nav className="flex flex-col gap-2">
              <Link
                href="/#services"
                onClick={closeMobileMenu}
                className="block"
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left h-12"
                >
                  Services
                </Button>
              </Link>
              <Link
                href="/#gallery"
                onClick={closeMobileMenu}
                className="block"
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left h-12"
                >
                  Gallery
                </Button>
              </Link>
              {isFaqEnabled && (
                <Link href="/#faqs" onClick={closeMobileMenu} className="block">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left h-12"
                  >
                    FAQs
                  </Button>
                </Link>
              )}
              <Link
                href="/#free-estimate"
                onClick={closeMobileMenu}
                className="block mt-4"
              >
                <Button variant="default" className="w-full h-12">
                  Get free estimate
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export { Navbar };
