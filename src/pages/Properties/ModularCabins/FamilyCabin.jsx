import { motion } from "framer-motion";

export default function FamilyCabin() {
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
          FAMILY MODULAR CABIN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Spacious, cozy, and crafted for connection — the{" "}
          <strong>Family Cabin</strong>
          offers comfort, safety, and warmth for memorable moments with your
          loved ones.
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
          The <strong>Family Cabin</strong> is your perfect getaway home —
          designed for togetherness, relaxation, and everyday comfort. With 2 to
          3 bedrooms, a spacious kitchen and dining area, and large windows that
          invite natural light, this cabin creates a bright, airy, and
          heartwarming atmosphere that families love.
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
            "2–3 Bedrooms suitable for families or guests",
            "Spacious living room for family bonding and movie nights",
            "Large kitchen with dining space and modern cabinetry",
            "Separated bathroom and shower area for convenience",
            "Energy-efficient windows for natural light and ventilation",
            "Durable exterior steel panels with insulation",
            "Child-safe design and easy-to-clean flooring",
            "Optional outdoor deck or patio area",
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
          Why Families Love This Cabin
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Safe & Spacious:</strong> Designed with family safety,
            comfort, and convenience in mind.
          </li>
          <li>
            <strong>Easy to Maintain:</strong> Durable finishes and smart
            layouts make cleaning simple.
          </li>
          <li>
            <strong>Year-Round Comfort:</strong> Well-insulated for all seasons,
            keeping your family cozy.
          </li>
          <li>
            <strong>Flexible Design:</strong> Customize bedrooms, kitchen
            styles, and layouts to fit your lifestyle.
          </li>
          <li>
            <strong>Energy Efficient:</strong> Uses eco materials that lower
            electricity costs and support sustainability.
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
            "2–3 Bedrooms with wardrobes",
            "Modern kitchen with sink and cabinets",
            "Bathroom with vanity mirror and storage",
            "Energy-efficient LED lighting",
            "Aluminium sliding doors and windows",
            "PVC flooring (color options available)",
            "Waterproof roofing and wall insulation",
            "Electrical and plumbing setup ready",
            "Optional air conditioning installation",
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
              🏡 How many people can stay comfortably?
            </h3>
            <p>
              The Family Cabin comfortably accommodates 4–6 people, perfect for
              families with kids or visiting guests.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🛠️ Is the cabin customizable?
            </h3>
            <p>
              Yes! You can choose between 2 or 3 bedrooms, add an outdoor deck,
              or upgrade materials to match your style and family needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🚚 Can it be relocated?
            </h3>
            <p>
              Absolutely. Like all our modular designs, this cabin is portable
              and can be reinstalled at your preferred location across the USA.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
