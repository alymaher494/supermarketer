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
            duration: 0.01,
            ease: 'none'
        });

        gsap.to('.cursor-ring', {
            x: position.x,
            y: position.y,
            duration: 0.02 ,
            ease: 'power1.out'
        });
    }, [position]);

    return (
        <>
            <style jsx global>{`
                body, a, button, [role="button"], input, textarea {
                    cursor: none !important;
                }
            `}</style>
            <div className={`cursor-dot fixed top-0 left-0 w-1.5 h-1.5 bg-secondary rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'} -translate-x-1/2 -translate-y-1/2`} />
            <div className={`cursor-ring fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-[9998] transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${hovered ? 'scale-[2.5] bg-secondary/10' : ''}`} />
        </>
    );
}
