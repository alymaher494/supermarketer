"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Preloader() {
    const { language } = useLanguage();
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
        <div ref={container} className="fixed inset-0 z-[9999] bg-[#161616] flex flex-col items-center justify-center text-white">
            <div className="overflow-hidden mb-4">
                <Image
                    src="/logo.png"
                    alt="Mohamed Elsayed Logo"
                    width={150}
                    height={150}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div ref={percent} className="text-xl font-mono text-secondary">
                0%
            </div>
        </div>
    );
}

