"use client";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Using a similar layout to Case Studies but categorized mainly by visual type or industry blocks
export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-primary">
            <PageHeader
                subtitle="Visual Archive"
                title="Creative Gallery"
                description="A visual exploration of our campaigns, creative assets, and brand transformations."
            />

            <section className="container mx-auto px-6 pb-20">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div key={item} className="break-inside-avoid bg-slate-900 rounded-sm overflow-hidden group relative">
                            <div className={`w-full bg-slate-800 ${item % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'} relative`}>
                                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-bold uppercase tracking-widest opacity-30">
                                    Asset {item}
                                </div>
                                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="text-black w-8 h-8" />
                                </div>
                            </div>
                            <div className="p-4 border-t border-slate-800">
                                <h4 className="font-bold text-white">Project Name {item}</h4>
                                <p className="text-xs text-slate-500 uppercase">Social Media Creative</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 border-t border-slate-800 text-center">
                <h2 className="text-3xl font-bold mb-6">Need creative for your next campaign?</h2>
                <Link href="/contact" className="btn-primary">Book Creative Strategy</Link>
            </section>
        </main>
    );
}
