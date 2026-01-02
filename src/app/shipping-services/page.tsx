"use client";

import { motion } from "framer-motion";
import Solutions from "../components/Solutions";
import IndustriesWeServe from "../components/IndustriesWeServe";
import SolutionsCTA from "../components/SolutionsCTA";
import Testimonials from "../components/Testimonials";


export default function ShippingServices(){
    return(
             <main >
 
 <section
      className="
        relative 
        min-h-[85vh] sm:min-h-[90vh] lg:min-h-[100vh]
        flex items-center 
        bg-cover bg-center 
        pt-28 sm:pt-32 lg:pt-36
      "
      style={{ backgroundImage: "url('/truck-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />

      <div className="relative z-10 max-w-8xl px-20">
        <div className="max-w-3xl text-center lg:text-left  md:text-left text-white">

          {/* BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-block mb-4 sm:mb-5 
              px-4 py-2 
              bg-red-600/90 
              text-xs sm:text-sm 
              font-semibold rounded-full
            "
          >
            Trusted Transportation Partner
          </motion.span>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl
              font-extrabold 
              leading-tight 
            "
          >
            Reliable Transportation &{" "}
            <span className="block">Logistics Solutions</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="
              mt-4 sm:mt-6 
              text-sm sm:text-base md:text-lg
              text-gray-200 
              max-w-xl 
              mx-auto lg:mx-0
            "
          >
            Safe, efficient, and on-time transport services built to support
            modern businesses and supply chains.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              mt-8 sm:mt-10 
              flex flex-col sm:flex-row 
              gap-4 
              justify-center lg:justify-start
            "
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="
                bg-red-600 
                px-8 py-4 
                rounded-full 
                font-semibold 
                shadow-lg
                w-full sm:w-auto
                text-center
              "
            >
              Request a Quote
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/services"
              className="
                border border-white 
                px-8 py-4 
                rounded-full 
                font-semibold 
                hover:bg-white hover:text-black 
                transition
                w-full sm:w-auto
                text-center
              "
            >
              Our Services
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section> 
    <Solutions />
    <SolutionsCTA />
    <IndustriesWeServe />
    <Testimonials />
      </main>  
   )}