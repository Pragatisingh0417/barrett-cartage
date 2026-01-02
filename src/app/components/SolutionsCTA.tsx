"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function SolutionsCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.2),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Let’s Move Your Freight{" "}
          <span className="text-white/90">With Confidence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-5 max-w-2xl mx-auto text-white/90 text-lg"
        >
          Whether you need LTL, FTL, expedited, or specialized logistics,
          our team is ready to design a solution that fits your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-red-600 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>

          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition"
          >
            <Phone size={18} />
            Talk to an Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
