import { caseStudiesData } from "@/data/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetail({ params }: PageProps) {
    const { slug } = await params;
    const project = caseStudiesData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} /> Back to Case Studies
                </Link>

                {/* Header */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex gap-4 mb-6">
                        <span className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                            {project.category}
                        </span>
                        {project.tags?.map(tag => (
                            <span key={tag} className="text-xs font-mono text-slate-400 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{project.headline}</h1>
                    <p className="text-xl text-slate-400">
                        Client: <span className="text-white font-semibold">{project.client}</span>
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
                    {project.results.map((res, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
                            <span className="block text-slate-500 text-sm uppercase tracking-wider mb-2">{res.label}</span>
                            <div className="text-4xl font-bold text-white mb-2">
                                {res.after || res.value}
                            </div>
                            {res.before && (
                                <div className="text-xs text-slate-500 line-through">
                                    Was {res.before}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto space-y-16">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">The Challenge</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {project.challenge}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">The Solution</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            {project.solution}
                        </p>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <h3 className="font-semibold text-white mb-4">Key Tactics Implemented:</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                    Consolidated campaign structure to exit learning phase faster.
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                    Creative iteration cycle every 7 days.
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                    Implemented server-side tracking (CAPI) for better attribution.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-slate-800 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to get similar results?</h2>
                        <a href="/contact" className="btn-primary inline-block">
                            Book Strategy Call
                        </a>
                    </section>
                </div>
            </div>
        </main>
    );
}
