import React from "react";
import {
  Bell,
  Coffee,
  Users,
  Heart,
  Dumbbell,
  Waves,
  Leaf,
  MonitorCheck,
} from "lucide-react";

export default function Property() {
  const base = import.meta.env.BASE_URL; // ✅ Fix for GitHub Pages paths

  const facilities = [
    {
      title: "Reception",
      desc: "Experience a warm welcome with our professional reception services, ensuring your visit starts with comfort and care.",
      icon: Users,
    },
    {
      title: "Lobby",
      desc: "Relax in a sophisticated environment where modern interiors and natural lighting create a luxurious atmosphere.",
      icon: Coffee,
    },
    {
      title: "Lounge",
      desc: "A stylish and cozy space to unwind, meet with friends, or enjoy a moment of quiet comfort after a long day.",
      icon: Bell,
    },
    {
      title: "Spa & Massage",
      desc: "Rejuvenate your body and mind with professional spa treatments and massages designed for ultimate relaxation.",
      icon: Heart,
    },
    {
      title: "Fitness Center",
      desc: "Stay active in our fully equipped gym with state-of-the-art machines and wellness-focused training areas.",
      icon: Dumbbell,
    },
    {
      title: "Swimming Pool",
      desc: "Enjoy a refreshing dip in our crystal-clear pool surrounded by greenery and modern lounging spaces.",
      icon: Waves,
    },
    {
      title: "Yoga Studio",
      desc: "Find peace and balance through yoga sessions in our serene studio, designed to enhance your well-being.",
      icon: Leaf,
    },
    {
      title: "Conference Room",
      desc: "Host meetings or private events in our modern, fully equipped conference room with premium amenities.",
      icon: MonitorCheck,
    },
  ];

  const activities = [
    {
      title: "Sport and Leisure",
      desc: "Improve and care for your health with activities at Spa & Massage, Fitness Center, Swimming Pool, Aerial Yoga, and more in Eco Park.",
      img: `${base}images/activities-sport.jpg`,
    },
    {
      title: "Gastronomy",
      desc: "A chain of culinary restaurants with European and Asian styles distributed among residential areas. Enjoy top-rated spots like Lobster Bar, Coffee House, and Gaucho Bistro.",
      img: `${base}images/activities-food.jpg`,
    },
    {
      title: "Entertainment",
      desc: "Explore premium entertainment options like 4D Cinema, Premium Playground, Oceanarium, Lectorium, and Art Classes.",
      img: `${base}images/activities-entertainment.jpg`,
    },
    {
      title: "Shopping",
      desc: "Enjoy diverse shopping—from luxury brands to local favorites, including Florist, Aroma Boutique, EcoMart, Cosmetics, and Adidas.",
      img: `${base}images/activities-shopping.jpg`,
    },
    {
      title: "Other Services",
      desc: "Discover many more essential and lifestyle services surrounding Ecoland Residence—everything you need in one vibrant community.",
      img: `${base}images/activities-services.jpg`,
    },
  ];

  return (
    <section className="bg-[#F5F5F4] text-gray-700 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-4 text-center">
          20+ Premium and Essential Services in{" "}
          <span className="text-[#2563EB]">Ecoland Park</span>
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Contributing to enhancing residents' life experience through comfort,
          convenience, and world-class facilities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#1E40AF]/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                <div className="relative flex items-start gap-4">
                  <div className="bg-[#2563EB]/10 p-3 rounded-full">
                    <Icon className="w-8 h-8 text-[#1E40AF]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-5xl font-extrabold text-[#1E40AF] mb-12">
            Activities in <span className="text-[#2563EB]">Ecoland</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
            {activities.map((activity, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#1E40AF]/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activity.desc}
                  </p>
                  <button className="inline-block px-6 py-2 bg-[#2563EB] text-white rounded-full text-sm font-semibold shadow-md hover:bg-[#1E40AF] hover:shadow-lg transition-all duration-300">
                    Explore More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
