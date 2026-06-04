"use client";

import GetInTouch from "@/app/components/GetInTouch";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DrayageShipping() {
  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className=" relative min-h-[55vh] md:min-h-[90vh] flex items-center bg-cover bg-center pt-24 md:pt-28"
        style={{ backgroundImage: "url('/image-2.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white text-center md:text-left">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-3 py-2 md:px-4 bg-red-600 text-xs sm:text-sm font-semibold rounded-full">

Drayage Freight Solutions            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">

Drayage Freight Solutions            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 md:mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto md:mx-0">
              Cost-effective freight solutions for shipments that don’t require a full truck.
              Reliable, flexible, and nationwide coverage.
            </motion.p>

            <div
              className="
          mt-8 flex text-xs sm:text-sm md:text-base gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="bg-red-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-red-70 transition text-center">
                Request a Quote
              </a>

              <a
                href="/services"
                className="border border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-black  transition text-center">
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
              What Is Drayage Freight Solutions?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
We provide fast, reliable drayage services connecting the Port of Houston—including Barbours Cut and Bayport Container Terminals—with major Houston rail yards and regional distribution centers.  As a critical hub for U.S. foreign waterborne tonnage, the Port of Houston handles millions of TEUs annually, serving the energy, chemical, and manufacturing sectors.             </p>
            <p className="text-gray-600 leading-relaxed">
Our drayage operations ensure seamless movement of containers between port terminals and Union Pacific (UP) and BNSF rail ramps, supporting efficient intermodal freight transfers.  With TWIC-certified drivers, UIIA-compliant chassis access, and expertise in hazmat and temperature-sensitive cargo, we deliver fast turnarounds, minimize dwell time, and help avoid demurrage and detention fees. 
            </p>
            <p className="text-gray-600 leading-relaxed">
                Whether it’s import/export container moves, rail-to-door drayage, or expedited port pulls, we’re built to keep your supply chain moving through the heart of Texas logistics.

            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-10 shadow-sm">
            <ul className="space-y-4 font-medium text-gray-800">
              <li>✔ NO cross-border shipping tab
</li>
              <li>✔ NO Agents tab
</li>
              <li>✔ NO DHL tab
</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
            Why Choose Our Drayage Freight Solutions Services?
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

  <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
      <Image
        src="/image-3.jpeg" 
        alt="Drayage Shipping"
        width={600}
        height={400}
        className="rounded-xl object-cover w-full h-full"
      />
    </div>


          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
Not Getting the Support You Need with Your Drayage Shipments?            </h2>
            <p className="text-gray-600 leading-relaxed">
    Having been in business for over years, we’ve had countless conversations with shippers frustrated by freight providers who fail to prioritize their needs—missed updates, unanswered calls, and service that makes them feel like just another number in the system.
</p>
            <p className="text-gray-600 leading-relaxed mb-4 mt-2">
At Diversified Transportation Services, we partner with you to solve your partial drayage shipping challenges, becoming an extension of your traffic department. Our goal is to leverage our decades of expertise in freight transportation to streamline your operations, allowing you to focus on what truly matters—running your business.         </p>
            <p className="text-gray-600 leading-relaxed">
Our drayage operations ensure seamless movement of containers between port terminals and Union Pacific (UP) and BNSF rail ramps, supporting efficient intermodal freight transfers.  With TWIC-certified drivers, UIIA-compliant chassis access, and expertise in hazmat and temperature-sensitive cargo, we deliver fast turnarounds, minimize dwell time, and help avoid demurrage and detention fees. 
            </p>
            
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
            Get a fast, competitive quote for your Drayage Freight Solutions today.
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
