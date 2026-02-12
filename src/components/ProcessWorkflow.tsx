"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProcessWorkflow() {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".process-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    const steps = [
        { num: "01", title: "Design & Prototyping", desc: "Conduct user research (interviews, surveys, analytics)." },
        { num: "02", title: "Research & Analysis", desc: "Deep dive into market data and competitor benchmarks." },
        { num: "03", title: "Testing & Iteration", desc: "Rigorous A/B testing to validate hypotheses." },
        { num: "04", title: "Prepare for Delivery", desc: "Final polish and handoff for production scaling." },
    ];

    return (
        <section ref={container} className="process-section py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {steps.map((step, i) => (
                        <div key={i} className="process-item text-center group">
                            <span className="inline-block text-2xl font-bold text-slate-700 mb-8 font-mono group-hover:text-secondary transition-colors">
                                {'{'} {step.num} {'}'}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                                {step.title.split("&").map((part, idx) => (
                                    <React.Fragment key={idx}>
                                        {part} {idx === 0 && <br />} {idx === 0 && "&"}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p className="text-slate-400 leading-relaxed opacity-80">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center border-t border-slate-800 pt-12">
                    <p className="text-xl text-white font-medium inline-flex items-center gap-4 flex-col md:flex-row">
                        Don't hesitate collaborate with expertise
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-secondary transition-colors">
                            Let's Talk
                            <ArrowRight size={16} />
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
