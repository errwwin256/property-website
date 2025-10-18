import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Properties from "./pages/Properties";

// Property subpages
import AFrame from "./pages/Properties/AFrame";
import Domes from "./pages/Properties/Domes";
import OutdoorLuxuryTent from "./pages/Properties/OutdoorLuxuryTent";
import Sauna from "./pages/Properties/Sauna";
import SpacePod from "./pages/Properties/SpacePod";

// Modular Cabins
import StudioCabin from "./pages/Properties/ModularCabins/StudioCabin";
import FamilyCabin from "./pages/Properties/ModularCabins/FamilyCabin";
import PremiumCabin from "./pages/Properties/ModularCabins/PremiumCabin";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white/90">
      <Navbar />

      <main className="flex-grow pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/properties" element={<Properties />} />

          {/* Property Subpages */}
          <Route path="/properties/a-frame" element={<AFrame />} />
          <Route path="/properties/domes" element={<Domes />} />
          <Route
            path="/properties/outdoor-luxury-tent"
            element={<OutdoorLuxuryTent />}
          />
          <Route path="/properties/sauna" element={<Sauna />} />
          <Route path="/properties/space-pod" element={<SpacePod />} />

          {/* Modular Cabins */}
          <Route
            path="/properties/modular-cabins/studio"
            element={<StudioCabin />}
          />
          <Route
            path="/properties/modular-cabins/family"
            element={<FamilyCabin />}
          />
          <Route
            path="/properties/modular-cabins/premium"
            element={<PremiumCabin />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
