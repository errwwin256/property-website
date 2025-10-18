import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white via-blue-50 to-gray-50 border-t border-gray-200 text-gray-700 pt-14 pb-8 mt-0">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E40AF] mb-3">
            RealEstatePro
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Helping you find your dream home with trusted listings, expert
            advice, and personalized service across the Philippines.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#1E40AF]">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="h-5 w-5 text-[#2563EB]" /> +63 912 345 6789
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Mail className="h-5 w-5 text-[#2563EB]" />{" "}
            contact@realestatepro.com
          </p>
          <p className="text-gray-600">
            123 Skyline Avenue, Quezon City, Philippines
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#1E40AF]">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-[#2563EB] text-white rounded-full hover:bg-[#1E40AF] transition"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full hover:opacity-90 transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
}
