import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { fadeUp } from "../utils/animations";

export default function Cta() {
  const contactHref = "mailto:" + ["gsinrou", "gmail.com"].join("@");

  return (
    // 🎨 外层大背景保持纯净的呼吸色（可以根据前一个组件无缝承接，这里用 bg-oasis-cream 与 Reflection 保持一致）
    <section id="connect" className="py-20 bg-oasis-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* 📐 【终极重构】用带有现代高阶大圆角（rounded-[2.5rem]）的深邃蓝黑卡片包裹起来 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full bg-[#0B1329] rounded-[2.5rem] p-10 md:p-16 border border-slate-800/80 shadow-2xl shadow-slate-950/40 relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 text-left"
        >
          {/* 💎 隐约的绿色荧光发光雾气（Mesh Glow）——让深色卡片默认就散发高阶科技感 */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-oasis-light/[0.05] blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-oasis-primary/[0.06] blur-3xl pointer-events-none"></div>

          {/* Left — 极具统治力的硬核文案区 */}
          <div className="lg:max-w-2xl relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-oasis-primary flex items-center gap-3 mb-5">
              <span className="h-px w-6 bg-oasis-primary inline-block" /> Get in Touch
            </span>
            {/* 💎 标题调至 font-black 紧凑字重，完美与全站高阶审美对齐 */}
            <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-[1.1] text-white tracking-tight mb-4">
              The future of resume intelligence starts here.
            </h2>
            <p className="text-slate-400 text-xs md:text-sm md:text-base leading-relaxed font-medium">
              Open to architectural collaborations, enterprise scaling insights, or full-stack production feedback.
            </p>
          </div>

          {/* Right — 极致对齐的交互按钮 */}
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