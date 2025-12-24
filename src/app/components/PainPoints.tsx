"use client";

import { motion } from "framer-motion";
import {
  Headset,
  Hourglass,
  PhoneOff,
  ClockAlert,
  Handshake,
  MessageCircleOff,
} from "lucide-react";

const items = [
  { icon: Headset, text: "You’re struggling to get support when you need it." },
  { icon: Hourglass, text: "Slow response times are wasting your time and money." },
  { icon: PhoneOff, text: "You’re stuck on hold for too long." },
  { icon: MessageCircleOff, text: "You’re left in the dark with no proactive communication." },
  { icon: ClockAlert, text: "You’re unsure who to turn to when delays occur." },
  { icon: Handshake, text: "You’re struggling to find a freight partner that truly values your business." },
];

export default function PainPoints() {
  return (
    <section className="relative py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-600">
            Common Frustrations
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Tired of Poor Customer Service from Your Freight
            <br className="hidden md:block" />
            Transportation Provider?
          </h2>

          <p className="mt-4 text-gray-600">
            We understand you want to feel valued by your shipping partner, but…
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon className="text-red-600" size={22} />
                </div>

                {/* Text */}
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-700">
            We get it. The cost of poor service from your transportation partner
            is more than an inconvenience—it threatens your operations and
            client relationships.
          </p>

          <p className="mt-3 text-gray-700">
            You deserve responsive, proactive support—and that’s exactly what
            we deliver.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Request a Quote
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
