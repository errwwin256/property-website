import { motion } from "framer-motion";

export default function PremiumCabin() {
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
          PREMIUM MODULAR CABIN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Experience luxury redefined — where refined interiors meet
          eco-friendly architecture. The <strong>Premium Cabin</strong> blends
          innovation, comfort, and style for those who demand the best of modern
          modular living.
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
            $65,000 (Including Tax)
          </p>
          <button className="bg-[#1E40AF] hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get a Quote
          </button>
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
          The <strong>Premium Cabin</strong> is designed for those who
          appreciate fine living and sustainability. Featuring high-end
          finishes, intelligent space design, and eco-efficient materials, this
          modular cabin brings modern luxury to compact living. Enjoy panoramic
          glass windows, a built-in smart home system, and sleek minimalist
          interiors that create an atmosphere of sophistication.
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
            "Smart Home System with remote control lighting and climate",
            "Open-plan living area with floor-to-ceiling glass walls",
            "Fully-equipped kitchen with quartz countertops",
            "Luxury bathroom with rainfall shower and eco fixtures",
            "Energy-efficient solar power setup (optional)",
            "Premium vinyl flooring and soundproof walls",
            "Modular design — customizable to your lifestyle",
            "Extended deck space for outdoor relaxation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#1E40AF] font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Lifestyle Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl p-10 mb-16 shadow-inner border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">
          Live the Premium Lifestyle
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Every inch of the Premium Cabin is designed for elegance and
          efficiency. Enjoy seamless indoor-outdoor living, natural ventilation,
          and sustainable design elements that reduce your carbon footprint
          without compromising comfort.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "Eco-Friendly",
            "Smart Living",
            "Modern Design",
            "Luxury Finish",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white border border-[#1E40AF] text-[#1E40AF] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
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
            "Built-in Smart Lighting System",
            "Solar-Ready Wiring",
            "Tempered Glass Windows",
            "Rainfall Shower Head",
            "Soft-Close Cabinets",
            "Smart Thermostat",
            "USB Charging Outlets",
            "Energy-efficient Appliances",
            "Luxury Bathroom Fixtures",
            "Noise-Reducing Insulation",
          ].map((item) => (
            <p
              key={item}
              className="border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-[#F3F4F6] transition shadow-sm"
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
              🌿 Is the Premium Cabin energy-efficient?
            </h3>
            <p>
              Absolutely! It’s equipped with energy-saving insulation,
              solar-ready wiring, and eco fixtures designed to minimize energy
              consumption while maximizing comfort.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🏗️ Can I customize the layout?
            </h3>
            <p>
              Yes, our modular design allows full customization — from layout to
              materials and finishes, ensuring your Premium Cabin perfectly
              matches your lifestyle and preferences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
