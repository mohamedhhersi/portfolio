"use client";
import { Suspense, lazy } from "react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));

// Loading component with proper height and animation
const LoadingSection = () => (
  <div className="min-h-screen animate-pulse bg-gray-100/50 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <Container>
      {/* Hero loads immediately */}
      <Hero />
      
      {/* Other sections load when scrolled into view */}
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Projects />
      </Suspense>
    </Container>
  );
}
