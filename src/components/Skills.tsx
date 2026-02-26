"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Code2, Cpu, Database, Layout, Terminal, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    "HTML": <Layout size={20} />,
    "CSS": <Layout size={20} />,
    "JavaScript": <Code2 size={20} />,
    "React.js": <Cpu size={20} />,
    "Next.js": <Globe size={20} />,
    "Python": <Terminal size={20} />,
    "WordPress": <Layout size={20} />,
    "AI Tools (Cursor, Antigravity)": <Cpu size={20} />,
    "Git & GitHub": <Database size={20} />,
};

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="section-spacing bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Technical Arsenal</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Tools & Technologies</p>
                    <div className="title-underline mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card p-8 group relative"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    {iconMap[skill.name] || <Code2 size={20} />}
                                </div>
                                <span className="text-2xl font-black text-slate-900/10 group-hover:text-primary/10 transition-colors">0{index + 1}</span>
                            </div>

                            <div className="flex justify-between items-end mb-4">
                                <h3 className="font-black text-slate-800 text-lg group-hover:text-primary transition-colors uppercase tracking-tight">{skill.name}</h3>
                                <span className="text-sm font-black text-primary px-2 py-0.5 bg-blue-50 rounded-lg">{skill.level}%</span>
                            </div>

                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                    className="h-full bg-primary rounded-full relative"
                                >
                                    <div className="absolute top-0 right-0 w-1 h-full bg-white/40 animate-pulse" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
