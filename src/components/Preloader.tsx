"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [complete, setComplete] = useState(false);
    const container = useRef<HTMLDivElement>(null);
    const text = useRef<HTMLHeadingElement>(null);
    const percent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Counter Animation
        const count = { val: 0 };
        tl.to(count, {
            val: 100,
            duration: 1.5,
            onUpdate: () => {
                if (percent.current) {
                    percent.current.textContent = count.val.toFixed(0) + "%";
                }
            }
        });

        // Reveal Text
        tl.to(text.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }, "-=1");

        // Exit Animation
        tl.to(container.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "expo.inOut",
            delay: 0.5,
            onComplete: () => setComplete(true)
        });

    }, []);

    if (complete) return null;

    return (
        <div ref={container} className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center text-white">
            <div className="overflow-hidden mb-4">
                <h1 ref={text} className="text-4xl md:text-6xl font-bold translate-y-full opacity-0">
                    SUPER MARKETER
                </h1>
            </div>
            <div ref={percent} className="text-xl font-mono text-secondary">
                0%
            </div>
        </div>
    );
}
