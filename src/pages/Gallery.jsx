import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  // ✅ Fix for GitHub Pages: use base path for images
  const base = import.meta.env.BASE_URL;

  const images = [
    `${base}gallery1.jpg`,
    `${base}gallery2.jpg`,
    `${base}gallery3.jpg`,
    `${base}gallery4.jpg`,
    `${base}gallery5.jpg`,
    `${base}gallery6.jpg`,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hovered, setHovered] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#1E40AF] mb-4">
          Property <span className="text-[#2563EB]">Gallery</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Explore our stunning collection of modern, eco-friendly, and
          customizable homes. Each design reflects our passion for quality
          craftsmanship and sustainable living.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Property ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)} // close when clicking outside
          >
            <div
              className="relative max-w-5xl w-full px-4"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={(e) => e.stopPropagation()} // prevent close when clicking image
            >
              {/* Prev Button */}
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-3 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-3 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>

              {/* Image (swipeable with zoom animation) */}
              <motion.img
                key={images[selectedIndex]}
                src={images[selectedIndex]}
                alt={`Property ${selectedIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x * velocity.x;
                  if (swipe < -500) nextImage();
                  else if (swipe > 500) prevImage();
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
