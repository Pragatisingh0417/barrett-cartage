"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black shadow-sm">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-1.png"
            alt="Barrett Cartage Logo"
            width={100}
            height={20}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/about" className="hover:text-red-600 transition">About</Link>
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <Link href="/bookings" className="hover:text-red-600 transition">Bookings</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Get a Quote
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-6 space-y-5 text-gray-800 font-medium">
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/bookings" onClick={() => setMobileOpen(false)}>Bookings</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-block text-center bg-red-600 text-white px-6 py-3 rounded-full"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
