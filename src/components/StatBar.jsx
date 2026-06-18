import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const stats = [
  { value: "13k+", label: "ESCO Skills Mapped" },
  { value: "96.7%", label: "Match Relevance" },
  { value: "93.3%", label: "Analysis Accuracy" },
  { value: "100%", label: "User Satisfaction" },
];

export default function StatBar() {
  return (
    <div className="border-t border-b border-gray-100 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => {
          const match = stat.value.match(/([\d.]+)(.*)/);
          const num = match ? match[1] : stat.value;
          const suffix = match ? match[2] : "";

          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center border-gray-100 md:border-r last:border-r-0 md:px-2"            >
              {/* 这里把数字变小了，更显精致 */}
              <div className="font-sans font-black text-oasis-primary leading-none flex items-baseline justify-center">                <span className="text-3xl md:text-4xl tracking-tight">{num}</span>
                <span className="text-xl md:text-2xl ml-0.5 text-oasis-accent">{suffix}</span>
              </div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-gray-400 mt-3 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}