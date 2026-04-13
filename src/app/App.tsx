import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductOverview } from "./components/ProductOverview";
import { AIDiagnosticsExperience } from "./components/AIDiagnosticsExperience";
import { MaintenanceHowItWorks } from "./components/MaintenanceHowItWorks";
import { GarageParts } from "./components/GarageParts";
import { Team } from "./components/Team";
import { ShowcaseCTA } from "./components/ShowcaseCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <HeroSection />
        <ProductOverview />
        <AIDiagnosticsExperience />
        <MaintenanceHowItWorks />
        <GarageParts />
        <Team />
        <ShowcaseCTA />
      </main>
    </div>
  );
}
