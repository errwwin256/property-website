import { motion } from "framer-motion";

export default function Sauna() {
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
          SAUNA EXPERIENCE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Reconnect your body and mind with our{" "}
          <strong>Finnish-inspired Sauna</strong> — a sanctuary of warmth,
          relaxation, and natural wellness.
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
            $14,500 (Including Installation)
          </p>
          <button className="bg-[#1E3A8A] hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Book Now
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
          Crafted with precision and care, our <strong>Sauna Experience</strong>{" "}
          blends Scandinavian craftsmanship with modern luxury. Built using
          premium cedar wood and equipped with energy-efficient heaters, each
          sauna provides a serene environment for detoxification, relaxation,
          and rejuvenation — all from the comfort of your home or resort.
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
            "Handcrafted with high-grade cedar or hemlock wood",
            "Energy-efficient electric or wood-burning heaters",
            "Smart digital control panel with temperature presets",
            "Ambient LED lighting for mood and relaxation",
            "Ergonomic seating for comfort and posture support",
            "Tempered glass door with heat-resistant handle",
            "Compact design suitable for indoor or outdoor spaces",
            "Optional aromatherapy and Bluetooth audio integration",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#1E3A8A] font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Health Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl p-10 mb-16 shadow-inner border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
          Health Benefits
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Detoxification:</strong> Flush out toxins naturally through
            deep sweating.
          </li>
          <li>
            <strong>Improved Circulation:</strong> Promotes better blood flow
            and muscle recovery.
          </li>
          <li>
            <strong>Stress Relief:</strong> The calming heat reduces anxiety and
            promotes relaxation.
          </li>
          <li>
            <strong>Skin Health:</strong> Opens pores and rejuvenates skin cells
            for a natural glow.
          </li>
          <li>
            <strong>Enhanced Sleep:</strong> Encourages deeper, more restful
            sleep after each session.
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
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">FAQ</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              🔥 How long does it take to heat up?
            </h3>
            <p>
              Depending on the heater type, most saunas reach the ideal
              temperature (75–90°C) within 15–25 minutes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🪵 Can I choose between electric and wood-fired models?
            </h3>
            <p>
              Yes. You can customize your sauna setup with either an electric
              heater for convenience or a wood-burning unit for a more
              traditional experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🌿 Is it safe for daily use?
            </h3>
            <p>
              Absolutely. With proper hydration, daily 15–20 minute sauna
              sessions are safe and beneficial for most users.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
