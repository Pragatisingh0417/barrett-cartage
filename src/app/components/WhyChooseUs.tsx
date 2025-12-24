"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const points = [
  {
    title: "On-Time Delivery",
    desc: "We operate with precision and accountability to ensure your freight arrives on schedule—every time.",
    icon: Truck,
  },
  {
    title: "Industry Expertise",
    desc: "Our experienced logistics professionals understand the complexities of freight and supply chain operations.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Tracking",
    desc: "Stay informed with modern tracking tools that provide real-time visibility and proactive updates.",
    icon: CheckCircle,
  },
  {
    title: "Customer-First Support",
    desc: "You’ll never feel like just another number—our team delivers responsive, human-first service.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm font-semibold rounded-full bg-white text-red-600">
            Why Choose Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-red-600">
            Why Businesses Trust{" "}
            <span className="text-white">Barrett Cartage</span>
          </h2>

          <p className="text-gray-200 max-w-xl mb-10 text-sm sm:text-base">
            We don’t just move freight—we become a trusted extension of your
            operations, delivering reliability, transparency, and peace of
            mind.
          </p>

          {/* Points */}
          <div className="space-y-6">
            {points.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Icon size={22} className="text-red-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1 text-red-600">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          {/* Image */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/whychooseus.jpg"
              alt="Reliable freight and logistics services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Floating Stats Card */}
          <div className="
            absolute 
            bottom-4 left-1/2 -translate-x-1/2 
            lg:left-6 lg:translate-x-0
            bg-white rounded-xl shadow-lg p-5 sm:p-6 
            max-w-xs
          ">
            <p className="text-2xl sm:text-3xl font-extrabold text-red-600">
              35+ Years
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Delivering reliable freight solutions nationwide
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
