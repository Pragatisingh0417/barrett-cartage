"use client";

import { motion } from "framer-motion";
import {
  Truck,
  TruckIcon,
  Boxes,
  Zap,
  Presentation,
  Plane,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Less Than Truckload",
    desc: "Leverage our extensive carrier network to find the perfect LTL option, saving you time and money with reliable service and personalized support.",
    icon: Truck,
    link: "/services/ltl",
  },
  {
    title: "Full Truckload",
    desc: "We work hand in hand with you to pair our carrier network with your consistent FTL moves.",
    icon: TruckIcon,
    link: "/services/ftl",
  },
  {
    title: "Partial Truckload",
    desc: "For your 4+ pallet shipments, our volume and partial truckload carriers deliver competitive pricing and tailored solutions.",
    icon: Boxes,
    link: "/services/partial-truckload",
  },
  {
    title: "Expedited",
    desc: "For your most time-sensitive shipments, we collaborate with top-tier expedited carriers to keep freight moving fast.",
    icon: Zap,
    link: "/services/expedited",
  },
  {
    title: "Trade Show",
    desc: "We coordinate with trusted carriers to deliver your trade show freight exactly when and where you need it.",
    icon: Presentation,
    link: "/services/trade-show",
  },
  {
    title: "International Air",
    desc: "Navigate global shipping with ease—our international air solutions connect you with reliable carriers worldwide.",
    icon: Plane,
    link: "/services/international-air",
  },
];

export default function Solutions() {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-600">
            What We Offer
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-red-600">Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Comprehensive transportation solutions designed to move your
            business forward with reliability and precision.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-200"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 transition">
                  <Icon
                    size={30}
                    className="text-red-600 group-hover:text-white transition"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Read more
                  <ArrowRight size={16} />
                </Link>

                {/* Accent bar */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
