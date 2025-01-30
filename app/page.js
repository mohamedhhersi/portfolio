"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Container from "@/components/Container";

// Dynamic imports for client components
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-gray-200 h-screen"></div>
});

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-gray-200 h-screen"></div>
});

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-gray-200 h-screen"></div>
});

export default function Home() {
  return (
    <Container>
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-screen"></div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-screen"></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-screen"></div>}>
        <Projects />
      </Suspense>
    </Container>
  );
}
