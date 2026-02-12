"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "@/components/ui/PageHeader";
import MarqueeText from "@/components/ui/MarqueeText";
import { certificatesData, clientsData } from "@/data/general";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutPage() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate Image Reveal
        gsap.from(".about-image", {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-hero",
                start: "top center",
            }
        });
    }, []);

    return (
        <main className="min-h-screen bg-primary">
            <PageHeader
                subtitle="The Agency"
                title="We Are Growth Architects"
                description="We are a specialized performance consultancy partnering with ambitious brands to engineer predictable revenue growth."
            />

            {/* Hero Section with Large Visual */}
            <section className="about-hero container mx-auto px-6 mb-32">
                <div className="relative aspect-video w-full overflow-hidden rounded-3xl mb-16">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team Strategy Session"
                        fill
                        className="about-image object-cover"
                    />
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Results-Obsessed. <br /> Data-Driven.
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                    <p>
                        Marketing is no longer about "guesses". It's about <strong className="text-white">infrastructure</strong>. We believe that sustainable growth comes from a system of rigorous testing, server-side precision, and financial modeling.
                    </p>
                    <p>
                        We operate where <span className="text-secondary border-b border-secondary/30">creativity meets calculus</span>. Identifying the exact levers that turn ad spend into profit for our partners across the MENA region.
                    </p>
                </div>
            </section>

            {/* Stats Row */}
            <section className="border-y border-slate-800 py-20 bg-[#0B1221]">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Ad Spend Managed", value: "$15M+" },
                        { label: "Revenue Generated", value: "$40M+" },
                        { label: "Average ROAS", value: "6.5x" },
                        { label: "Years Experience", value: "10+" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <span className="block text-4xl md:text-6xl font-bold text-white mb-2">{stat.value}</span>
                            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Cards */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">Our DNA</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Why Brands Choose Us</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Data Forensics",
                            desc: "We fix tracking first. If we can't measure it accurately (server-side), we don't spend a dollar on it.",
                            points: ["CAPI Setup", "Attribution Modeling", "Audit"]
                        },
                        {
                            title: "Profit > ROAS",
                            desc: "We don't care about vanity metrics. We optimize for Contribution Margin, LTV, and actual money in the bank.",
                            points: ["Unit Economics", "P&L Analysis", "Scale"]
                        },
                        {
                            title: "Scientific Creative",
                            desc: "We test ads systematically. Iterating based on performance data, not subjective opinions.",
                            points: ["A/B Testing", "UGC", "High-Fidelity Prod"]
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-secondary transition-colors group">
                            <span className="text-6xl font-bold text-slate-800 mb-6 block group-hover:text-secondary/20 transition-colors">0{i + 1}</span>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed h-24">{item.desc}</p>
                            <ul className="space-y-2">
                                {item.points.map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                        <Check size={14} className="text-secondary" /> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <MarqueeText text="CERTIFIED EXPERTS • GLOBAL STANDARDS •" />

            {/* Clients Cloud */}
            <section className="py-32 container mx-auto px-6 text-center">
                <h2 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-16">Trusted By Industry Leaders</h2>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-80">
                    {clientsData.map((client, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold text-slate-500 hover:text-white transition-colors cursor-default select-none">
                            {client.name}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}
