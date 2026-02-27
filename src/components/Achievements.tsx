"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface AchievementItem {
    title: string;
    type: string;
    description?: string;
    tech?: string[];
    details?: string[];
}

export default function Achievements() {
    return (
        <section id="achievements" className="section-spacing bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Milestones / Achievements</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Recognitions & Engineering Activities</p>
                    <div className="title-underline mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {(portfolioData.achievements as AchievementItem[]).map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-6 md:p-8 flex items-start gap-4 md:gap-6 group hover:bg-slate-50/50 ${item.tech ? 'md:col-span-2 border-primary/20 bg-primary/[0.02]' : ''
                                }`}
                        >
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:scale-110 ${item.type === 'Certification' ? 'bg-blue-50 text-primary' :
                                item.tech ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'
                                }`}>
                                {item.type === 'Certification' ? <Award size={24} /> :
                                    item.tech ? <Cpu size={24} /> : <Star size={24} />}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${item.type === 'Certification' ? 'text-blue-600 bg-blue-50/50' :
                                        item.tech ? 'text-indigo-600 bg-indigo-50/50' : 'text-amber-600 bg-amber-50/50'
                                        }`}>
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p className="mt-2 text-sm text-slate-600 font-medium">
                                        {item.description}
                                    </p>
                                )}

                                {item.details && (
                                    <ul className="mt-4 space-y-2">
                                        {item.details.map((detail: string, i: number) => (
                                            <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                                                <span className="text-primary font-black">•</span>
                                                <span className="font-medium">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {item.tech && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.tech.map((t: string, i: number) => (
                                            <span key={i} className="text-[9px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded ring-1 ring-indigo-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
