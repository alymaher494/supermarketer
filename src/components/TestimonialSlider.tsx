"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Using framer-motion here for easier slider interactions than raw GSAP for this specific component
// If GSAP is strictly required, I can rewrite. But project has framer-motion installed.

const testimonials = [
    {
        id: 1,
        text: "Mohamed transformed our acquisition strategy. The results speak for themselves.",
        author: "Ahmed K.",
        role: "CEO, TechStart"
    },
    {
        id: 2,
        text: "A rare combination of creative strategy and data-driven execution.",
        author: "Sarah M.",
        role: "Marketing Director"
    },
    {
        id: 3,
        text: "scaled our revenue by 3x in just 4 months. Highly recommended.",
        author: "Omar Y.",
        role: "Founder, E-Shop"
    }
];

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16">What Clients Say</h2>

                <div className="relative max-w-3xl mx-auto h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl relative"
                        >
                            <Quote className="w-12 h-12 text-secondary/20 absolute top-6 left-6" />
                            <p className="text-xl md:text-2xl text-slate-300 mb-6 italic relative z-10">
                                "{testimonials[current].text}"
                            </p>
                            <div>
                                <h4 className="font-bold text-white">{testimonials[current].author}</h4>
                                <span className="text-sm text-slate-500">{testimonials[current].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-slate-800 rounded-full hover:bg-secondary hover:text-primary transition-all md:-left-12">
                        <ChevronLeft />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-slate-800 rounded-full hover:bg-secondary hover:text-primary transition-all md:-right-12">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
