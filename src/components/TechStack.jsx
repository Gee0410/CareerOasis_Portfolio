import { Cpu, Brain, ShieldCheck, Wrench } from "lucide-react";

// 📊 100% 精准对齐 CareerOasis 真实系统生产栈数据结构
const technicalPillars = [
  {
    title: "Core Infrastructure",
    icon: <Cpu size={20} />,
    // 📊 融合维度1和维度2：强调单页应用、异步路由与持久化中间层
    desc: "Powering the core runtime environment leveraging React single-page components and a high-performance, asynchronous routing backend.",
    techs: ["React Client SPA", "FastAPI Async", "PostgreSQL Layer"]
  },
  {
    title: "Intelligence Layer",
    icon: <Brain size={20} />,
    // 📊 融合维度4（NLP/AI）：提炼自 Prompt Chaining、Structured Output 与 RAG 核心
    desc: "Orchestrating structured LLM inference queries alongside semantic similarity text mapping for advanced resume matching.",
    techs: ["Prompt Chaining", "Structured JSON Gen", "Retrieval-Augmented Gen"]
  },
  {
    title: "Data Integrity & Database",
    icon: <ShieldCheck size={20} />,
    // 📊 融合维度2和维度3（Security & Modeling）：引入契约校验与 ACID 事务强一致性
    desc: "Enforcing rigid schema boundaries, secure request payload serialization, and declarative data validation rules.",
    techs: ["Contract Validation", "ORM Persistence", "ACID Compliance"]
  },
  {
    title: "Production Toolchain",
    icon: <Wrench size={20} />,
    // 📊 融合维度1和维度5（Toolchain）：引入生命周期管理、路由守卫与编译流水线
    desc: "Enterprise-ready client-side rendering pipeline assets, dynamic component compilation, and routing guard access controls.",
    techs: ["Asset Pipeline", "Request Lifecycle", "Route Access Guards"]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-28 bg-[#0B1329] text-white overflow-hidden">
      {/* 背景深处那抹灵动的荧光星云气雾（让大底色彻底告别沉闷） */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-oasis-primary/[0.04] blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* ─── Top Row: Heading Section ─── */}
        <div className="mb-16 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-oasis-primary flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-oasis-primary inline-block" /> The Architecture
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.8rem] font-black leading-[1.1] mb-5 text-white tracking-tight">
            Engineered for modern production environments.
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Every layer engineered with strict intent — from fundamental runtimes to advanced intelligence capabilities.
          </p>
        </div>

        {/* ─── Technical Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalPillars.map((pillar, idx) => (
            <div 
              key={idx}
              // 🎨 【解决沉闷】用 bg-slate-900/50 的半透明微弱磨砂替代纯黑，加入 border-slate-800/80 细微反光边界
              className="group bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 hover:border-oasis-light/60 hover:shadow-2xl hover:shadow-oasis-primary/[0.03] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-5">
                {/* 🎨 【解决Icon看不见】默认高亮系统绿（text-oasis-primary），在 group-hover 激活时平滑转为深 slate-900 墨黑色，完美在绿底上绽放！ */}
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/40 flex items-center justify-center text-oasis-primary group-hover:bg-oasis-primary group-hover:text-slate-900 group-hover:border-transparent transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-black tracking-tight text-white transition-colors duration-200 group-hover:text-oasis-light">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                {pillar.desc}
              </p>
              
              {/* 下方微章：精简而硬核的生产技术包 */}
              <div className="flex flex-wrap gap-2">
                {pillar.techs.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-bold uppercase tracking-wider bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700/40 transition-colors duration-200 group-hover:border-oasis-light/20 group-hover:bg-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}