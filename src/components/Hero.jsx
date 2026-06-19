import { motion } from "framer-motion";
import { Cpu, PlayCircle, ArrowRight, Star, ChevronDown, ShieldCheck } from "lucide-react"; // 🌟 Added ShieldCheck for the ESCO badge
import { fadeUp } from "../utils/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-12 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#115E59 1px, transparent 1px), linear-gradient(90deg, #115E59 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-oasis-light opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] rounded-full bg-teal-100 opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 xl:gap-28 items-center">
          
          {/* ─── Left Column: Main Copy ─── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5F5EF] text-oasis-primary text-[11px] md:text-xs font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-oasis-primary" />
                Smart Job Matching Platform
              </span>
            </motion.div>

            <h1 className="font-sans text-[2.5rem] md:text-[3.5rem] lg:text-[3.5rem] xl:text-[3.5rem] font-black leading-[1.05] tracking-tight text-[#111827] mb-6">
              Turn your resume <br />
              into the{" "}
              <span className="text-oasis-primary">
                right
                <br />
                career path.
              </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
              CareerOasis deeply analyzes your resume, extracts your true market
              value, and instantly matches you with the career paths you're
              highly qualified for.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-oasis-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-oasis-deep transition-all shadow-lg shadow-oasis-primary/20 hover:shadow-xl hover:shadow-oasis-primary/30 hover:-translate-y-0.5 duration-200"
              >
                Watch Demo <PlayCircle size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-transparent text-oasis-text px-8 py-4 rounded-xl font-bold text-base hover:text-oasis-primary transition-all duration-200"
              >
                Explore Features <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* ─── Right Column: Floating UI Mockup ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-72 lg:w-80 xl:w-[340px] shrink-0 hidden lg:block"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-oasis-light rounded-3xl" />
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-white border border-gray-100 rounded-3xl" />

            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-7 z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-oasis-light flex items-center justify-center">
                  <Cpu size={18} className="text-oasis-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Analysing profile…
                  </p>
                  <div className="h-1.5 w-28 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div className="h-full w-3/4 bg-oasis-primary rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Career Matches
              </p>
              
              {/* 🎯 Data Array: Added 'verified' flag to trigger the ESCO badge */}
              {[
                { role: "Data Scientist", pct: 92, verified: true },
                { role: "ML Engineer", pct: 87, verified: true },
                { role: "Product Analyst", pct: 74, verified: false },
              ].map((item) => (
                <div key={item.role} className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      {/* Role Name & ESCO Badge Wrapper */}
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-xs text-gray-700">
                          {item.role}
                        </span>
                        {/* 🌟 ESCO Micro-Badge renders here if verified */}
                        {item.verified && (
                          <span 
                            className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded-[4px] bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7] text-[8px] font-bold uppercase tracking-wider leading-none"
                            title="Verified by ESCO Framework"
                          >
                            <ShieldCheck size={9} />
                            ESCO
                          </span>
                        )}
                      </div>
                      <span className="text-oasis-primary text-xs font-semibold">
                        {item.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-oasis-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-5 pt-5 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">Top skill gap</span>
                <span className="text-xs font-semibold bg-amber-50 text-amber-600 px-3 py-1 rounded-full">
                  PyTorch
                </span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -top-5 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3 flex items-center gap-2 z-20"
            >
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-gray-800">
                Personalised Roadmap
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-2 lg:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}