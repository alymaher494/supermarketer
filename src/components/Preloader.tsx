"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Preloader() {
    const { language } = useLanguage();
    const [complete, setComplete] = useState(false);
    const [mounted, setMounted] = useState(false);
    const container = useRef<HTMLDivElement>(null);
    const text = useRef<HTMLHeadingElement>(null);
    const percent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
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
            onComplete: () => {
                setComplete(true);
            }
        });

        return () => {
            tl.kill();
        };

    }, []);

    if (complete || !mounted) return null;

    return (
        <div ref={container} className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="absolute inset-x-0 top-0 h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(135deg, transparent 48%, #a50707 48%, #a50707 52%, transparent 52%)`,
                        backgroundSize: '30px 30px',
                        maskImage: 'radial-gradient(circle, black, transparent 70%)'
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
                <div className="overflow-hidden mb-8 w-full flex justify-center">
                    <Image
                        src="/logo-premium.png"
                        alt="Mohamed El-Sayed Premium Logo"
                        width={800}
                        height={400}
                        className="object-contain w-full max-w-2xl h-auto"
                        priority
                    />
                </div>
                <div ref={percent} className="text-2xl font-mono text-secondary tracking-[0.3em]">
                    0%
                </div>
            </div>
        </div>
    );
}

