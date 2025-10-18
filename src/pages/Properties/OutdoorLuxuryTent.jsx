import { motion } from "framer-motion";

export default function OutdoorLuxuryTent() {
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
          OUTDOOR LUXURY TENT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Experience nature without compromise — our{" "}
          <strong>Outdoor Luxury Tent</strong> combines glamping comfort with
          timeless style. Perfect for resorts, retreats, or private getaways.
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
            $28,000 (Including Tax)
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
          Step into a world where luxury meets the wild. Our{" "}
          <strong>Outdoor Luxury Tent</strong> offers a perfect retreat for
          travelers seeking elegance amidst nature. Built with durable,
          weather-resistant fabrics and solid wood or steel frames, these tents
          redefine the meaning of outdoor comfort — equipped with premium
          furnishings, modern bathrooms, and panoramic windows.
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
            "Luxury glamping experience with hotel-style interiors",
            "Waterproof and UV-resistant double-layer fabric",
            "Panoramic viewing windows and private deck options",
            "Premium wooden or steel frame for durability",
            "Optional bathroom and kitchenette integration",
            "Easy assembly and portability for any location",
            "Air-conditioning and heating system compatible",
            "Elegant interior design with warm lighting ambiance",
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
          Why Choose Outdoor Luxury Tents
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Eco-Friendly:</strong> Sustainable materials that blend with
            nature.
          </li>
          <li>
            <strong>Luxury Anywhere:</strong> Turn any landscape into a
            five-star getaway.
          </li>
          <li>
            <strong>All-Season Design:</strong> Insulated and weatherproof for
            comfort all year round.
          </li>
          <li>
            <strong>Flexible Setup:</strong> Ideal for resorts, retreats, and
            glamping businesses.
          </li>
          <li>
            <strong>Low Maintenance:</strong> Built for longevity and easy care.
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
            "Canvas roof & walls with insulation",
            "Wooden or steel frame structure",
            "Luxury king-sized bed & furniture",
            "Wood flooring and carpet options",
            "Smart lighting system",
            "Sliding entrance door",
            "Optional bathroom set with shower",
            "Ventilation windows with mosquito mesh",
            "Solar or electric power system ready",
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
              🏕️ How long does it take to install?
            </h3>
            <p>
              Most luxury tents can be set up within 2–3 days depending on size
              and terrain. Our team provides installation assistance for smooth
              assembly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              🌦️ Can it withstand strong weather?
            </h3>
            <p>
              Yes! The double-layer fabric and reinforced frame design make it
              resistant to wind, rain, and UV exposure — perfect for all
              climates.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              💡 Is it suitable for business use?
            </h3>
            <p>
              Absolutely. These tents are ideal for luxury glamping resorts,
              Airbnb properties, and eco-tourism ventures seeking premium guest
              experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
