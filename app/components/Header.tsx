"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Car, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services", hasSubmenu: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Packages", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const subServices = [
    { name: "Accident Repair", href: "/services/accident-repair" },
    { name: "Car Painting", href: "/services/car-painting" },
    { name: "Denting", href: "/services/denting" },
    { name: "Ceramic Coating", href: "/services/ceramic-coating" },
    { name: "Car Detailing", href: "/services/car-detailing" },
    { name: "Car Wash & Clean", href: "/services/car-washing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/90 border-b border-white/10 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="relative h-16 w-64 transition-transform hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Hype Mechanical & Smash Repairs"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <div key={link.name} className="relative group/menu py-2">
                <Link
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasSubmenu && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/menu:rotate-180" />}
                </Link>

                {/* Submenu Dropdown */}
                {link.hasSubmenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0c0c0e]/95 border border-white/10 rounded-xl p-3 shadow-2xl opacity-0 translate-y-3 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300">
                    <div className="grid gap-1">
                      {subServices.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-[11px] font-medium tracking-wide uppercase text-white/60 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border border-white/10 hover:border-primary px-5 py-2.5 rounded-full transition-all text-white bg-white/5 hover:bg-primary"
          >
            <Phone className="h-3.5 w-3.5 text-primary group-hover:text-white" />
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black p-6 space-y-6 absolute top-full left-0 right-0 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-primary"
                >
                  {link.name}
                </Link>
                {link.hasSubmenu && (
                  <div className="pl-4 grid gap-2 border-l border-white/10">
                    {subServices.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-medium text-white/55 hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
