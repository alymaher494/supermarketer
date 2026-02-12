"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Building2, ShoppingBag, Stethoscope, Utensils,
    Sofa, Scale, Code2, Shirt, Landmark, GraduationCap
} from "lucide-react";
import Image from "next/image";

const industries = [
    {
        title: "Real Estate",
        desc: "Generating high-intent leads for developers and mega-projects.",
        icon: Building2,
        color: "bg-blue-900/20",
        stats: "$150M+ Sales",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "E-Commerce",
        desc: "Scaling DTC brands in Oud, Fashion, & Electronics.",
        icon: ShoppingBag,
        color: "bg-green-900/20",
        stats: "6.5x ROAS",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Medical",
        desc: "Patient acquisition strategies for Clinics & Hospitals.",
        icon: Stethoscope,
        color: "bg-cyan-900/20",
        stats: "+40% Bookings",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
    },
    {
        title: "F&B",
        desc: "Driving foot traffic and online orders for Restaurants.",
        icon: Utensils,
        color: "bg-orange-900/20",
        stats: "High Volume",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Furniture",
        desc: "Optimizing ad spend and creative for high-ticket home items.",
        icon: Sofa,
        color: "bg-yellow-900/20",
        stats: "+45% Efficiency",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Legal",
        desc: "Positioning Law Firms as market authorities.",
        icon: Scale,
        color: "bg-slate-800/50",
        stats: "Authority Building",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Software / SaaS",
        desc: "B2B lead generation and funnel optimization.",
        icon: Code2,
        color: "bg-indigo-900/20",
        stats: "Qualified Leads",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Fashion",
        desc: "Trend-driven campaigns for Women's Clothing & Accessories.",
        icon: Shirt,
        color: "bg-pink-900/20",
        stats: "Brand Scaling",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "Government",
        desc: "National awareness campaigns with massive reach.",
        icon: Landmark,
        color: "bg-slate-700/50",
        stats: "3M+ Reach",
        image: "https://images.unsplash.com/photo-1558486012-818148f97521?q=80&w=2066&auto=format&fit=crop"
    },
    {
        title: "Education",
        desc: "Filling seats for specialized colleges and programs.",
        icon: GraduationCap,
        color: "bg-teal-900/20",
        stats: "+20% Enrollments",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function IndustriesSection() {
    const container = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Horizontal Scroll Logic
        const ctx = gsap.context(() => {
            if (!slider.current) return;

            const totalWidth = slider.current.scrollWidth;
            const windowWidth = window.innerWidth;

            gsap.to(slider.current, {
                x: () => -(totalWidth - windowWidth + 100),
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: () => `+=${totalWidth / 2}`, // Shorter scroll distance for better feel
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative min-h-screen bg-[#050b1d] overflow-hidden flex flex-col justify-center py-20">

            <div className="absolute top-10 left-6 md:left-24 z-10 w-full max-w-lg mb-10">
                <span className="text-secondary font-mono text-xs uppercase tracking-widest block mb-4">
                    Sectors We Dominate
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-heading text-white bg-clip-text">
                    Industry Expertise
                </h2>
            </div>

            <div ref={slider} className="flex gap-8 pl-6 md:pl-24 pr-24 items-center h-[600px] mt-20 md:mt-0 w-max">
                {industries.map((ind, i) => (
                    <div
                        key={i}
                        className={`relative w-[350px] md:w-[450px] h-[500px] md:h-[600px] rounded-2xl border border-slate-800 overflow-hidden group hover:border-secondary transition-all duration-500`}
                    >
                        {/* Background Image */}
                        <Image
                            src={ind.image}
                            alt={ind.title}
                            fill
                            className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                                    <ind.icon size={28} />
                                </div>
                                <span className="text-6xl font-bold text-transparent text-outline-white opacity-40">
                                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                </span>
                            </div>

                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold text-white mb-2">{ind.title}</h3>
                                <p className="text-slate-300 mb-6 font-light leading-relaxed">
                                    {ind.desc}
                                </p>
                                <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                                    <span className="text-xs uppercase tracking-widest text-slate-400">Impact</span>
                                    <span className="font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{ind.stats}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
