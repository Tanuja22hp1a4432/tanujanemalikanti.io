"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Contact() {
    return (
        <section id="contact" className="section-spacing bg-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px] -z-10" />

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-24">
                    {/* Left: Contact Info */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                                Let&apos;s build something <br />
                                <span className="text-primary italic">extraordinary</span> together.
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-lg font-medium">
                                Currently exploring new opportunities in Frontend Development and Data Science. My inbox is always open.
                            </p>

                            <div className="space-y-8">
                                {/* Email Card */}
                                <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-sm ring-1 ring-primary/10">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Official Email</span>
                                        <span className="text-2xl font-black text-slate-800 group-hover:text-primary transition-all">
                                            {portfolioData.personalInfo.email}
                                        </span>
                                    </div>
                                </a>

                                {/* LinkedIn Card */}
                                <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-sm ring-1 ring-primary/10">
                                        <Linkedin size={32} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">LinkedIn Network</span>
                                        <span className="text-2xl font-black text-slate-800 group-hover:text-primary transition-all">
                                            /tanuja-nemalikanti
                                        </span>
                                    </div>
                                </a>

                                {/* Github Card */}
                                <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-sm ring-1 ring-primary/10">
                                        <Github size={32} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Open Source</span>
                                        <span className="text-2xl font-black text-slate-800 group-hover:text-primary transition-all">
                                            Tanuja22hp1a4432
                                        </span>
                                    </div>
                                </a>

                                {/* Vercel Card */}
                                <a href={portfolioData.socialLinks.vercel} target="_blank" rel="noreferrer" className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-sm ring-1 ring-primary/10">
                                        <svg width="32" height="32" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128 0L256 221.705H0L128 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Live Deployments</span>
                                        <span className="text-2xl font-black text-slate-800 group-hover:text-primary transition-all">
                                            ntanujas-projects
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Message Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                                <MessageSquare size={40} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Send a Quick Message</h3>
                            <p className="text-slate-500 font-medium mb-12">I typically respond within 12-24 hours. Let&apos;s talk about your next big idea!</p>

                            <form className="w-full space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:outline-none focus:bg-white text-slate-900 font-bold transition-all" placeholder="Tanuja" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Email Address</label>
                                        <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:outline-none focus:bg-white text-slate-900 font-bold transition-all" placeholder="tanu@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Message Detail</label>
                                    <textarea rows={5} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:outline-none focus:bg-white text-slate-900 font-bold transition-all resize-none" placeholder="What would you like to discuss?"></textarea>
                                </div>
                                <button type="submit" className="w-full py-5 bg-primary text-white font-black text-lg rounded-2xl hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98]">
                                    CONNECT NOW <Send size={24} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
