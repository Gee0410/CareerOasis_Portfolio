import { motion } from "framer-motion";
import { Cpu, Target, Layers, ArrowRight } from "lucide-react";
import { fadeUp } from "../utils/animations";
import SectionHeading from "./SectionHeading";

// 📉 【优化】稍微精简了文案，防止换行过多撑破屏幕高度
const featuresData = [
  {
    icon: <Cpu size={22} />,
    tag: "01",
    title: "AI Resume Intelligence",
    desc: "Automatically parses and extracts structured data—such as skills and education—from uploaded resumes.",
  },
  {
    icon: <Target size={22} />,
    tag: "02",
    title: "Personalized Matching",
    desc: "Recommends tailored career paths by semantically mapping your unique profile to real-world industry roles.",
  },
  {
    icon: <Layers size={22} />,
    tag: "03",
    title: "All-in-One Platform",
    desc: "Seamlessly integrates career guidance, ATS analysis, and job discovery into one unified ecosystem.",
  },
];

export default function Features() {
  return (
    // 📉 【优化】加入 h-screen 和 flex-col justify-center，并缩减垂直 padding
    <section
      id="features"
      className="relative h-screen min-h-[750px] flex flex-col justify-center bg-oasis-cream overflow-hidden py-10"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* ─── 标题区 (减小下边距 mb-16 -> mb-8) ─── */}
        <SectionHeading
          dark={false} // 告诉组件现在是暗黑模式
          tag="Core Features"
          title="Everything you need to launch your career."
          desc="CareerOasis replaces scattered tools with a single, intelligent workspace. From the moment you upload your resume to landing your dream role, AI guides every step."
        />

        {/* ─── 三大核心功能卡片 (紧凑型排版) ─── */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              // 📉 【优化】内边距 p-8 改为 p-6 md:p-7
              className="group relative p-6 md:p-7 rounded-3xl bg-white border border-gray-100 hover:border-oasis-primary/30 hover:shadow-xl hover:shadow-oasis-primary/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-oasis-light/50 flex items-center justify-center text-oasis-primary group-hover:bg-oasis-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <span className="font-sans text-3xl font-black text-gray-100 group-hover:text-oasis-light transition-colors duration-300 select-none">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2.5 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed flex-grow">
                {feature.desc}
              </p>

              {/* 🔗 【优化】现在是一个真实的链接，点击会平滑滚动到 #demo 视频区 */}
              <a
                href="#demo"
                className="mt-6 inline-flex items-center gap-2 text-oasis-primary text-[11px] md:text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              >
                Explore tool <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
