import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { ArrowRight } from "lucide-react"; 
import { FaGithub } from "react-icons/fa";

export default function Reflection() {
  return (
    <section id="reflection" className="relative py-24 bg-oasis-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-12 items-start w-full">
          
          {/* ─── Left Column: Reflection Heading ─── */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="pt-1 lg:sticky lg:top-8"
          >
            {/* 🎯 Typography Alignment: Strict adherence to section subtitle specs */}
            <span className="text-xs font-bold uppercase tracking-widest text-oasis-primary flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-oasis-primary inline-block" /> Project Reflection
            </span>
            {/* 🎯 Typography Alignment: Match H2 visual weight across components */}
            <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.8rem] font-black leading-[1.1] text-[#111827] tracking-tight">
              The Engineering <br className="hidden lg:block" /> Journey
            </h2>
          </motion.div>

          {/* ─── Right Column: Content Cards ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full space-y-6"
          >
            {/* 💡 Logic Alignment: Core technical pillars replacing generic UI terms */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* 🎨 UI Fix: Added prominent default shadow (shadow-md shadow-slate-200/60) */}
              <div className="bg-white border border-oasis-light/60 rounded-xl p-4 shadow-md shadow-slate-200/60 hover:border-oasis-primary/40 hover:shadow-xl hover:shadow-oasis-primary/15 transition-all duration-300">
                <div className="text-[10px] font-bold uppercase text-oasis-primary tracking-widest mb-1">Pillar 01</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">Async AI Pipeline</div>
              </div>
              <div className="bg-white border border-oasis-light/60 rounded-xl p-4 shadow-md shadow-slate-200/60 hover:border-oasis-primary/40 hover:shadow-xl hover:shadow-oasis-primary/15 transition-all duration-300">
                <div className="text-[10px] font-bold uppercase text-oasis-primary tracking-widest mb-1">Pillar 02</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">Schema-Guided Guard</div>
              </div>
              <div className="bg-white border border-oasis-light/60 rounded-xl p-4 shadow-md shadow-slate-200/60 hover:border-oasis-primary/40 hover:shadow-xl hover:shadow-oasis-primary/15 transition-all duration-300">
                <div className="text-[10px] font-bold uppercase text-oasis-primary tracking-widest mb-1">Pillar 03</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">ESCO Data Validation</div>
              </div>
            </div>

            {/* 📜 Blockquote Card */}
            {/* 🎨 UI Fix: Boosted default shadow to shadow-xl with slate tint for clear separation */}
            <div className="bg-white border border-oasis-light/50 rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-oasis-light/30 blur-2xl pointer-events-none"></div>
              
              <blockquote className="font-sans text-base md:text-lg italic text-gray-600 leading-relaxed border-l-4 border-oasis-primary pl-6 py-1 select-none relative z-10">
                "Building CareerOasis forced us to transition from speculative AI workflows into predictable software engineering. By constraining probabilistic LLM nodes inside rigorous type-safe schemas, we succeeded in delivering enterprise-grade latency standards to ordinary university workflows."
              </blockquote>
            </div>

            {/* 🛠️ GitHub Card */}
            <div className="pt-2">
              {/* 🎨 UI Fix: Added solid default shadow and smoother hover lift */}
              <a 
                href="https://github.com/Gee0410/CareerOasis.git" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full bg-white hover:bg-slate-50 border border-oasis-light/50 hover:border-oasis-primary/50 rounded-xl p-4 transition-all duration-300 shadow-md shadow-slate-200/60 hover:shadow-xl hover:shadow-oasis-primary/15 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-oasis-primary/10 flex items-center justify-center text-oasis-primary group-hover:bg-oasis-primary group-hover:text-white transition-colors duration-300">
                    <FaGithub size={18} />
                  </div>
                  <div className="text-left">
                    {/* 🎯 Typography Alignment: Tag specs */}
                    <p className="text-[11px] font-bold uppercase tracking-widest text-oasis-primary mb-0.5">Repository Artifacts</p>
                    {/* 🎯 Typography Alignment: Description specs */}
                    <p className="text-sm font-medium text-slate-600">Explore our full FYP Architectural Evolution Journey</p>
                  </div>
                </div>
                
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-oasis-primary group-hover:border-oasis-light group-hover:bg-white transition-all duration-300 mr-1">
                  <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}