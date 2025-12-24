"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Operations Manager",
    company: "Manufacturing Company",
    rating: 5,
    text: "Barrett Cartage has transformed the way we manage freight. Their communication is proactive, and we always know where our shipments stand.",
  },
  {
    name: "Logistics Director",
    company: "Retail Distribution Firm",
    rating: 5,
    text: "Reliable, responsive, and professional. Their team treats our freight like it’s their own business on the line.",
  },
  {
    name: "Supply Chain Manager",
    company: "National Supplier",
    rating: 5,
    text: "We’ve worked with several transportation partners, but none match the consistency and service level Barrett Cartage provides.",
  },
  {
    name: "Warehouse Supervisor",
    company: "E-commerce Brand",
    rating: 4,
    text: "Fast responses, dependable carriers, and zero guesswork. That’s why we continue working with them.",
  },
  {
    name: "Warehouse Supervisor",
    company: "E-commerce Brand",
    rating: 4,
    text: "Fast responses, dependable carriers, and zero guesswork. That’s why we continue working with them.",
  },
  {
    name: "Warehouse Supervisor",
    company: "E-commerce Brand",
    rating: 4,
    text: "Fast responses, dependable carriers, and zero guesswork. That’s why we continue working with them.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-600">
            Client Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Trusted by Businesses That Rely on Freight Accuracy
          </h2>

          <p className="mt-4 text-gray-600">
            Real feedback from logistics professionals who depend on reliable transportation.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mt-20">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gray-50 rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <Quote size={18} className="text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < item.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.company}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
