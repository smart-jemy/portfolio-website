"use client";

import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats";
import { ProjectsSection } from "@/components/home/projects-section";
import { TechStackSection } from "@/components/home/tech-stack";
import { ServicesSection } from "@/components/home/services";
import { CtaBand } from "@/components/home/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="py-6 sm:py-10">
        <StatsBar />
      </div>
      <ProjectsSection />
      <TechStackSection />
      <ServicesSection />
      <CtaBand />
    </>
  );
}
