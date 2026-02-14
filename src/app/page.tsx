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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const container = useRef(null);

  const content = {
    ar: {
      agency: "الوكالة",
      headline: {
        pre: "أنا",
        span: "مهندس النمو",
        post: ". أنا أخطط لتدفقات إيرادات مستدامة للعلامات التجارية الطموحة."
      },
      marquee: "خبير معتمد • معايير عالمية • نتائج حقيقية • "
    },
    en: {
      agency: "The Agency",
      headline: {
        pre: "I Am a",
        span: "Growth Engineer",
        post: ". I architect sustainable revenue streams for ambitious brands."
      },
      marquee: "Certified Expert • Global Standards • Real Results • "
    }
  };
  const t = content[language];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, [language]);

  return (
    <main ref={container} className="min-h-screen bg-primary overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <Hero />

      <section className="py-32 container mx-auto px-6 text-center">
        <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">{t.agency}</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
          {t.headline.pre} <span className="text-transparent text-outline-white">{t.headline.span}</span>{t.headline.post}
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

      <MarqueeText text={t.marquee} />

    </main>
  );
}

