import { motion } from "framer-motion";

export default function Domes() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mb-4"
        >
          ECO DOMES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Experience futuristic living with our <strong>Eco Domes</strong> — a
          perfect blend of sustainable design, natural light, and panoramic
          views. Designed for comfort, strength, and harmony with the
          environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <p className="font-semibold text-lg text-gray-700">
            <span className="text-[#1E3A8A] font-bold text-2xl">
              Starting Price:
            </span>{" "}
            $45,000 (Including Tax)
          </p>
          <button className="bg-[#1E3A8A] hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get a Quote
          </button>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The <strong>Eco Dome</strong> is a modern interpretation of the
          classic geodesic structure — engineered for energy efficiency,
          structural strength, and aesthetic beauty. Its spherical shape evenly
          distributes stress, making it highly resistant to wind, snow, and
          earthquakes. Perfect for resorts, eco-villages, or off-grid living.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Key Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
          {[
            "Geodesic dome structure for maximum strength and stability",
            "360° panoramic windows for stunning natural views",
            "Sustainable materials — insulated and energy-efficient",
            "Quick installation with prefabricated panels",
            "Customizable sizes (from 5m to 12m diameter)",
            "Natural ventilation and skylight integration",
            "Optional solar panels and rainwater system",
            "Weatherproof, rustproof, and eco-friendly materials",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#1E3A8A] font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl p-10 mb-16 shadow-inner border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
          Why Choose Eco Domes
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Energy Efficient:</strong> Natural air circulation reduces
            heating and cooling costs.
          </li>
          <li>
            <strong>Eco-Friendly:</strong> Built from recyclable and non-toxic
            materials.
          </li>
          <li>
            <strong>All-Season Durability:</strong> Withstands snow, wind, and
            rain with minimal maintenance.
          </li>
          <li>
            <strong>Customizable Interiors:</strong> Perfect for glamping sites,
            studios, or family homes.
          </li>
          <li>
            <strong>Quick Setup:</strong> Modular design enables assembly within
            days.
          </li>
        </ul>
      </motion.div>

      {/* Inclusions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Inclusions</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          {[
            "Steel frame structure",
            "Transparent dome skylight",
            "Thermal insulation layer",
            "PVC flooring with wood finish",
            "LED lighting system",
            "Bathroom and shower kit",
            "Smart ventilation fans",
            "Sliding entrance door",
            "Optional air conditioning",
          ].map((item) => (
            <p
              key={item}
              className="border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition shadow-sm"
            >
              {item}
            </p>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">FAQ</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              🌞 How long does it take to build a dome?
            </h3>
            <p>
              Most Eco Domes can be assembled within 3–5 days depending on size
              and customization options.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🌿 Are Eco Domes energy-efficient?
            </h3>
            <p>
              Yes! Their natural airflow and insulation keep interiors cool in
              summer and warm in winter, significantly reducing energy costs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🏡 Can I customize the design?
            </h3>
            <p>
              Absolutely — you can choose materials, color schemes, interior
              layouts, and add solar systems or skylights.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
