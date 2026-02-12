"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogData } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function BlogSection() {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".blog-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%"
                    }
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 bg-[#020617] border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Latest Insights</h2>
                    </div>

                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-white hover:text-secondary transition-colors group">
                        All Articles
                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-black transition-all">
                            <ArrowUpRight size={20} />
                        </div>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogData.map((post, i) => (
                        <Link key={i} href={`/blog/${post.slug}`} className="blog-card group block">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-900 border border-slate-800 group-hover:border-secondary transition-colors">
                                <Image
                                    src={post.image!}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/50 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 pr-4">
                                <div className="flex items-center gap-3 text-slate-500 text-sm font-mono uppercase">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <span className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mt-4 group-hover:gap-4 transition-all">
                                    Read More <ArrowUpRight size={16} className="text-secondary" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link href="/blog" className="btn-outline">View All Articles</Link>
                </div>
            </div>
        </section>
    );
}
