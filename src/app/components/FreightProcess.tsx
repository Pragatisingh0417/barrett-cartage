"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Let's Discuss Your Freight Needs",
    desc: "Get a freight quote today, and let’s discuss how we can solve your shipping pain points. We’re here to understand your needs, provide cost-effective solutions, and ensure you get the responsive support you deserve.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "We Craft Your Custom Freight Strategy",
    desc: "With your goals in mind, we’ll craft a personalized freight strategy, backed by our carrier network. We understand that poor customer service threatens your operations and client relationships—you deserve better, and we’re here to deliver it.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Grow Your Business with a Reliable Freight Partner",
    desc: "After implementing your strategy, you’ll experience proactive communication and cost-effective pricing for smoother freight operations. Our team delivers responsive support, allowing you to focus on growing your business without freight disruptions holding you back.",
    icon: TrendingUp,
  },
];

export default function FreightProcess() {
  return (
    <section className="py-28 bg-gray-50">
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
            Our Process
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            A Smarter Way to Manage Your Freight
          </h2>

          <p className="mt-4 text-gray-600">
            Our proven approach ensures clarity, reliability, and long-term success for your freight operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition relative"
              >
                {/* Step Number */}
                <span className="absolute -top-4 left-8 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  {item.step}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-red-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
