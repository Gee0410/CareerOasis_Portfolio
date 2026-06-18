import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Demo() {
  return (
    <section id="demo" className="py-28 bg-oasis-text">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 flex items-center justify-center gap-3 mb-4"><span className="h-px w-6 bg-emerald-400 inline-block" /> Project Demo</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-white leading-tight">See CareerOasis in action.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-oasis-primary via-teal-600 to-emerald-700 rounded-3xl blur-xl opacity-40 scale-105" />
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#0a1a18] shadow-2xl">
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/raL60aebmmI?rel=0&modestbranding=1" title="CareerOasis Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </motion.div>
      </div>
    </section>
  );
}