"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, ExternalLink, Activity } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

// Dynamically import the calendar to avoid hydration mismatch
const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => ({ default: mod.GitHubCalendar })),
    { ssr: false }
);

export default function GithubActivity() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="section-spacing bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Engineering Activity</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Open Source Contributions</p>
                    <div className="title-underline mx-auto"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 max-w-5xl mx-auto relative group overflow-hidden"
                >
                    {/* Decorative Github Icon in background */}
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <Github size={150} />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20 group-hover:scale-110 transition-transform">
                                <Github size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">{portfolioData.socialLinks.github.split("/").pop()}</h3>
                                <span className="text-sm font-bold text-primary flex items-center gap-2">
                                    <Activity size={14} className="animate-pulse" /> Active Contributor
                                </span>
                            </div>
                        </div>

                        <a
                            href={portfolioData.socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-black flex items-center gap-2 hover:bg-slate-800 transition-all hover:shadow-xl"
                        >
                            VIEW PROFILE <ExternalLink size={18} />
                        </a>
                    </div>

                    <div className="flex justify-center overflow-x-auto py-8">
                        {mounted && (
                            <div className="min-w-[700px] md:min-w-fit flex justify-center">
                                <GitHubCalendar
                                    username={portfolioData.socialLinks.github.split("/").pop() || "Tanuja22hp1a4432"}
                                    blockSize={14}
                                    blockMargin={6}
                                    fontSize={14}
                                    theme={{
                                        light: ["#f1f5f9", "#bfdbfe", "#60a5fa", "#2563eb", "#1e3a8a"],
                                        dark: ["#1e293b", "#1e3a8a", "#2563eb", "#60a5fa", "#93c5fd"],
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="mt-12 text-center text-slate-400 font-bold text-xs uppercase tracking-[0.2em] relative z-10">
                        Daily contributions across personal and internship repositories
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
