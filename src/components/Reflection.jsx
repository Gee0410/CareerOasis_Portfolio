import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { ArrowRight } from "lucide-react"; 
import { FaGithub } from "react-icons/fa"; // 🌟 修正：改用 react-icons/fa 导入 FaGithub，彻底解决 Vite 编译错误

export default function Reflection() {
  return (
    // 🎨 温润舒服的 bg-oasis-cream 浅色底色
    <section id="reflection" className="relative py-24 bg-oasis-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* 📐 网格比例与上方的 Tech Stack 保持绝对一致对齐 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-12 items-start w-full">
          
          {/* 左栏：Reflection 标题 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="pt-1 lg:sticky lg:top-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-oasis-primary flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-oasis-primary inline-block" /> Project Reflection
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black leading-[1.1] text-[#111827] tracking-tight">
              The Engineering <br className="hidden lg:block" /> Journey
            </h2>
          </motion.div>

          {/* 右栏：全面融入薄荷绿设计系统（Oasis Colorway）的精美卡片区 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full space-y-6"
          >
            {/* 💡 提炼出的三大硬核突破标签 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-oasis-light/60 rounded-xl p-4 shadow-sm shadow-oasis-primary/[0.02]">
                <div className="text-[10px] font-black uppercase text-oasis-primary tracking-widest mb-1">Pillar 01</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">Async Engine Pipeline</div>
              </div>
              <div className="bg-white border border-oasis-light/60 rounded-xl p-4 shadow-sm shadow-oasis-primary/[0.02]">
                <div className="text-[10px] font-black uppercase text-oasis-primary tracking-widest mb-1">Pillar 02</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">Deterministic Guard</div>
              </div>
              <div className="bg-white border border-oasis-light/60 rounded-xl p-4 shadow-sm shadow-oasis-primary/[0.02]">
                <div className="text-[10px] font-black uppercase text-oasis-primary tracking-widest mb-1">Pillar 03</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">Atomic Design System</div>
              </div>
            </div>

            {/* 📜 引文主体卡片：采用半透明薄荷绿浸染 */}
            <div className="bg-white border border-oasis-light/40 rounded-2xl p-8 md:p-10 shadow-xl shadow-oasis-primary/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-oasis-light/30 blur-2xl pointer-events-none"></div>
              
              <blockquote className="font-sans text-base md:text-lg italic text-gray-600 leading-relaxed border-l-4 border-oasis-primary pl-6 py-1 select-none relative z-10">
                "Building CareerOasis forced us to transition from speculative AI workflows into predictable software engineering. By constraining probabilistic LLM nodes inside rigorous type-safe schemas, we succeeded in delivering enterprise-grade latency standards to ordinary university workflows."
              </blockquote>
            </div>

            {/* 🛠️ GitHub 极客高分流小横幅 —— 完美修复组件内部图标渲染 */}
            <div className="pt-2">
              <a 
                href="https://github.com/Gee0410/CareerOasis.git" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full bg-white hover:bg-slate-50 border border-oasis-light/50 hover:border-oasis-primary/40 rounded-xl p-4 transition-all duration-300 shadow-sm shadow-oasis-primary/[0.01] hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  {/* 使用修复后的 FaGithub 组件 */}
                  <div className="w-9 h-9 rounded-lg bg-oasis-primary/10 flex items-center justify-center text-oasis-primary group-hover:bg-oasis-primary group-hover:text-white transition-colors duration-300">
                    <FaGithub size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-wider text-oasis-primary">Repository Artifacts</p>
                    <p className="text-sm font-bold text-slate-700 mt-0.5">Explore our full 2026 Architectural Evolution Journey</p>
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