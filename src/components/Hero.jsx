import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // npm install framer-motion

export default function Hero() {
  const slides = [
    {
      image: `${import.meta.env.BASE_URL}houses/house1.png`,
      title: "Find Your Dream Home",
      text: "Explore the best properties at unbeatable prices.",
    },
    {
      image: `${import.meta.env.BASE_URL}houses/house2.png`,
      title: "Modern Living Awaits You",
      text: "Discover stylish and affordable homes for your family.",
    },
    {
      image: `${import.meta.env.BASE_URL}houses/house3.png`,
      title: "Invest in Your Future",
      text: "Secure your ideal property with trusted agents.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDragEnd = (e, { offset }) => {
    if (offset.x < -50) nextSlide();
    else if (offset.x > 50) prevSlide();
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 bg-cover bg-center cursor-grab active:cursor-grabbing"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white select-none">
        <motion.h2
          key={slides[current].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h2>

        <motion.p
          key={slides[current].text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl"
        >
          {slides[current].text}
        </motion.p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full transition"
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-white" : "bg-gray-400/70"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
