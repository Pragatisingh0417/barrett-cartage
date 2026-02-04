"use client";

import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our shipping services or need a custom quote?
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Service Type
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select a service</option>
                <option>LTL Shipping</option>
                <option>FTL Shipping</option>
                <option>Warehousing</option>
                <option>Express Delivery</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your shipment or inquiry..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  bg-red-600 text-white
                  px-10 py-4
                  rounded-full font-semibold
                  hover:bg-red-700 transition
                  shadow-lg
                "
              >
                Send Message
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
