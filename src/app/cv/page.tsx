"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";
import { Mail, Github, Linkedin, MapPin, ExternalLink, Globe } from "lucide-react";

export default function CVPage() {
    const { personalInfo, socialLinks, education, experience, skills, projects, achievements } = portfolioData;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
            {/* Control Panel (Hidden on print) */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
                <Link href="/" className="text-primary font-bold flex items-center gap-2 hover:underline">
                    ← Back to Portfolio
                </Link>
                <button
                    onClick={handlePrint}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                    Print / Download PDF
                </button>
            </div>

            {/* CV Content */}
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
                {/* Header */}
                <div className="bg-slate-900 text-white p-10 print:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">{personalInfo.name}</h1>
                            <p className="text-xl text-primary font-bold mb-4">{personalInfo.role}</p>
                            <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                                {personalInfo.summary}
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-slate-300">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-primary" />
                                <span>{personalInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-primary" />
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Linkedin size={16} className="text-primary" />
                                <span>linkedin.com/in/tanuja-nemalikanti</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Github size={16} className="text-primary" />
                                <span>github.com/Tanuja22hp1a4432</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe size={16} className="text-primary" />
                                <span>{socialLinks.vercel?.replace('https://', '')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 print:p-8">
                    {/* Sidebar / Skills & Education */}
                    <div className="lg:col-span-1 space-y-10">
                        {/* Education */}
                        <section>
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-primary/20">Education</h2>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index}>
                                        <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                                        <p className="text-sm text-slate-600">{edu.institution}</p>
                                        <div className="flex justify-between text-xs text-slate-500 mt-1 font-bold">
                                            <span>{edu.year}</span>
                                            <span className="text-primary">{edu.score}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-primary/20">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-xs font-bold ring-1 ring-slate-200">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Achievements */}
                        <section>
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-primary/20">Certifications</h2>
                            <ul className="space-y-3">
                                {achievements.filter(a => a.type === "Certification").map((cert, index) => (
                                    <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                                        <span className="text-primary font-black">•</span>
                                        {cert.title}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Main Content / Work & Projects */}
                    <div className="lg:col-span-2 space-y-10 print:col-span-2">
                        {/* Experience */}
                        <section>
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-primary/20">Experience</h2>
                            <div className="space-y-8">
                                {experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                                                <p className="text-primary font-bold">{exp.company}</p>
                                            </div>
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{exp.duration}</span>
                                        </div>
                                        <ul className="list-disc list-outside ml-4 space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-sm text-slate-600 leading-relaxed pl-1">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="print:break-before-auto">
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-primary/20">Key Projects</h2>
                            <div className="space-y-8">
                                {projects.map((project, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                                {project.title}
                                                {project.demo && project.demo !== "" && (
                                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                                        <ExternalLink size={14} className="text-primary" />
                                                    </a>
                                                )}
                                            </h3>
                                            <div className="flex gap-2">
                                                {project.tech.slice(0, 3).map((t, i) => (
                                                    <span key={i} className="text-[10px] text-slate-400 uppercase font-black">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 p-6 text-center border-t border-slate-100 print:hidden">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.3em]"> Generated via Portfolio AI – Tanuja Portfolio </p>
                </div>
            </div>
        </div>
    );
}
