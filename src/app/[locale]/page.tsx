"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import CustomConfig from "@/components/CustomConfig";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Methodology />
      <Services />
      <Differentiators />
      <CustomConfig />
      <CTASection />
    </main>
  );
}
