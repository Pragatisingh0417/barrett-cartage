"use client";

import { motion } from "framer-motion";
import GetInTouch from "../components/GetInTouch";

export default function ContactPage() {
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
            Contact us 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
          Have a question, need a quote, or looking to partner with us?
Our team at Barrett Cartage is ready to help you move freight
with confidence and reliability.

          </motion.p>
        </div>
      </section>
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

    <div className="bg-white p-8 rounded-2xl shadow">
      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
      <p className="text-gray-600">+1 713-408-6521</p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow">
      <h3 className="font-semibold text-lg mb-2">Email</h3>
      <p className="text-gray-600">Matt@barrettcartage.com</p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow">
      <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
      <p className="text-gray-600">Mon – Fri, 9:00 AM – 6:00 PM</p>
    </div>

  </div>
</section>


<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
      How Can We Help?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="p-8 border rounded-2xl hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">Shippers</h3>
        <p className="text-gray-600">
          Request a freight quote or learn more about our transportation services.
        </p>
      </div>

      <div className="p-8 border rounded-2xl hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">Carriers</h3>
        <p className="text-gray-600">
          Interested in partnering with Barrett Cartage? Let’s talk.
        </p>
      </div>

      <div className="p-8 border rounded-2xl hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
        <p className="text-gray-600">
          Questions, support, or business opportunities — we’re here.
        </p>
      </div>

    </div>
  </div>
</section>

     
<GetInTouch />
      

    

     

    </main>
  );
}
