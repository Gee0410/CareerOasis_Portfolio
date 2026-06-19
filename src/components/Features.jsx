import { motion } from "framer-motion";
import { Cpu, Target, Map, Briefcase, ArrowRight } from "lucide-react";
import { fadeUp } from "../utils/animations";
import SectionHeading from "./SectionHeading";

const featuresData = [
  {
    icon: <Cpu size={22} />,
    tag: "01",
    title: "AI Resume Intelligence & HITL",
    desc: "Automatically extracts skills and education while giving you the power to manually verify and adjust your proficiency levels. Ensuring 100% accurate, hallucination-free AI analysis.",
  },
  {
    icon: <Target size={22} />,
    tag: "02",
    title: "ESCO-Verified Matching",
    desc: "Semantically maps your profile to high-potential roles. Every recommendation is cross-referenced with the global ESCO database and evaluated against the RIASEC personality framework.",
  },
  {
    icon: <Map size={22} />,
    tag: "03",
    title: "Personalized Career Blueprint",
    desc: "Stop guessing what to learn next. CareerOasis generates a personalized, step-by-step learning roadmap that specifically targets your technical skill gaps for your chosen path.",
  },
  {
    icon: <Briefcase size={22} />,
    tag: "04",
    title: "All-in-One Employability Toolkit",
    desc: "Turn planning into action. Seamlessly generate highly tailored Cover Letters, run your resume through our ATS Optimization Engine, and practice with role-specific AI Mock Interviews.",
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative min-h-screen flex flex-col justify-center bg-oasis-cream overflow-hidden py-20"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <SectionHeading
          dark={false}
          tag="Core Features"
          title="Everything you need to launch your career."
          desc="CareerOasis replaces scattered tools with a single, intelligent workspace. From the moment you upload your resume to landing your dream role, AI guides every step."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-200/60 hover:border-oasis-primary/40 hover:shadow-2xl hover:shadow-oasis-primary/25 transition-all duration-500 flex flex-col h-full"            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-oasis-light/50 flex items-center justify-center text-oasis-primary group-hover:bg-oasis-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <span className="font-sans text-3xl font-black text-gray-100 group-hover:text-oasis-light transition-colors duration-300 select-none">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">
                {feature.desc}
              </p>

              <a
                href="#demo"
                className="mt-8 inline-flex items-center gap-2 text-oasis-primary text-xs md:text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              >
                Explore tool <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}