"use client";
import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function MagneticButton({
    children,
    className = "",
    onClick
}: {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = btnRef.current!.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.35;
        const y = (clientY - (top + height / 2)) * 0.35;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className={`relative inline-flex items-center justify-center overflow-hidden transition-transform duration-200 ease-out group ${className}`}
        >
            <span className="relative z-10 flex items-center gap-2 font-bold px-8 py-4 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary transition-colors duration-300">
                {children}
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </span>
            {/* Magnetic Glow handled by global cursor or localized effect if needed */}
        </button>
    );
}
