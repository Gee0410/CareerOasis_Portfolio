import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { fadeUp } from "../utils/animations";

export default function Cta() {
  const contactHref = "mailto:" + ["gsinrou", "gmail.com"].join("@");

  return (
    <section id="connect" className="py-20 bg-oasis-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full bg-[#0B1329] rounded-[2.5rem] p-10 md:p-16 border border-slate-800/80 shadow-2xl shadow-slate-950/40 relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 text-left"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-oasis-light/[0.05] blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-oasis-primary/[0.06] blur-3xl pointer-events-none"></div>

          <div className="lg:max-w-2xl relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-oasis-primary flex items-center gap-3 mb-5">
              <span className="h-px w-6 bg-oasis-primary inline-block" /> Get in Touch
            </span>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-[1.1] text-white tracking-tight mb-4">
              The future of resume intelligence starts here.
            </h2>
            <p className="text-slate-400 text-xs md:text-sm md:text-base leading-relaxed font-medium">
              Open to architectural collaborations, enterprise scaling insights, or full-stack production feedback.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10 self-start lg:self-center">
            <a
              href={contactHref}
              className="group inline-flex items-center gap-2.5 bg-oasis-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-oasis-primary/20 hover:shadow-xl hover:shadow-oasis-primary/30 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Establish Connection
              <ArrowRight size={14} className="opacity-75 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}