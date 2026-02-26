"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Experience() {
    return (
        <section id="experience" className="section-spacing bg-white relative">
            <div className="container-custom">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Professional Path</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Industry Experience</p>
                    <div className="title-underline mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 pb-20 group last:pb-0"
                        >
                            {/* Timeline Line */}
                            {index !== portfolioData.experience.length - 1 && (
                                <div className="absolute left-[23px] top-12 w-[3px] h-[calc(100%-12px)] bg-slate-100 group-hover:bg-primary/20 transition-all rounded-full" />
                            )}

                            {/* Timeline Icon */}
                            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary group-hover:bg-blue-50 transition-all duration-300 z-10 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                                <Briefcase size={22} />
                            </div>

                            <div className="glass-card p-10 !rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <Building2 size={120} />
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                    <div>
                                        <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-6 text-slate-600 font-bold text-sm">
                                            <span className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                                <Building2 size={16} className="text-primary" /> {exp.company}
                                            </span>
                                            {exp.mode && (
                                                <span className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                                    <MapPin size={16} className="text-primary" /> {exp.mode}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="px-5 py-2 bg-primary text-white text-sm font-black rounded-xl shadow-lg shadow-primary/20 tracking-wider">
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                <ul className="grid grid-cols-1 md:grid-cols-1 gap-5">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-600 text-lg leading-relaxed group/item">
                                            <div className="mt-1.5 shrink-0 text-primary group-hover/item:scale-110 transition-transform">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
