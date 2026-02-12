"use client";
import React, { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import AboutIntro from "@/components/AboutIntro";
import SplitColumns from "@/components/SplitColumns";
import ServicesPreviewList from "@/components/ServicesPreviewList";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import SnapPortfolio from "@/components/SnapPortfolio";
import IndustriesSection from "@/components/IndustriesSection";
import MarqueeText from "@/components/ui/MarqueeText";
import BlogSection from "@/components/BlogSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-primary overflow-x-hidden">
      <Hero />

      <section className="py-32 container mx-auto px-6 text-center">
        <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">The Agency</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
          We are <span className="text-transparent text-outline-white">Growth Architects</span>. We engineer predictable revenue streams for ambitious brands.
        </h2>
      </section>
      <AboutIntro />

      <SplitColumns />

      <LogoTicker />

      {/* Process Steps (Symmetrical Layout) */}
      <ProcessWorkflow />

      {/* Snap Portfolio (High Impact) */}
      <SnapPortfolio />

      {/* Symmetrical List Layout */}
      <ServicesPreviewList />

      <IndustriesSection />

      <BlogSection />

      <MarqueeText />

    </main>
  );
}
