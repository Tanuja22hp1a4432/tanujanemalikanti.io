"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Projects() {
    return (
        <section id="projects" className="section-spacing bg-slate-50 relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Crafting Solutions</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Featured Work</p>
                    <div className="title-underline mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card flex flex-col group h-full relative"
                        >
                            {/* Project Header / Icon */}
                            <div className="h-56 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="z-10"
                                >
                                    <Folder size={64} className="text-primary group-hover:text-primary transition-colors duration-500" />
                                </motion.div>
                                {/* Decorative background circle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/50 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                            </div>

                            {/* Content */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full ring-1 ring-primary/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow font-medium">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-10 pt-8 border-t border-slate-50">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs font-black text-primary flex items-center gap-2 group/btn hover:translate-x-1 transition-transform tracking-widest uppercase"
                                    >
                                        LIVE DEMO <ExternalLink size={16} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs font-black text-slate-800 flex items-center gap-2 group/btn hover:text-primary transition-all tracking-widest uppercase"
                                    >
                                        SOURCE CODE <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
