import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EyDataFlow from "./components/EYDataFlow";
import EYDeliveryModels from './components/EYDeliveryModels';

import ImageSlider from "./components/ImageSlider";
import LogoSlider from './components/LogoSlider';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <EyDataFlow />
                <EYDeliveryModels />
                <ImageSlider />
                <LogoSlider />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;