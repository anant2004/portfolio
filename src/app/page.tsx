import Image from "next/image";
import { GridBackgroundDemo } from "../../components/GridBackgroundDemo";
import { BentoGridThirdDemo } from "../../components/BentoGrid";
import { ProjectSection } from "../../components/ProjectSection";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <GridBackgroundDemo />
      <BentoGridThirdDemo />
      <ProjectSection />
      <Footer />
      </main>
  );
}
