import { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#1E40AF] mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
          Have a question or want to request a quote? Fill out the form below
          and our team will get back to you shortly.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col text-left">
            <label className="text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col text-left">
            <label className="text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-left md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col text-left md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col text-left md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] resize-none outline-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#2563EB] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info — separated */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700">
          <div className="flex flex-col items-center">
            <Phone className="text-[#2563EB] w-6 h-6 mb-2" />
            <p className="font-medium text-[#1E40AF]">Phone</p>
            <p className="text-gray-600">+63 912 345 6789</p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="text-[#2563EB] w-6 h-6 mb-2" />
            <p className="font-medium text-[#1E40AF]">Email</p>
            <p className="text-gray-600">info@tinyhomes.com</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="text-[#2563EB] w-6 h-6 mb-2" />
            <p className="font-medium text-[#1E40AF]">Address</p>
            <p className="text-gray-600">123 Tiny Homes Ave, Quezon City</p>
          </div>
        </div>
      </div>
    </section>
  );
}
