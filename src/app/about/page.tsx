"use client";

import { motion } from "framer-motion";
import GetInTouch from "../components/GetInTouch";

export default function AboutBarrettCartage() {
  return (
    <main className="bg-white">

      {/* ================= HERO WITH BG IMAGE ================= */}
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl"
          >
            Driven by Reliability. <br /> Powered by Experience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            Barrett Cartage delivers dependable cartage and freight solutions
            designed to keep your supply chain moving efficiently and on time.
          </motion.p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Barrett Cartage is a trusted transportation partner specializing
              in cartage, LTL freight, and tailored logistics solutions.
              We focus on safety, precision, and long-term customer relationships.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our experienced team, modern fleet, and customer-first mindset
              allow us to support businesses across diverse industries.
            </p>
          </div>

          {/* Creative Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "On-Time Delivery", value: "99%" },
              { title: "Freight Safety", value: "100%" },
              { title: "Customer Focus", value: "Always" },
              { title: "Service Coverage", value: "Nationwide" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
              >
                <p className="text-3xl font-extrabold text-red-600 mb-2">
                  {item.value}
                </p>
                <p className="font-medium text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver reliable, safe, and efficient transportation solutions
              that help our customers operate smoothly and grow confidently.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading cartage and logistics provider known for integrity,
              operational excellence, and long-term partnerships.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Reliability",
                desc: "Consistent, dependable service you can trust."
              },
              {
                title: "Safety First",
                desc: "Every shipment handled with care and responsibility."
              },
              {
                title: "Integrity",
                desc: "Transparent operations and honest communication."
              },
              {
                title: "Customer Success",
                desc: "Your success drives everything we do."
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
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
<GetInTouch />

      {/* ================= CTA WITH BG IMAGE ================= */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-red-600/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move Your Freight?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with Barrett Cartage for dependable transportation
            and logistics solutions you can trust.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </main>
  );
}
