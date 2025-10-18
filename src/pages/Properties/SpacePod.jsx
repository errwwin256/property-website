import { motion } from "framer-motion";

export default function SpacePod() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-[#1E40AF] mb-4"
        >
          SPACE POD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Step into the future with our <strong>Space Pod</strong> — a sleek,
          self-contained living space combining technology, design, and comfort
          for modern explorers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <p className="font-semibold text-lg text-gray-700">
            <span className="text-[#1E40AF] font-bold text-2xl">
              Starting Price:
            </span>{" "}
            $24,900 (Smart System Included)
          </p>
          <button className="bg-[#1E40AF] hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Pre-Order Now
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
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The <strong>Space Pod</strong> represents the next evolution of
          minimalistic living. Designed for eco-conscious individuals, it
          combines smart home systems, modular construction, and futuristic
          aesthetics. Ideal for urban rooftops, forests, deserts, or even
          off-grid retreats — the Space Pod adapts wherever you go.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Key Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
          {[
            "Sleek aerodynamic design inspired by spacecraft architecture",
            "Smart glass windows with privacy tint control",
            "Fully automated climate and lighting systems",
            "Integrated solar panels with backup battery storage",
            "Modular interiors with foldable furniture and storage",
            "Touchscreen wall panels for system control",
            "360° panoramic skylight for stargazing",
            "Compact yet luxurious bathroom and kitchenette setup",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#1E40AF] font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Smart Technology Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl p-10 mb-16 shadow-inner border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">
          Smart Technology Integration
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>AI Climate Control:</strong> Adjusts temperature based on
            your habits and preferences.
          </li>
          <li>
            <strong>Voice Command System:</strong> Operate lighting, music, and
            blinds hands-free.
          </li>
          <li>
            <strong>Energy Monitoring:</strong> Track your power usage in
            real-time via mobile app.
          </li>
          <li>
            <strong>Smart Security:</strong> Equipped with biometric access and
            360° exterior cameras.
          </li>
        </ul>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">FAQ</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              🚀 Can the Space Pod operate off-grid?
            </h3>
            <p>
              Yes. The Space Pod is designed for full off-grid functionality,
              powered by solar energy and equipped with an independent water
              system.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🪐 How big is the living space?
            </h3>
            <p>
              Each unit measures approximately 7m (L) × 3.5m (W) × 2.8m (H),
              offering 250 sq ft of efficient, ergonomic space.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🌍 Can it withstand extreme weather?
            </h3>
            <p>
              Absolutely. Built with aerospace-grade insulation and
              weather-resistant panels, the Space Pod can endure harsh climates
              from deserts to snowy peaks.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
