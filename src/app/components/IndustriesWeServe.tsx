"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Pill,
  Sparkles,
  Utensils,
  Palette,
  HardHat,
  Cog,
  Cpu,
  Leaf,
  Store,
  Stethoscope,
  Truck,
  Car,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Aerospace Logistics Services",
    desc: "Time-critical, precision logistics for aerospace manufacturers, OEMs, and MRO operations.",
    icon: Plane,
    image: "/industries/aerospace.webp",
    link: "/industries/aerospace",
  },
  {
    title: "Pharmaceutical & Pharma Transport",
    desc: "Compliant, temperature-controlled solutions ensuring product integrity throughout transit.",
    icon: Pill,
    image: "/industries/pharma.webp",
    link: "/industries/pharmaceutical",
  },
  {
    title: "Cosmetics",
    desc: "Secure and efficient transportation for cosmetics, raw materials, and finished products.",
    icon: Sparkles,
    image: "/industries/cosmetics.webp",
    link: "/industries/cosmetics",
  },
  {
    title: "Bakery & Restaurant Equipment Shipping",
    desc: "Specialized handling for commercial kitchen and food-service equipment.",
    icon: Utensils,
    image: "/industries/restaurant-equipment.webp",
    link: "/industries/bakery-restaurant",
  },
  {
    title: "Fine Art Shipping & Logistics",
    desc: "White-glove transport for high-value art with maximum care and security.",
    icon: Palette,
    image: "/industries/fine-art.webp",
    link: "/industries/fine-art",
  },
  {
    title: "Building & Construction Materials",
    desc: "Reliable freight solutions for heavy, oversized, and time-sensitive construction materials.",
    icon: HardHat,
    image: "/industries/construction.webp",
    link: "/industries/construction",
  },
  {
    title: "Industrial Machinery Transport",
    desc: "End-to-end logistics for large-scale machinery and industrial equipment.",
    icon: Cog,
    image: "/industries/industrial-machinery.webp",
    link: "/industries/industrial-machinery",
  },
  {
    title: "High Tech & Electronics Logistics",
    desc: "Secure shipping for sensitive, high-value electronics and technology equipment.",
    icon: Cpu,
    image: "/industries/electronics.webp",
    link: "/industries/high-tech",
  },
  {
    title: "Vitamin & Supplements Shipping",
    desc: "Careful handling and compliant transport for nutraceutical products.",
    icon: Leaf,
    image: "/industries/vitamins.webp",
    link: "/industries/vitamins-supplements",
  },
  {
    title: "Retail Freight Solutions",
    desc: "Scalable logistics designed to support fast-moving retail supply chains.",
    icon: Store,
    image: "/industries/retail.webp",
    link: "/industries/retail",
  },
  {
    title: "Medical Logistics Solutions",
    desc: "Critical medical shipments handled with precision, compliance, and urgency.",
    icon: Stethoscope,
    image: "/industries/medical.webp",
    link: "/industries/medical",
  },
  {
    title: "Food Transportation Solutions",
    desc: "Temperature-sensitive food logistics ensuring freshness and safety.",
    icon: Truck,
    image: "/industries/food.webp",
    link: "/industries/food",
  },
  {
    title: "Auto Part Freight Shipping",
    desc: "Efficient transport for automotive parts supporting just-in-time operations.",
    icon: Car,
    image: "/industries/auto-parts.webp",
    link: "/industries/auto-parts",
  },
  {
    title: "Chemical Transportation Solutions",
    desc: "Regulated, safe, and compliant transport for chemical products.",
    icon: FlaskConical,
    image: "/industries/chemicals.webp",
    link: "/industries/chemicals",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-600">
            Industries We Serve
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Industry-Focused <span className="text-red-600">Logistics Expertise</span>
          </h2>

          <p className="mt-4 text-gray-600">
            We understand that every industry has unique logistics challenges.
            Our tailored freight solutions ensure reliability, compliance, and peace of mind.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl bg-white overflow-hidden border border-gray-200 hover:border-red-300"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-white/90" />
                <div className="absolute inset-0 opacity-[0.06] bg-black" />

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-red-600" size={22} />
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Left Accent */}
                <span className="absolute left-0 top-0 h-0 w-1 bg-red-600 group-hover:h-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
