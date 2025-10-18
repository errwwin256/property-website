import {
  Building2,
  Target,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F9FAFB] min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#1E40AF] mb-4 tracking-tight">
            About <span className="text-[#2563EB]">RealEstatePro</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-semibold text-gray-800">RealEstatePro</span>,
            we believe finding your dream home should be exciting — not
            stressful. For over a decade, we’ve helped families and investors
            discover properties that match their lifestyle and goals — from
            modern city apartments to peaceful suburban homes.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#2563EB] w-7 h-7" />
              <h2 className="text-2xl font-semibold text-[#1E40AF]">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To make real estate simple, transparent, and trustworthy. Whether
              you’re buying, selling, or investing, our expert agents and smart
              tools ensure a seamless experience from start to finish.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-[#2563EB] w-7 h-7" />
              <h2 className="text-2xl font-semibold text-[#1E40AF]">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To redefine modern living by connecting people with homes that fit
              their dreams — sustainable, affordable, and designed for comfort
              at every stage of life.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E40AF] mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our company is built on principles that guide every client
            relationship and every home we help build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <HeartHandshake className="w-10 h-10 text-[#2563EB]" />,
              title: "Integrity",
              text: "We operate with honesty and transparency in every transaction.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#2563EB]" />,
              title: "Client Focus",
              text: "Your satisfaction is at the heart of every decision we make.",
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-[#2563EB]" />,
              title: "Reliability",
              text: "We deliver consistent, high-quality service that you can trust.",
            },
          ].map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-[#1E40AF] mb-2">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
