export default function Services() {
  const services = [
    {
      title: "Freight Transportation",
      desc: "Secure and timely freight delivery across multiple locations.",
    },
    {
      title: "Logistics Management",
      desc: "End-to-end logistics solutions tailored to your business needs.",
    },
    {
      title: "Warehousing",
      desc: "Safe, scalable, and well-managed storage solutions.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our <span className="text-red-600">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
