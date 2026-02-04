"use client";

import GetInTouch from "@/app/components/GetInTouch";
import { motion } from "framer-motion";

export default function LtlShipping() {
  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative 
          min-h-[90vh] 
          flex items-center 
          bg-cover bg-center 
          pt-28
        "
        style={{ backgroundImage: "url('/truck-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-white">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-2 bg-red-600 text-sm font-semibold rounded-full"
            > 
              LTL Freight Services 
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Less Than Truckload (LTL) Shipping
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-200"
            >
              Cost-effective freight solutions for shipments that don’t require a full truck.
              Reliable, flexible, and nationwide coverage.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Request a Quote
              </a>
              <a
                href="/services"
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                View All Services
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Is LTL Shipping?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Less Than Truckload (LTL) shipping is ideal for businesses that need to
              transport freight without filling an entire truck. Your shipment shares
              space with other freight, reducing costs while maintaining reliability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our LTL solutions are designed to deliver flexibility, predictable transit
              times, and complete visibility from pickup to delivery.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-10 shadow-sm">
            <ul className="space-y-4 font-medium text-gray-800">
              <li>✔ Nationwide LTL coverage</li>
              <li>✔ Competitive freight pricing</li>
              <li>✔ Reliable transit times</li>
              <li>✔ Real-time shipment tracking</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
            Why Choose Our LTL Services?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Cost Efficient",
                desc: "Pay only for the space your freight uses."
              },
              {
                title: "Flexible Scheduling",
                desc: "Multiple pickup and delivery options available."
              },
              {
                title: "Secure Handling",
                desc: "Freight handled with care at every stage."
              },
              {
                title: "End-to-End Visibility",
                desc: "Track your shipment in real time."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
            How Our LTL Shipping Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {[
              "Request a Quote",
              "Schedule Pickup",
              "Freight Consolidation",
              "On-Time Delivery",
            ].map((step, i) => (
              <div key={i} className="p-6">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      
<GetInTouch />
{/* ================= CTA ================= */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship Smarter?
          </h2>
          <p className="mb-8 text-lg">
            Get a fast, competitive quote for your LTL shipment today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get Your Quote
          </a>

        </div>
      </section>
    </main>
  );
}
