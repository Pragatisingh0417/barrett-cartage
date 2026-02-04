"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative 
        min-h-screen 
        flex items-center justify-center
        bg-cover bg-center
      "
      style={{ backgroundImage: "url('/banner-3.jpg')" }}
    >
      {/* Solid Brand Overlay (replace color if needed) */}
      <div className="absolute inset-0 bg-[#2f3f67]/90" />

      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Image
          src="/logo bcs 1.png" 
          alt="Brand Logo"
          width={520}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-5xl text-white">

        {/* Optional small tagline */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block mt-10 mb-6 text-sm tracking-widest uppercase opacity-90"
        >
          Premier Transportation Partner
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-5xl
            font-extrabold
            leading-tight
            tracking-wide
          "
        >
          Your One-Call Transportation
          <br />
          <span className="block mt-2">
            & Logistics Solution
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            mt-8 
            text-sm sm:text-base md:text-lg
            text-gray-200
            max-w-3xl
            mx-auto
          "
        >
          Providing a level of customer service and reliability that stands
          out from the rest, and is the hallmark by which we operate every day.
        </motion.p>

        {/* CTA (optional – can remove to match screenshot exactly) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/contact"
            className="
              px-10 py-4
              rounded-full
              bg-red-600
              font-semibold
              shadow-xl
              hover:scale-105
              transition
            "
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}
