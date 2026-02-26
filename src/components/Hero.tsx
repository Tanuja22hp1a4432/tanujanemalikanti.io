"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Hero() {
    const { name, summary } = portfolioData.personalInfo;

    return (
        <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-slate-50">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/5 -skew-x-12 origin-top-right -z-10 hidden lg:block" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                                <Sparkles size={16} className="text-secondary" />
                                <span className="text-sm font-bold text-slate-600 uppercase tracking-widest leading-none">
                                    Available for Collaboration
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                                Building digital <br />
                                <span className="text-primary italic">experiences</span> with <br />
                                Code & Data.
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                                My name is <span className="text-slate-900 font-bold">{name}</span>. {summary}
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <a href="#projects" className="btn-primary group">
                                    EXPLORE PROJECTS <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#" className="btn-secondary group">
                                    DOWNLOAD CV <Download size={20} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                                </a>
                            </div>

                            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-slate-900">02+</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Years Experience</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-slate-900">10+</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Projects Built</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-slate-900">95%</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Client Satisfaction</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Element / Illustration area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:w-2/5 hidden lg:block"
                    >
                        <div className="relative">
                            <div className="w-full aspect-square bg-white rounded-3xl shadow-2xl p-4 rotate-3 hover:rotate-0 transition-all duration-500 border border-slate-100 overflow-hidden group">
                                <div className="w-full h-full bg-slate-50 rounded-2xl flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="text-center">
                                        <div className="text-8xl mb-4 grayscale group-hover:grayscale-0 transition-all">👩‍💻</div>
                                        <h3 className="text-2xl font-black text-slate-800"> Nemalikanti Tanuja</h3>
                                        <p className="text-primary font-bold">Frontend Developer</p>
                                    </div>
                                </div>
                            </div>
                            {/* Floating badges */}
                            <div className="absolute top-10 -left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50 animate-bounce transition-all [animation-duration:3s]">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">R</div>
                                <div className="text-sm font-black text-slate-800">React.js</div>
                            </div>
                            <div className="absolute bottom-20 -right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50 animate-bounce transition-all [animation-duration:4s]">
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 font-bold">Py</div>
                                <div className="text-sm font-black text-slate-800">Python</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
