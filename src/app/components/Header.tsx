"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

/* ================= DATA ================= */



const solutions = [
  { title: "Less Than Truckload", href: "/shipping-services/ltl-shipping", image: "/LTL-image-1.jpg" },
  { title: "Full Truckload", href: "/shipping-services/ftl-shipping", image: "/image-1.jpg" },
  { title: "Expedited", href: "/shipping-services/expedited-shipping", image: "/Expedited-image.jpg" },
  // { title: "Partial Truckload", href: "/shipping-services/partial-truckload", image: "/Partial Truckload.jpg" },
  { title: "Drayage Freight", href: "/shipping-services/drayage-freight-solutions", image: "/image-4.jpg" },
  // { title: "Cross-Border Shipping", href: "/shipping-services/cross-border", image: "/Cross-Border Freight Shipping.jpg" },
  { title: "International Air", href: "/shipping-services/international-air-freight", image: "/International-air.jpg" },
  { title: "Trade Show Shipping", href: "/shipping-services/trade-show-shipping", image: "/trade Show Shipping.jpg" },
  // { title: "DHL Express ", href: "/shipping-services/trade-show", image: "/DHL Express.jpg" },
  { title: "Flatbed Transportation Services ", href: "/shipping-services/flatbed-transportation-solutions", image: "/Flatbed Transportation Services.jpg" },

  // { title: "Temperature Controlled Freight Shipping ", href: "/shipping-services/trade-show", image: "/Temperature Controlled Freight Shipping.jpg" },



];

const industries = [
  {
    title: "Aerospace Logistics",
    image: "/Aerospace Logistics.jpg",
  },
  {
    title: "Pharmaceutical Transport",
    image: "/Pharmaceutical Logistics.jpg",
  },
  {
    title: "Food & Beverage",
    image: "/Food Logistics.jpg",
  },
  {
    title: "Medical Logistics",
    image: "/Medical-logistic.jpg",
  },
  {
    title: "Retail Freight",
    image: "/Retail Freight.jpg",
  },
  {
    title: "Oil & Gas",
    image: "/image-8.jpg",
  },
  {
    title: "Tradeshow",
    image: "/image-6.jpg",
  },
];

const industryContent = {
  "Aerospace Logistics":
    "Transporting aerospace components demands precision, security, and compliance. We specialize in shipping sensitive aircraft parts, engines, and composite materials with strict handling protocols.  Our service includes climate-controlled environments, secure chain-of-custody, and expedited transit options to meet tight production or maintenance schedules.  With expertise in hazmat and oversized cargo, we ensure your aerospace freight arrives safely and on time, compliant with industry regulations.",

  "Pharmaceutical Transport":
    "Ensure the integrity of your pharmaceutical products with our GDP-compliant, temperature-controlled logistics.  We provide 24/7 monitoring, validated packaging, and cold chain solutions for vaccines, biologics, and clinical trial materials.  Our secure, trackable shipments maintain precise temperature ranges from -25°F to 70°F, meeting FDA and FSMA standards. From lab to pharmacy, we protect product efficacy and compliance",

  "Food & Beverage":
    "Keep your perishable goods fresh with our refrigerated and frozen transport solutions.  We maintain strict temperature control for dairy, meat, produce, and beverages, ensuring food safety and compliance with FSMA and HACCP standards.  Our dedicated reefer trailers and sanitized equipment prevent cross-contamination, while just-in-time delivery supports retail and distribution needs",

  "Medical Logistics":
    "We deliver reliable transportation for medical devices, diagnostic equipment, and hospital supplies. Our fleet supports white-glove delivery, liftgate service, and inside delivery for sensitive installations.  With real-time tracking and HIPAA-compliant handling, we ensure critical medical freight reaches healthcare facilities safely, on schedule, and ready for use.",

  "Retail Freight":
    "Support your retail supply chain with timely, damage-free delivery of merchandise, fixtures, and seasonal inventory. We offer flexible LTL and FTL options, final-mile delivery, and store-ready packaging. Our network ensures on-time in-full (OTIF) performance for distribution centers and retail locations, helping you meet consumer demand. ",
  "Oil & Gas":
    "We handle the unique demands of the energy sector with hazmat-certified transport for drilling equipment, pipes, valves, and chemicals. Our team manages oversized and heavy-haul loads with proper permitting, expedited routing, and safety-compliant handling.  Whether onshore or offshore, we deliver reliable logistics for upstream, midstream, and downstream operations.",

  "Tradeshow":
    "Simplify your event logistics with our end-to-end tradeshow freight services.  We manage pickup, packaging, transportation, and delivery of exhibit materials to venues nationwide.  With white-glove handling, on-site coordination, and reverse logistics, we ensure your booth is set up on time and stress-free.  Trust us to handle your time-critical show shipments with precision."

};

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



  const [selectedIndustry, setSelectedIndustry] = useState<{
    title: string;
    content: string;
  } | null>(null);
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
                      {activeTab === "solutions" &&
                        solutions.map((item) => (
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
                            </div>

                            <div className="p-3 text-sm font-semibold text-gray-900 text-center">
                              {item.title}
                            </div>
                          </Link>
                        ))}


                      {activeTab === "industries" &&
                        industries.map((item) => (
                          <button
                            key={item.title}
                            onClick={() =>
                              setSelectedIndustry({
                                title: item.title,
                                content:
                                  industryContent[
                                  item.title as keyof typeof industryContent
                                  ],
                              })
                            }
                            className="group rounded-xl overflow-hidden bg-gray-100 hover:shadow-lg transition"
                          >
                            <div className="relative h-28">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="p-3 text-sm font-semibold text-gray-900 text-center">
                              {item.title}
                            </div>
                          </button>
                        ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* <Link href="/carriers" className="hover:text-red-400">Carriers</Link>
            <Link href="/agents" className="hover:text-red-400">Agents</Link> */}
            <Link href="/about" className="hover:text-red-400">About Us</Link>
            <Link href="/contact" className="hover:text-red-400">Contact Us</Link>

            <Link
              href="https://www.linkedin.com/company/barrett-cartage-systems-inc./"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              Linkedin
            </Link>          </nav>

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
                  <button
                    key={item.title}
                    onClick={() => {
                      setSelectedIndustry({
                        title: item.title,
                        content:
                          industryContent[
                          item.title as keyof typeof industryContent
                          ],
                      });
                      setMobileOpen(false);
                    }}
                    className="block py-1 ml-4 text-left"
                  >
                    {item.title}
                  </button>
                ))}
            </div>
          )}

          <Link href="/contact" className="block mt-8 bg-red-600 text-center py-4 rounded-full font-semibold">
            Get a Quote
          </Link>
        </div>
      )}





      {selectedIndustry && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl p-8 relative shadow-2xl">

            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedIndustry.title}
            </h2>

            <div className="text-gray-700 leading-relaxed">
              {selectedIndustry.content}
            </div>

          </div>
        </div>
      )}
    </>
  );
}


