import { motion } from "framer-motion";
import { 
  AlertCircle, 
  Search, 
  Compass, 
  Sparkles, 
  FileSearch, 
  Target, 
  Activity, 
  Briefcase 
} from "lucide-react";
import { fadeUp } from "../utils/animations";

const problems = [
  {
    icon: <Search size={20} />,
    title: "Unclear Pathways",
    desc: "Struggling to find roles that perfectly match their academic background.",
  },
  {
    icon: <AlertCircle size={20} />,
    title: "Hidden Skill Gaps",
    desc: "Hard to pinpoint the exact technical gaps required by the modern industry.",
  },
  {
    icon: <Compass size={20} />,
    title: "Generic Guidance",
    desc: "Lack of personalized, actionable steps to build a strategic career plan.",
  },
];

const solutions = [
  { text: "HITL Resume Parsing", icon: <FileSearch size={16} /> },
  { text: "ESCO-Verified Matching", icon: <Target size={16} /> },
  { text: "Personalized Blueprints", icon: <Activity size={16} /> },
  { text: "Employability Toolkit", icon: <Briefcase size={16} /> }
];

export default function Challenge() {
  return (
    <section id="challenge" className="relative h-screen min-h-[650px] flex flex-col justify-center bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-center">

          {/* ─── Left: Headline & Solution ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-slate-300 inline-block" /> The Challenge
            </span>

            <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.8rem] font-black leading-[1.1] tracking-tight mb-5 text-[#111827]">
              Navigating the future <br/> shouldn't be a struggle.
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
              Job seekers have the potential, but often lack a clear roadmap to bridge the gap between their capabilities and industry expectations.
            </p>

            <div className="p-5 md:p-6 rounded-3xl border border-oasis-light bg-[#F4FAF8] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-oasis-light rounded-full blur-3xl opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Sparkles size={14} className="text-oasis-primary" />
                  </div>
                  <h3 className="font-bold text-oasis-primary text-sm tracking-wide">Our AI Solution</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {solutions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-oasis-light/50 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-oasis-primary shrink-0 bg-oasis-cream p-1.5 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-[11px] md:text-xs font-bold text-gray-700 leading-tight">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Problem cards ─── */}
          <div className="order-1 lg:order-2 flex flex-col gap-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-slate-100 to-oasis-light/20 rounded-full blur-3xl -z-10" />
            <div className="absolute left-[27px] top-8 bottom-8 w-px bg-slate-200/50 -z-0 hidden md:block"></div>

            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className="group relative bg-[#0F172A] p-5 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-4 hover:-translate-y-1 hover:shadow-2xl hover:shadow-oasis-primary/20 hover:border-slate-700 transition-all duration-300 z-10"
              >
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-oasis-accent group-hover:h-full transition-all duration-300 ease-out rounded-l-2xl" />

                <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-oasis-accent group-hover:text-oasis-light group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-base md:text-lg text-white tracking-wide mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}