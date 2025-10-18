import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Design the Perfect Living Space */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center bg-white">
        <div className="flex justify-center items-center w-full">
          <img
            src="/images/living-space.png"
            alt="Perfect Living Space"
            className="w-full h-[450px] sm:h-[350px] md:h-[500px] object-cover"
          />
        </div>

        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Design the Perfect Living Space
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Built for your lifestyle — our modular and expandable homes combine
            modern aesthetics with practical design to fit any need, whether
            you’re downsizing, investing, or starting fresh.
          </p>
          <button
            onClick={handleRequestQuote}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Request a Quote
          </button>
        </div>
      </section>

      {/* Why Choose Tiny Homes */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Why Choose <span className="text-blue-600">Tiny Homes?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Discover how our modern, space-efficient designs make comfort and
            luxury accessible for everyone.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Affordable Luxury, Without the Hefty Price Tag",
                icon: "🏠",
              },
              { title: "Quality You Can Trust", icon: "🛠️" },
              { title: "Built for Comfort", icon: "🛋️" },
              { title: "Dedicated Support, Every Step of the Way", icon: "🤝" },
              { title: "World-Class Architecture", icon: "🌍" },
              { title: "No Waiting Around", icon: "⚡" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 shadow-md hover:shadow-xl p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Experience the perfect blend of design, comfort, and
                  sustainability with every build we create.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable Cabins */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center bg-white shadow-sm">
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Expandable Cabins — Modern, Affordable, and Sustainable Living
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover the next generation of housing — our expandable cabins
            offer flexibility for families, travelers, and eco-conscious
            homeowners who value both comfort and sustainability.
          </p>
          <button
            onClick={handleRequestQuote}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Request a Quote
          </button>
        </div>

        <div className="flex justify-center items-center w-full order-1 md:order-2">
          <img
            src="/images/expandable-cabin.png"
            alt="Expandable Cabin"
            className="w-full h-[450px] sm:h-[350px] md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Future Housing Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center bg-white shadow-sm">
        <div className="flex justify-center items-center w-full">
          <img
            src="/images/future-housing.png"
            alt="Future Housing"
            className="w-full h-[450px] sm:h-[350px] md:h-[500px] object-cover"
          />
        </div>

        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Expandable Cabins: The Future of Housing in America
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            With affordable pricing, easy assembly, and stylish architecture,
            expandable cabins are redefining what it means to own a home — a
            perfect blend of innovation and independence.
          </p>
          <button
            onClick={handleRequestQuote}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
