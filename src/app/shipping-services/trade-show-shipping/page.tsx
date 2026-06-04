"use client";

import GetInTouch from "@/app/components/GetInTouch";
import { motion } from "framer-motion";
import Image from "next/image";


export default function TradeShowShipping() {
    return (
        <main className="bg-white">

            {/* ================= HERO SECTION ================= */}
            <section className=" relative min-h-[55vh] md:min-h-[90vh] flex items-center bg-cover bg-center pt-24 md:pt-28"
                style={{ backgroundImage: "url('/trade-show-2image.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl text-white text-center md:text-left">

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block mb-4 px-3 py-2 md:px-4 bg-red-600 text-xs sm:text-sm font-semibold rounded-full">

                            Trade Show Shipping 

                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">

Trade Show Shipping Solutions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 md:mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto md:mx-0">
                            Hassle-Free Trade Show Shipping Services & Logistics.
                            Nationwide Trade Show Shipping & Full Exhibition Logistics            </motion.p>

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
                            What Is Trade show shipping?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
Your TRADESHOW SHIPMENTS are only as good as your LOGISTICS PROVIDER.
We know how stressful it is to get everything to the show, keep it secure, and bring it back; especially when you're already juggling booth design, staffing, and last-minute changes.                        </p>
                        <p className="text-gray-600 leading-relaxed">
That's where BCS comes in.
We offer simple, stress-free tradeshow logistics so you can stop worrying about the details and focus on what matters: connecting with buyers and growing your business.                        </p>
                        <p className="text-gray-600 leading-relaxed">
Standard Delivery & Pickup:
We handle the heavy lifting to and from the show floor, on time, every time.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
Secure Storage:
insured warehousing between events, so your gear is staged ready when you are.
                        </p>
                        <p className="text-gray-800 leading-relaxed">
                            Advanced Receiving:

                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Ship early, arrive ready. Send your materials to our warehouse weeks ahead of the show. We inspect, store, and stage everything so it's prepped for immediate move-in.

                        </p>
                        <div>
                             <ul className="space-y-4 font-medium text-gray-800">
              <li>✔ No more rushing to the dock on move-in morning.
</li>
              <li>✔  We handle off-loading and storage before the show even starts.</li>
              <li>✔ Your booth is ready to go the second doors open.</li>
            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-2xl p-10 shadow-sm">
                        <Image
                            src="/trade-show-3.jpg"
                            alt="International Shipping"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full h-full"
                        />
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
Not Getting the Support You Need with Your Trade Show Shipments?  </h2>
                       <p className="text-gray-600 leading-relaxed">
               Having been in business for over  years, we’ve had countless conversations with shippers frustrated by freight providers who fail to prioritize their needs—missed updates, unanswered calls, and service that makes them feel like just another number in the system.
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
                        Get a fast, competitive quote for your FTL shipment today.
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
