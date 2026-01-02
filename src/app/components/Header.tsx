"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

/* ================= DATA ================= */

const solutions = [
  {
    title: "Less Than Truckload",
    href: "/services/ltl",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Full Truckload",
    href: "/services/ftl",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Expedited",
    href: "/services/expedited",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Partial Truckload",
    href: "/services/partial-truckload",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Drayage Freight",
    href: "/services/drayage",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Cross-Border Shipping",
    href: "/services/cross-border",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "International Air",
    href: "/services/international-air",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Trade Show Shipping",
    href: "/services/trade-show",
    image: "/Less Than Truckload.jpg",
  },
];

const industries = [
  {
    title: "Aerospace Logistics",
    href: "/industries/aerospace",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Pharmaceutical Transport",
    href: "/industries/pharmaceutical",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Food Transportation",
    href: "/industries/food",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Medical Logistics",
    href: "/industries/medical",
    image: "/Less Than Truckload.jpg",
  },
  {
    title: "Retail Freight",
    href: "/industries/retail",
    image: "/Less Than Truckload.jpg",
  },
];


/* ================= HEADER ================= */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // desktop
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeTab, setActiveTab] =
    useState<"solutions" | "industries">("solutions");

  // mobile
  const [mobileShippers, setMobileShippers] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full h-1 bg-red-600 z-[60]" />

      <header className="fixed top-1 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo-1.png"
              alt="Logo"
              width={220}
              height={80}
              className="h-40 w-auto object-contain"
              priority
            />
          </Link>

          {/* ========== DESKTOP NAV ========== */}
          <nav className="hidden md:flex items-center gap-10 text-white font-medium text-[16px]">

            <Link href="/" className="hover:text-red-400">
              Home
            </Link>

            {/* SHIPPERS (DESKTOP – FIXED) */}
            <div className="relative"  onMouseEnter={() => setMegaOpen(true)}onMouseLeave={() => setMegaOpen(false)} >
              {/* Trigger */}
              <div className="flex items-center gap-1 cursor-pointer ">
                <Link href="/shipping-services" className="hover:text-red-400">
                  Shippers
                </Link>
                <ChevronDown size={16} />
              </div>

              {/* 🔹 HOVER BUFFER (IMPORTANT) */}
              {megaOpen && (
                <div className="absolute left-0 top-full h-6 w-full" />
              )}

              {/* MEGA MENU */}
              {megaOpen && (
                <div
  className="
    absolute
    left-1/2
    top-[calc(100%+1.5rem)]
    -translate-x-1/2
    w-[1100px]
    max-w-[95vw]
    px-10
    bg-white
    rounded-2xl
    shadow-2xl
    border
    overflow-hidden
  "
>
  <div className="grid grid-cols-[260px_1fr]">


                    {/* SIDEBAR */}
                    <div className="bg-gray-50 p-6 border-r">
                      <button
                        onClick={() => setActiveTab("solutions")}
                        className={`block w-full text-left mb-4 text-lg font-semibold
              ${activeTab === "solutions" ? "text-red-600" : "text-gray-700"}`}
                      >
                        Transportation Solutions
                      </button>

                      <button
                        onClick={() => setActiveTab("industries")}
                        className={`block w-full text-left text-lg font-semibold
              ${activeTab === "industries" ? "text-red-600" : "text-gray-700"}`}
                      >
                        Industries
                      </button>
                    </div>

                    {/* IMAGE GRID */}
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

            <Link href="/carriers" className="hover:text-red-400">
              Carriers
            </Link>
            <Link href="/agents" className="hover:text-red-400">
              Agents
            </Link>
            <Link href="/technology" className="hover:text-red-400">
              Technology
            </Link>
            <Link href="/about" className="hover:text-red-400">
              About Us
            </Link>
            <Link href="/blog" className="hover:text-red-400">
              Blog
            </Link>
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

          <Link href="/" className="block text-lg font-semibold py-3">
            Home
          </Link>

          {/* SHIPPERS */}
          <button
            onClick={() => setMobileShippers(!mobileShippers)}
            className="w-full flex justify-between items-center text-lg font-semibold py-3"
          >
            Shippers
            <ChevronDown
              className={`transition ${mobileShippers ? "rotate-180" : ""}`}
            />
          </button>

          {mobileShippers && (
            <div className="ml-4 mt-2">

              {/* SOLUTIONS */}
              <button
                onClick={() => setMobileSolutions(!mobileSolutions)}
                className="flex justify-between w-full py-2 font-semibold"
              >
                Transportation Solutions
                <ChevronDown
                  className={`transition ${mobileSolutions ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileSolutions &&
                solutions.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1 ml-4"
                  >
                    {item.title}
                  </Link>
                ))}

              {/* INDUSTRIES */}
              <button
                onClick={() => setMobileIndustries(!mobileIndustries)}
                className="flex justify-between w-full py-2 font-semibold mt-4"
              >
                Industries
                <ChevronDown
                  className={`transition ${mobileIndustries ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileIndustries &&
                industries.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1 ml-4"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          )}

          {/* OTHER LINKS */}
          {["Carriers", "Agents", "Technology", "About Us", "Blog"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-lg font-semibold py-3"
              >
                {item}
              </Link>
            )
          )}

          <Link
            href="/contact"
            className="block mt-8 bg-red-600 text-center py-4 rounded-full font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}
