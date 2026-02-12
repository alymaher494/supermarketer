"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ServicesBentoGrid() {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".bento-item", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });

    }, []);

    return (
        <section ref={container} className="py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Comprehensive <br /> <span className="text-slate-500">Growth Modules.</span>
                        </h2>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center gap-2 text-white hover:text-secondary transition-colors group">
                        View All Services
                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-black transition-all">
                            <ArrowUpRight size={20} />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {/* Card 1: Large Feature */}
                    <div className="bento-item md:col-span-2 row-span-1 bg-[#0B1221] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6">01</div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">Performance Marketing</h3>
                                <p className="text-slate-400 text-lg max-w-md">Data-driven paid media management across Meta, Google, TikTok, and Snap to scale revenue reliably.</p>
                            </div>
                            <div className="absolute right-10 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                                <ArrowUpRight className="text-white w-12 h-12" />
                            </div>
                        </div>
                        {/* Abstract Background Shape */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>

                    {/* Card 2: Vertical */}
                    <div className="bento-item md:col-span-1 row-span-1 md:row-span-2 bg-[#0F172A] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">02</div>
                            <h3 className="text-3xl font-bold text-white mb-4">Creative Strategy</h3>
                            <p className="text-slate-400 text-lg">High-converting ad creatives engineered based on performance data.</p>
                        </div>
                        <div className="mt-8 relative h-64 w-full rounded-2xl overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1626785774573-4b7993143a2d?q=80&w=2070&auto=format&fit=crop" alt="Creative" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Card 3: Standard */}
                    <div className="bento-item md:col-span-1 bg-[#0B1221] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">03</div>
                        <h3 className="text-2xl font-bold text-white mb-3">SEO & Analytics</h3>
                        <p className="text-slate-400">Server-side tracking & organic growth infrastructure.</p>
                    </div>

                    {/* Card 4: Standard */}
                    <div className="bento-item md:col-span-1 bg-[#0B1221] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors">
                        <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">04</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Consulting</h3>
                        <p className="text-slate-400">Strategic audits and in-house team training.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
