"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesPreviewList() {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const rows = gsap.utils.toArray('.service-row');
        rows.forEach((row: any) => {
            gsap.fromTo(row,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    const services = [
        { num: "01", title: "Strategy & Audit", desc: "Unlocking hidden revenue through data forensics." },
        { num: "02", title: "Paid Acquisition", desc: "Scalable campaigns on Meta, Google, & TikTok." },
        { num: "03", title: "Funnel & CRO", desc: "Converting clicks into loyal, high-LTV customers." },
        { num: "04", title: "Tracking & Data", desc: "Server-side precision in a cookie-less world." },
    ];

    return (
        <section ref={container} className="py-32 container mx-auto px-6">
            <div className="mb-16 border-b border-slate-800 pb-8">
                <span className="block text-secondary font-mono text-sm uppercase tracking-widest mb-2">Our Expertise</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white uppercase">Growth Engines</h2>
            </div>

            <div>
                {services.map((s, i) => (
                    <div key={i} className="service-row group relative py-12 border-b border-slate-800 transition-colors hover:bg-white/5 cursor-pointer">
                        <div className="flex flex-col md:flex-row items-baseline gap-6 md:gap-12 px-4 relative z-10">
                            <span className="text-xl font-mono text-slate-500 group-hover:text-secondary transition-colors">/{s.num}</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:pl-4 transition-all duration-300 flex-1">
                                {s.title}
                            </h3>
                            <p className="text-slate-400 max-w-md text-lg md:text-right group-hover:text-white transition-colors">
                                {s.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
