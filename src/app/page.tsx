import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubActivity from "@/components/GithubActivity";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubActivity />
      <Achievements />
      <Contact />

      <footer className="py-20 bg-slate-50 border-t border-slate-100 text-center">
        <div className="container-custom">
          <Link href="#home" className="text-xl font-black text-slate-900 tracking-tighter hover:text-primary transition-colors mb-6 inline-block">
            TanuJA<span className="text-primary">.</span>
          </Link>
          <p className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-4">© {new Date().getFullYear()} Nemalikanti Tanuja. All rights reserved.</p>
          <p className="text-slate-300 font-medium text-xs">
            Built with <span className="text-primary font-bold">Next.js 16</span> + <span className="text-primary font-bold">Tailwind CSS</span> + <span className="text-primary font-bold">Framer Motion</span>.
          </p>
        </div>
      </footer>
    </main>
  );
}
