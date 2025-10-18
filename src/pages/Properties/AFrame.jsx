import { motion } from "framer-motion";

export default function AFrame() {
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
          A-FRAME MODULAR CABIN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          A stunning architectural design that perfectly blends modern
          minimalism with the beauty of nature. The{" "}
          <strong>A-Frame Cabin</strong> offers a cozy, light-filled retreat
          ideal for mountain, forest, or lakeside living.
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
            $38,000 (Including Tax)
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
          The <strong>A-Frame Cabin</strong> combines traditional alpine style
          with modern efficiency. Its steeply angled roof, natural wood
          finishes, and panoramic windows create a timeless yet contemporary
          look — perfect for those seeking both adventure and tranquility.
        </p>
      </motion.div>

      {/* Design Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
          Design Features
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
          {[
            "Distinctive triangular A-frame roof for durability and snow shedding",
            "Full-height glass façade for panoramic views",
            "Spacious loft area perfect for bedroom or workspace",
            "Natural wood interior with customizable finishes",
            "Eco-insulated walls for optimal energy efficiency",
            "Weather-resistant steel and timber exterior",
            "Open-concept layout maximizing natural light",
            "Compact yet functional footprint ideal for any location",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#1E3A8A] font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Advantages Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl p-10 mb-16 shadow-inner border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
          Why Choose the A-Frame Cabin
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Iconic Design:</strong> Instantly recognizable and adds
            unique character to your property.
          </li>
          <li>
            <strong>Efficient Build:</strong> Prefabricated modular panels
            ensure quick installation with minimal waste.
          </li>
          <li>
            <strong>Adaptable Spaces:</strong> Convert the loft into a guest
            room, office, or cozy reading nook.
          </li>
          <li>
            <strong>Weather-Resilient:</strong> Withstands strong winds and
            heavy rainfall — ideal for mountain climates.
          </li>
          <li>
            <strong>Low Maintenance:</strong> Durable materials keep upkeep
            costs low over time.
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
            "1 Loft Bedroom + 1 Ground Floor Bedroom",
            "Full Kitchen with sink and storage",
            "Bathroom with modern fixtures",
            "Aluminium-framed windows and sliding doors",
            "Thermal and acoustic insulation",
            "LED lighting fixtures throughout",
            "Optional deck or outdoor patio",
            "Complete electrical and plumbing setup",
            "Optional skylight window upgrade",
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
              🏕️ What makes an A-frame unique?
            </h3>
            <p>
              Its triangular silhouette not only creates a distinctive look but
              also helps with efficient water drainage and structural stability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🌿 Can I build this in remote locations?
            </h3>
            <p>
              Absolutely. The modular panels make transportation and assembly
              easy even in forest or mountain areas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🏡 Can I modify the layout?
            </h3>
            <p>
              Yes, you can adjust room configurations, window placements, and
              finishes according to your preference.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
