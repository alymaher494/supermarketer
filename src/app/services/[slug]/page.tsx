import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <Link href="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} /> Back to Services
                </Link>

                <div className="max-w-4xl mx-auto">
                    <span className="text-secondary font-mono bg-secondary/10 px-3 py-1 rounded-full text-sm mb-6 inline-block">
                        {service.type}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                    <p className="text-xl text-slate-400 mb-12">{service.description}</p>

                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">The Impact</h3>
                            <ul className="space-y-4">
                                {service.details.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-red-400 mb-2">The Problem</h3>
                                <p className="text-slate-300">{service.details.problem}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-secondary mb-2">The Solution</h3>
                                <p className="text-slate-300">{service.details.solution}</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl border border-slate-700">
                        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
                        <p className="text-slate-400 mb-8">
                            Book a call to discuss how we can implement this for your brand.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/contact" className="btn-primary">Book Strategy Call</a>
                            <a href="/case-studies" className="btn-outline">View Related Work</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
