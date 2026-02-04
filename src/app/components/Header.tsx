"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

/* ================= DATA ================= */

const solutions = [
  { title: "Less Than Truckload", href: "/shipping-services/ltl-shipping", image: "/LTL-image.jpg" },
  { title: "Full Truckload", href: "/services/ftl", image: "/FTL-image.jpg" },
  { title: "Expedited", href: "/services/expedited", image: "/Expedited-image.jpg" },
  { title: "Partial Truckload", href: "/services/partial-truckload", image: "/Partial Truckload.jpg" },
  { title: "Drayage Freight", href: "/services/drayage", image: "/Drayage Freight-image.jpg" },
  { title: "Cross-Border Shipping", href: "/services/cross-border", image: "/Cross-Border Freight Shipping.jpg" },
  { title: "International Air", href: "/services/international-air", image: "/International-air.jpg" },
  { title: "Trade Show Shipping", href: "/services/trade-show", image: "/trade Show Shipping.jpg" },
    { title: "DHL Express ", href: "/services/trade-show", image: "/DHL Express.jpg" },
        { title: "Flatbed Transportation Services ", href: "/services/trade-show", image: "/Flatbed Transportation Services.jpg" },

            { title: "Temperature Controlled Freight Shipping ", href: "/services/trade-show", image: "/Temperature Controlled Freight Shipping.jpg" },


  
];

const industries = [
  { title: "Aerospace Logistics", href: "/industries/aerospace", image: "/Aerospace Logistics.jpg" },
  { title: "Pharmaceutical Transport", href: "/industries/pharmaceutical", image: "/Pharmaceutical Logistics.jpg" },
  { title: "Food Transportation", href: "/industries/food", image: "/Food Logistics.jpg" },
  { title: "Medical Logistics", href: "/industries/medical", image: "/Medical-logistic.jpg" },
  { title: "Retail Freight", href: "/industries/retail", image: "/Retail Freight.jpg" },
  
];

/* ================= HEADER ================= */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // desktop mega menu
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeTab, setActiveTab] =
    useState<"solutions" | "industries">("solutions");

  // mobile menu states
  const [mobileShippers, setMobileShippers] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);

  /* ===== Scroll Detection ===== */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP RED BAR */}
      <div
        className={`fixed top-0 left-0 w-full h-1 z-[60] transition-opacity
          ${scrolled ? "opacity-100 bg-red-600" : "opacity-0"}
        `}
      />

      {/* HEADER */}
      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-[#020202]/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image
              src={scrolled ? "/logo-1.png" : "/logo bcs 1.png"}
              alt="Logo"
              width={220}
              height={80}
              className="h-40 w-auto object-contain transition-all"
              priority
            />
          </Link>

          {/* ========== DESKTOP NAV ========== */}
          <nav className="hidden md:flex items-center gap-10 text-white font-medium text-[16px]">

            <Link href="/" className="hover:text-red-400">
              Home
            </Link>

            {/* SHIPPERS */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href="/shipping-services" className="hover:text-red-400">
                  Shippers
                </Link>
                <ChevronDown size={16} />
              </div>

              {megaOpen && <div className="absolute left-0 top-full h-6 w-full" />}

              {megaOpen && (
                <div
                  className="
                    absolute left-1/2 top-[calc(100%+1.5rem)]
                    -translate-x-1/2
                    w-[1100px] max-w-[100vw]
                    px-10 bg-white rounded-2xl shadow-2xl border overflow-hidden
                  "
                >
                  <div className="grid grid-cols-[260px_1fr]">

                    {/* SIDEBAR */}
                    <div className="bg-gray-50 p-6 border-r">
                      <button
                        onClick={() => setActiveTab("solutions")}
                        className={`block w-full text-left mb-4 text-lg font-semibold
                          ${activeTab === "solutions" ? "text-red-600" : "text-gray-700"}
                        `}
                      >
                        Transportation Solutions
                      </button>

                      <button
                        onClick={() => setActiveTab("industries")}
                        className={`block w-full text-left text-lg font-semibold
                          ${activeTab === "industries" ? "text-red-600" : "text-gray-700"}
                        `}
                      >
                        Industries
                      </button>
                    </div>

                    {/* GRID */}
                    <div className="p-6 grid grid-cols-4 gap-5">
                      {(activeTab === "solutions" ? solutions : industries).map(
                        (item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group rounded-xl overflow-hidden bg-gray-100 hover:shadow-lg transition"
                          >
                            <div className="relative h-28">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />
                            </div>
                            <div className="p-3 text-sm font-semibold text-gray-900 text-center">
                              {item.title}
                            </div>
                          </Link>
                        )
                      )}
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link href="/carriers" className="hover:text-red-400">Carriers</Link>
            <Link href="/agents" className="hover:text-red-400">Agents</Link>
            <Link href="/technology" className="hover:text-red-400">Technology</Link>
            <Link href="/about" className="hover:text-red-400">About Us</Link>
            <Link href="/blog" className="hover:text-red-400">Blog</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-red-600 hover:bg-red-700
                       text-white px-6 py-2.5 rounded-full font-semibold"
          >
            Get a Quote
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ========== MOBILE MENU ========== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#020202] text-white px-6 py-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setMobileOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <Link href="/" className="block text-lg font-semibold py-3">Home</Link>

          <button
            onClick={() => setMobileShippers(!mobileShippers)}
            className="w-full flex justify-between items-center text-lg font-semibold py-3"
          >
            Shippers
            <ChevronDown className={`transition ${mobileShippers ? "rotate-180" : ""}`} />
          </button>

          {mobileShippers && (
            <div className="ml-4 mt-2">
              <button
                onClick={() => setMobileSolutions(!mobileSolutions)}
                className="flex justify-between w-full py-2 font-semibold"
              >
                Transportation Solutions
                <ChevronDown className={`transition ${mobileSolutions ? "rotate-180" : ""}`} />
              </button>

              {mobileSolutions &&
                solutions.map((item) => (
                  <Link key={item.title} href={item.href} className="block py-1 ml-4">
                    {item.title}
                  </Link>
                ))}

              <button
                onClick={() => setMobileIndustries(!mobileIndustries)}
                className="flex justify-between w-full py-2 font-semibold mt-4"
              >
                Industries
                <ChevronDown className={`transition ${mobileIndustries ? "rotate-180" : ""}`} />
              </button>

              {mobileIndustries &&
                industries.map((item) => (
                  <Link key={item.title} href={item.href} className="block py-1 ml-4">
                    {item.title}
                  </Link>
                ))}
            </div>
          )}

          <Link href="/contact" className="block mt-8 bg-red-600 text-center py-4 rounded-full font-semibold">
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}
