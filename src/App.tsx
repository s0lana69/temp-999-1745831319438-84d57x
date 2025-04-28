import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustedCompanies from './components/TrustedCompanies';
// import ApiModels from './components/ApiModels';
import FeatureHighlights from './components/FeatureHighlights';
import ScalabilitySection from './components/ScalabilitySection';
// import PerformanceComparison from './components/PerformanceComparison';
import Testimonials from './components/Testimonials';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import Solutions from './pages/Solutions';
import Prices from './pages/Prices';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <div className="bg-dark text-white relative overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <TrustedCompanies />
              {/* <ApiModels /> */}
              <FeatureHighlights />
              <ScalabilitySection />
              {/* <PerformanceComparison /> */}
              <Testimonials />
              <FinalCta />
            </main>
          } />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;