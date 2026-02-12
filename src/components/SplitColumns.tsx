"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function SplitColumns() {
    const container = useRef(null);
    const leftCol = useRef(null);
    const rightCol = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Create a pinned split effect
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftCol.current, // Pin the left content
                pinSpacing: false,
            });

            // Current implementation is simple split scrolling
            // Text on left stays, images on right scroll

            // Improve with parallax or color change if needed
        }, container);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            title: "Strategy First",
            desc: "Before a single pixel is pushed, we map out the entire customer journey.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Design Systems",
            desc: "Scalable UI kits that ensure consistency across every touchpoint.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Technical Execution",
            desc: "Clean code, fast load times, and semantic markup for SEO dominance.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={container} className="relative bg-[#020617] border-t border-slate-900">
            <div className="flex flex-col lg:flex-row">
                {/* Left Column - Sticky Content */}
                <div ref={leftCol} className="lg:w-1/2 h-screen flex flex-col justify-center px-12 lg:px-24 sticky top-0 bg-[#020617] z-10">
                    <span className="text-secondary font-mono uppercase tracking-widest mb-6 block">Our Approach</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        Crafting <br /> Digital <br /> <span className="text-stroke-white text-transparent">Excellence.</span>
                    </h2>
                    <div className="h-1 w-24 bg-secondary" />
                </div>

                {/* Right Column - Scrollable Images/Content */}
                <div ref={rightCol} className="lg:w-1/2 bg-slate-900 border-l border-slate-800">
                    {features.map((feature, i) => (
                        <div key={i} className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-24 border-b border-slate-800 last:border-0 relative group hover:bg-[#0B1221] transition-colors duration-500">
                            <div className="relative aspect-[4/3] w-full mb-12 overflow-hidden rounded-sm">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-4 group-hover:translate-x-4 transition-transform duration-300">{feature.title}</h3>
                            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-md group-hover:text-slate-300 transition-colors">
                                {feature.desc}
                            </p>
                            <span className="absolute top-12 left-12 text-8xl font-bold text-slate-800 opacity-20 pointer-events-none">0{i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
