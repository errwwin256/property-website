import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") alert(`Searching for: ${searchQuery}`);
  };

  const linkClasses = (path) =>
    `text-gray-800 font-semibold tracking-wide transition-colors duration-200 hover:text-blue-600 ${
      location.pathname === path ? "text-blue-600" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}img.png`}
            alt="Site Logo"
            className="h-20 w-auto select-none"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-base relative">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>

          {/* Properties Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => {
              setDropdownOpen(false);
              setSubDropdownOpen(false);
            }}
          >
            <button
              onClick={() => navigate("/properties")}
              className={`flex items-center gap-1 ${linkClasses(
                "/properties"
              )}`}
            >
              Properties <ChevronDown size={16} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 top-full w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transform transition-all duration-300 origin-top ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              {/* Modular Cabins Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setSubDropdownOpen(true)}
                onMouseLeave={() => setSubDropdownOpen(false)}
              >
                <div className="flex justify-between items-center px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700 font-semibold hover:text-blue-600">
                  <span>Modular Cabins</span>
                  <ChevronRight size={14} />
                </div>

                <div
                  className={`absolute top-0 left-[95%] w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transform transition-all duration-300 origin-top-left ${
                    subDropdownOpen
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-95 -translate-x-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/properties/modular-cabins/studio"
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium"
                  >
                    Studio Cabin
                  </Link>
                  <Link
                    to="/properties/modular-cabins/family"
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium"
                  >
                    Family Cabin
                  </Link>
                  <Link
                    to="/properties/modular-cabins/premium"
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium"
                  >
                    Premium Cabin
                  </Link>
                </div>
              </div>

              {/* Other Property Links */}
              {[
                ["A-Frame", "/properties/a-frame"],
                ["Domes", "/properties/domes"],
                ["Outdoor Luxury Tent", "/properties/outdoor-luxury-tent"],
                ["Sauna", "/properties/sauna"],
                ["Space Pod", "/properties/space-pod"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/gallery" className={linkClasses("/gallery")}>
            Gallery
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-full px-4 py-2 ml-4 bg-white focus-within:ring-2 focus-within:ring-blue-200 transition"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400 w-32"
            />
            <button type="submit" aria-label="Search">
              <Search className="h-4 w-4 text-blue-600" />
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800 z-[60]"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* 🔹 Translucent Dark Overlay (smaller + subtle) */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-[1px] z-[65] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu (Half Width) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg transform transition-transform duration-300 z-[70] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-gray-800 hover:text-blue-600"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-start pt-24 px-6 space-y-5 font-semibold text-base text-gray-800">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <details className="w-full">
            <summary className="cursor-pointer hover:text-blue-600 transition-colors">
              Properties
            </summary>

            <div className="mt-2 ml-4 flex flex-col space-y-2 text-gray-700 font-medium">
              <details>
                <summary className="cursor-pointer hover:text-blue-600 transition-colors">
                  Modular Cabins
                </summary>
                <div className="ml-4 mt-1 flex flex-col space-y-1">
                  <Link
                    to="/properties/modular-cabins/studio"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Studio Cabin
                  </Link>
                  <Link
                    to="/properties/modular-cabins/family"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Family Cabin
                  </Link>
                  <Link
                    to="/properties/modular-cabins/premium"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Premium Cabin
                  </Link>
                </div>
              </details>

              {[
                ["A-Frame", "/properties/a-frame"],
                ["Domes", "/properties/domes"],
                ["Outdoor Luxury Tent", "/properties/outdoor-luxury-tent"],
                ["Sauna", "/properties/sauna"],
                ["Space Pod", "/properties/space-pod"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </details>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white w-full mt-8 focus-within:ring-2 focus-within:ring-blue-200 transition"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-400"
            />
            <button type="submit" aria-label="Search">
              <Search className="h-4 w-4 text-blue-600" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
