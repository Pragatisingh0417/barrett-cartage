"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      {/* ================= TOP CTA ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-white text-center md:text-left">
            Ready to move your freight with confidence?
          </h3>

          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO + ABOUT */}
        <div>
          <Image
            src="/logo-1.png"
              alt="Logo"
              width={220}
              height={80}
              className="h-40 w-auto object-contain"
              priority
          />

          <p className="text-sm leading-relaxed text-gray-400">
            We provide reliable, efficient, and scalable freight solutions
            tailored to your business. From local shipments to global logistics,
            we move what matters most.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4 mt-6">
            <Link href="#" className="hover:text-white">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter size={18} />
            </Link>
          </div>
        </div>

        {/* SHIPPERS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shippers</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services/ltl" className="hover:text-white">LTL Shipping</Link></li>
            <li><Link href="/services/ftl" className="hover:text-white">FTL Shipping</Link></li>
            <li><Link href="/services/expedited" className="hover:text-white">Expedited Freight</Link></li>
            <li><Link href="/services/international-air" className="hover:text-white">International Air</Link></li>
            <li><Link href="/shippers" className="hover:text-white">All Shipping Solutions</Link></li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Industries</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/industries/aerospace-logistics" className="hover:text-white">Aerospace</Link></li>
            <li><Link href="/industries/pharmaceutical-transport" className="hover:text-white">Pharmaceutical</Link></li>
            <li><Link href="/industries/medical-logistics" className="hover:text-white">Medical</Link></li>
            <li><Link href="/industries/food-transportation" className="hover:text-white">Food & Beverage</Link></li>
            <li><Link href="/industries" className="hover:text-white">View All Industries</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-red-500" />
              <span>
                123 Logistics Way<br />
                Chicago, IL 60601
              </span>
            </li>

            <li className="flex gap-3">
              <Phone size={18} className="text-red-500" />
              <Link href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </Link>
            </li>

            <li className="flex gap-3">
              <Mail size={18} className="text-red-500" />
              <Link href="mailto:sales@yourcompany.com" className="hover:text-white">
                sales@yourcompany.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

          {/* COPYRIGHT */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <span className="flex items-center gap-2">
              Developed by
              <a
                href="https://gemwebservices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-white hover:text-red-500 transition"
              >
                <img
                  src="/gem-logo.webp"
                  alt="Gem Web Services"
                  className="h-5 w-auto"
                />
              </a>
            </span>
          </div>

          {/* POLICY LINKS */}
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
