"use client";

import { motion } from "framer-motion";

export default function CarriersPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Carrier Partnerships Built on Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            At Barrett Cartage, we believe strong carrier relationships are the
            foundation of reliable freight movement. We work with carriers as
            long-term partners — not just capacity.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Carrier-First Approach
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Barrett Cartage is a dependable freight and logistics partner
              supporting carriers across multiple industries and lanes.
              Our goal is simple: keep your trucks moving efficiently while
              respecting your equipment, capacity, and business goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By reducing administrative friction and offering consistent freight
              opportunities, we help carriers operate more profitably and predictably.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <ul className="space-y-4 text-gray-800 font-medium">
              <li>✔ Fair & transparent carrier relationships</li>
              <li>✔ Consistent freight opportunities</li>
              <li>✔ Dedicated operations support</li>
              <li>✔ Long-term partnership mindset</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= PARTNERSHIP BENEFITS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Partnership Benefits
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Beneficial Relationships",
                desc: "We take the time to understand your service specialties, equipment, and preferred lanes."
              },
              {
                title: "Reliable Loads",
                desc: "Our diverse customer base creates steady freight opportunities across industries."
              },
              {
                title: "Rapid & Fair Pay",
                desc: "Flexible payment options designed to support your cash flow."
              },
              {
                title: "Advanced Technology",
                desc: "Modern systems simplify load visibility, tracking, and communication."
              },
              {
                title: "Quality Freight Options",
                desc: "Access to a broad network of shippers to help keep your fleet productive."
              },
              {
                title: "Exceptional Support",
                desc: "Our experienced operations team is proactive, responsive, and carrier-focused."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group bg-white p-8 rounded-2xl border
                  hover:border-red-600 hover:shadow-xl transition
                "
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY & PAY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology That Works for Carriers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our technology platform is designed to simplify day-to-day operations.
              From load visibility to communication and reporting, we remove friction
              so you can focus on driving and delivery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Combined with responsive human support, our systems help reduce delays,
              miscommunication, and downtime.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <ul className="space-y-4 font-medium text-gray-800">
              <li>✔ Real-time load visibility</li>
              <li>✔ Clear communication channels</li>
              <li>✔ Simplified reporting & documentation</li>
              <li>✔ Fast and dependable payment options</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= CTA WITH BG IMAGE ================= */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become a Barrett Cartage Carrier Partner
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Looking for consistent freight, fair treatment, and a logistics partner
            you can rely on? Let’s work together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 px-10 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Carrier Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
