"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".intro-line border-l-2", {
            height: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });

        gsap.from(".intro-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });
    }, []);

    return (
        <section ref={container} className="py-32 container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left: Sticky Title */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        <span className="text-secondary font-mono uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight intro-text">
                            The Growth <br /> Engineers.
                        </h2>
                    </div>
                </div>

                {/* Right: Content with Border Line */}
                <div className="lg:col-span-8 relative pl-8 md:pl-16 border-l border-slate-800">
                    {/* Animated overlay border */}
                    <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-secondary origin-top intro-line transform scale-y-0 transition-transform duration-1000" />

                    <div className="intro-text space-y-8 text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                        <p>
                            Most agencies guess. We <strong className="text-white font-medium">calculate</strong>.
                        </p>
                        <p>
                            SuperMarketer was founded to solve a specific problem in the MENA market: the disconnect between ad spend and business reality.
                        </p>
                        <p>
                            We replaced "vanity metrics" with financial models. We replaced "gut feelings" with server-side tracking. We built a system where creativity is guided by data, not the other way around.
                        </p>

                        <div className="pt-8">
                            <Link href="/about" className="inline-flex items-center gap-3 text-white border-b border-secondary pb-1 hover:text-secondary transition-colors">
                                Read Our Full Story <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
