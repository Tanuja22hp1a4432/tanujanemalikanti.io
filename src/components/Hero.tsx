"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, FileText, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";

export default function Hero() {
    const { name, summary } = portfolioData.personalInfo;

    return (
        <section
            id="home"
            className="min-h-[90vh] flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-white"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
                            <Sparkles size={16} className="text-primary animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                                Available for Collaboration
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            Hi, I&apos;m <span className="text-primary">{name}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                            {summary} Specializing in <span className="text-primary font-bold">Full-Stack Development</span> & AI-driven solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={portfolioData.personalInfo.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary w-full sm:w-auto flex items-center gap-2 px-8 py-4"
                            >
                                View Resume <ExternalLink size={18} />
                            </a>
                            <Link
                                href="/cv"
                                className="btn-secondary w-full sm:w-auto flex items-center gap-2 px-8 py-4"
                            >
                                <Eye size={18} /> Explore CV
                            </Link>
                            <button
                                onClick={() => window.print()}
                                className="text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 mt-4 sm:mt-0"
                            >
                                <FileText size={16} /> Download PDF
                            </button>
                        </div>

                        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-center gap-10 md:gap-16">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900">02+</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900">10+</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Projects Built</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900">95%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Satisfaction</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
