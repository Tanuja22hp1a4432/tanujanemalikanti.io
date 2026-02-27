"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Rocket, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function About() {
    const { education, personalInfo } = portfolioData;

    return (
        <section id="about" className="section-spacing bg-white">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Education Timeline */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Education</h2>
                            <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-8">Academic Excellence</p>

                            <div className="space-y-12">
                                {education.map((item, index) => (
                                    <div key={index} className="relative pl-10 group">
                                        {/* Timeline Line */}
                                        {index !== education.length - 1 && (
                                            <div className="absolute left-[11px] top-8 w-[2px] h-[calc(100%+48px)] bg-slate-100 group-hover:bg-primary/20 transition-colors" />
                                        )}
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white bg-slate-200 group-hover:bg-primary group-hover:scale-110 shadow-sm transition-all z-10" />

                                        <div className="glass-card p-6 !rounded-xl">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold ring-1 ring-slate-200">
                                                    <Calendar size={12} /> {item.year}
                                                </span>
                                                <span className="text-primary font-black text-sm">GPA: {item.score}</span>
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                                {item.degree}
                                            </h3>
                                            <p className="text-slate-500 font-medium flex items-center gap-2">
                                                <GraduationCap size={16} className="text-slate-400" /> {item.institution}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Vision & Goals */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="h-full flex flex-col gap-8"
                        >
                            <div className="glass-card p-10 flex-grow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Target size={120} />
                                </div>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-8">
                                    <Target size={32} />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 mb-6">Professional Vision</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {personalInfo.status}. {personalInfo.summary}
                                </p>
                            </div>

                            <div className="bg-primary p-10 rounded-3xl text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform">
                                    <Rocket size={100} />
                                </div>
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                                    <Rocket size={32} />
                                </div>
                                <h3 className="text-2xl font-black mb-4">Future Roadmap</h3>
                                <p className="text-xl font-bold mb-6 text-blue-100">{personalInfo.futureGoal}</p>
                                <p className="text-blue-50/80 leading-relaxed max-w-md">
                                    Focused on scaling analytical models and building data-driven frontend architectures to solve global challenges.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
