"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-8 border-t border-slate-800 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
                            Let's Scale <br />
                            <span className="text-secondary">Your Vision.</span>
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 text-xl md:text-2xl border-b border-white/30 pb-2 hover:border-white hover:gap-6 transition-all"
                        >
                            Start a Project <ArrowUpRight />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-transparent text-outline-white-sm uppercase tracking-wide mb-6 text-2xl font-bold">Menu</h4>
                            <ul className="space-y-4 text-slate-400">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/case-studies" className="hover:text-white transition-colors">Work</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-transparent text-outline-white-sm uppercase tracking-wide mb-6 text-2xl font-bold">Connect</h4>
                            <ul className="space-y-4 text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Mohamed El-Sayed. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Big Background Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h1 className="text-[15vw] font-bold leading-none text-center whitespace-nowrap">
                    SUPER MARKETER
                </h1>
            </div>
        </footer>
    );
}
