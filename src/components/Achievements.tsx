"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Achievements() {
    return (
        <section id="achievements" className="section-spacing bg-white">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Milestones & Honors</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Recognitions & Certifications</p>
                    <div className="title-underline mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {portfolioData.achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex items-start gap-6 group hover:bg-slate-50/50"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:scale-110 ${item.type === 'Certification' ? 'bg-blue-50 text-primary' : 'bg-amber-50 text-amber-600'
                                }`}>
                                {item.type === 'Certification' ? <Award size={28} /> : <Star size={28} />}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${item.type === 'Certification' ? 'text-blue-600 bg-blue-50/50' : 'text-amber-600 bg-amber-50/50'
                                        }`}>
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
