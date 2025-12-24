"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="py-28 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-5 px-4 py-1 text-sm font-semibold rounded-full bg-red-600/20 text-red-400">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              We Provide Freight Solutions That <br className="hidden md:block" />
              Prioritize Your Business
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Having been in business for over 35 years, we’ve had countless
              conversations with shippers frustrated by freight providers who
              fail to prioritize their needs—missed updates, unanswered calls,
              and service that makes them feel like just another number in the
              system.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              We’ve been refining our approach for over three decades, ensuring
              that even when challenges arise, you’ll always have a reliable
              partner by your side. Once you experience the level of service,
              support, and partnership we offer, you won’t want to return to
              freight providers who don’t value your business.
            </p>
          </motion.div>

          {/* RIGHT CTA BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white text-gray-900 rounded-2xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Solve Your Shipping Challenges?
            </h3>

            <p className="text-gray-600 mb-8">
              Leverage our expertise and experience a freight partnership built
              around reliability, transparency, and long-term success.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Solve Shipping Challenges
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Leverage Our Expertise
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
