import HeroSection from '../components/HeroSection';
import TrustedCompanies from '../components/TrustedCompanies';
import ApiModels from '../components/ApiModels';
import FeatureHighlights from '../components/FeatureHighlights';
import ScalabilitySection from '../components/ScalabilitySection';
import Testimonials from '../components/Testimonials';
import FinalCta from '../components/FinalCta';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedCompanies />
      <ApiModels />
      <FeatureHighlights />
      <ScalabilitySection />
      <Testimonials />
      <FinalCta />
    </main>
  );
}