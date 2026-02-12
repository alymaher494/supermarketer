"use client";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/Preloader";

export default function SmoothScrollLayout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Preloader />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
