import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function SectionHeading({ tag, title, desc, dark = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-8 max-w-2xl"
    >
      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 mb-4 ${dark ? 'text-oasis-light' : 'text-oasis-primary'}`}>
        <span className={`h-px w-6 inline-block ${dark ? 'bg-oasis-light' : 'bg-oasis-primary'}`} /> {tag}
      </span>
      
      <h2 className={`font-sans text-3xl md:text-4xl lg:text-[2.8rem] font-black leading-[1.1] mb-5 tracking-tight ${dark ? 'text-white' : 'text-[#111827]'}`}>
        {title}
      </h2>
      
      <p className={`${dark ? 'text-gray-400' : 'text-gray-500'} text-sm md:text-base leading-relaxed`}>
        {desc}
      </p>
    </motion.div>
  );
}