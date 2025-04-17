import HeroSection from "../../widgets/HeroSection/HeroSection";
import Recommendations from "../../widgets/Recommendations/Recommendations";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Recommendations Section */}
      <Recommendations />
    </div>
  );
}
