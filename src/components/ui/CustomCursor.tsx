"use client";
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        }
    }, []);

    useEffect(() => {
        gsap.to('.cursor-dot', {
            x: position.x,
            y: position.y,
            duration: 0.1,
            ease: 'power2.out'
        });

        gsap.to('.cursor-ring', {
            x: position.x,
            y: position.y,
            duration: 0.6,
            ease: 'power3.out'
        });
    }, [position]);

    return (
        <>
            <div className={`cursor-dot fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${hovered ? 'scale-150 bg-white' : ''} -translate-x-1/2 -translate-y-1/2`} />
            <div className={`cursor-ring fixed top-0 left-0 w-10 h-10 border border-secondary/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${hovered ? 'scale-150 border-white bg-white/10' : ''}`} />
        </>
    );
}
