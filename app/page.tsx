import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InterestsSection from "@/components/InterestsSection";
import ProjectsSection from "@/components/ProjectsSection";
import VisitCounter from "@/components/VisitCounter";
import SpaceBackground from "@/components/SpaceBackground";
import HeavenBackground from "@/components/HeavenBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden scroll-smooth bg-background text-foreground selection:bg-accent/30">
      <Header />
      <VisitCounter />

      <main className="relative z-10 flex w-full flex-col">
        <HeroSection />
        <AboutSection />
        <InterestsSection />
        <ProjectsSection />
      </main>

      {/* Global Background Elements */}
      <SpaceBackground />
      <HeavenBackground />
    </div>
  );
}

