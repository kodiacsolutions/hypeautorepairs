"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Pickles", href: "/category/pickles" },
    { name: "Spices", href: "/category/spices" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-orange-600 dark:text-orange-500"
        >
          AniBazaar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions (Theme + Cart + Menu) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/cart"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
          >
            <FaShoppingBag size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-black p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-600 dark:text-gray-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
