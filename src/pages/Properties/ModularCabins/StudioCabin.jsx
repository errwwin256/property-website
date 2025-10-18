import { motion } from "framer-motion";

export default function StudioCabin() {
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
          20FT MODULAR CABIN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700 text-lg"
        >
          <p className="font-semibold">
            <span className="text-[#1E40AF] font-bold text-2xl">
              Initial Price:
            </span>{" "}
            $32,500 (Included Tax)
          </p>
          <button className="bg-[#1E40AF] hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get a Quote
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 space-y-1"
        >
          <p>
            <strong>Weight:</strong> 7000lbs
          </p>
          <p>
            <strong>Size (Expanded):</strong> 5900mm (L) × 6300mm (W) × 2480mm
            (H)
          </p>
          <p>
            <strong>Floor Area:</strong> 398.26 sq ft
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Discover comfort and functionality in our{" "}
          <strong>20ft Modular Cabin</strong> — your perfect compact home
          solution. With two cozy bedrooms, a smart bathroom design, and a
          spacious living area, this cabin blends style and practicality. Built
          with durable, customizable materials, and featuring modern finishes,
          it’s ideal for small families, couples, or mobile setups.
          <br />
          <br />
          💧 Bonus: First-time customers receive a{" "}
          <strong>free water heater!</strong>
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Key Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
          {[
            "Bedrooms: 2 (Ideal for couples or small families)",
            "Toilet: Separate wet and dry zones with vanity mirror",
            "Kitchen: L-shaped layout with quartz countertop",
            "Living Room: Spacious, inviting area for entertainment",
            "Exterior Door: Premium aluminum entrance door",
            "Windows: 6 large + 1 small aluminum windows for natural light",
            "Flooring: Durable PVC flooring (color options available)",
            "Exterior Panels: Steel panels with multiple color choices",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#1E40AF] font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Floor Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Floor Plans</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {["1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom"].map((plan) => (
            <button
              key={plan}
              className="border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {plan}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">
          Benefits of Buying a 20ft Modular Cabin in the USA
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Affordable and Practical:</strong> A cost-efficient housing
            solution.
          </li>
          <li>
            <strong>Built for American Conditions:</strong> Designed to endure
            for 30–40 years.
          </li>
          <li>
            <strong>Portable and Easy to Install:</strong> Transport and
            assemble anywhere.
          </li>
          <li>
            <strong>Customizable:</strong> Choose layout, color, and materials.
          </li>
          <li>
            <strong>Safe and Comfortable:</strong> Fireproof, windproof, and
            waterproof.
          </li>
        </ul>
      </motion.div>

      {/* Inclusions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-16 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Inclusions</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          {[
            "Switchbox",
            "Bedroom Doors",
            "Pull-down Sink Mixer",
            "Vinyl Flooring",
            "Flyscreens",
            "Caravan Plug",
            "Stainless Steel Sink",
            "Overhead Cabinets",
            "Flushing Toilet",
            "Vanity with Storage",
            "LED Lights",
            "Powerpoints with USB",
            "Sliding Windows",
            "Plumbing Connections",
            "Steel Dish Rack",
          ].map((item) => (
            <p
              key={item}
              className="border border-gray-200 rounded-md p-2 bg-gray-50 hover:bg-[#F3F4F6] transition shadow-sm"
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
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              💧 Does your cabin leak?
            </h3>
            <p>
              Not at all. Our modular cabins are fully sealed and built with
              weatherproof steel panels to ensure zero leakage under all
              conditions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🏠 How long will a container home last?
            </h3>
            <p>
              With proper care, the 20ft Modular Cabin can last up to{" "}
              <strong>40 years</strong>. Built from corrosion-resistant steel
              and equipped with modern insulation, it’s designed for durability
              and long-term comfort.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
