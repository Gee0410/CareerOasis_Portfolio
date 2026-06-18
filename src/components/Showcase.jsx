import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";

const galleryImages = [
  // 📐 1. 核心大海报
  { src: "/assets/poster.png", label: "Project Poster", isPoster: true, isLeftBonus: false },
  
  // 📐 2. 【新增】放在 Poster 正下方的照片，完美填补左侧剩余空间
  { src: "/assets/booth-3.jpg", label: "Innovate-IT 2026", isPoster: false, isLeftBonus: true },
  
  // 📐 3. 右侧的 4 张不规则高度照片
  { src: "/assets/booth-1.jpg", label: "Exhibition Booth", isPoster: false, isLeftBonus: false },
  { src: "/assets/booth-2.jpg", label: "Exhibition Booth", isPoster: false, isLeftBonus: false },
  { src: "/assets/nametag.jpg", label: "Exhibitor Tag", isPoster: false, isLeftBonus: false },
  { src: "/assets/assessor.jpg", label: "Assessor Presentation", isPoster: false, isLeftBonus: false },
  
];

export default function Showcase() {
  // 精确划分照片归属大类
  const posterImg = galleryImages.find(img => img.isPoster);
  const leftBonusImg = galleryImages.find(img => img.isLeftBonus);
  const rightImages = galleryImages.filter(img => !img.isPoster && !img.isLeftBonus);

  return (
    <section id="showcase" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <SectionHeading 
          tag="Exhibition"
          title="Innovate-IT 2026 Showcase."
          desc="Glimpses from the final exhibition — booth setup, poster presentations, and live system walkthroughs in front of industry judges."
        />

        {/* 自由高度非对称大布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-8 w-full items-start">
          
          {/* 🎯 【左侧独立大栏】：海报 + 额外照片，形成紧凑的垂直链条 */}
          <div className="flex flex-col gap-6 w-full">
            {/* 海报卡片 */}
            {posterImg && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden bg-slate-50 border border-gray-100 shadow-sm relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 cursor-zoom-in"
              >
                <img 
                  src={posterImg.src} 
                  alt={posterImg.label} 
                  className="w-full h-auto object-contain select-none" 
                  onError={(e) => { e.target.style.display = "none"; }} 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 -z-10 bg-slate-50 py-32">
                  <FileText size={24} className="text-gray-300" />
                  <p className="text-xs text-gray-400 font-medium">{posterImg.label}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 h-28">
                  <span className="text-white font-bold text-xs md:text-sm drop-shadow-sm select-none">{posterImg.label}</span>
                </div>
              </motion.div>
            )}

            {/* 【新增插槽】完美利用海报下方的多余空间 */}
            {leftBonusImg && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl overflow-hidden bg-slate-50 border border-gray-100 shadow-sm relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 cursor-zoom-in"
              >
                <img 
                  src={leftBonusImg.src} 
                  alt={leftBonusImg.label} 
                  className="w-full h-auto object-cover select-none" 
                  onError={(e) => { e.target.style.display = "none"; }} 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 -z-10 bg-slate-50 py-20">
                  <FileText size={20} className="text-gray-300" />
                  <p className="text-[11px] text-gray-400 font-medium">Photo missing</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 h-24">
                  <span className="text-white font-bold text-xs drop-shadow-sm select-none">{leftBonusImg.label}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* 🎯 【右侧专栏】4张照片，保持自由高度瀑布流交错对齐 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {rightImages.map((img, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: idx * 0.1 }} 
                className="rounded-3xl overflow-hidden bg-slate-50 border border-gray-100 shadow-sm relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 cursor-zoom-in"
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-auto object-cover select-none" 
                  onError={(e) => { e.target.style.display = "none"; }} 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 -z-10 bg-slate-50 py-20">
                  <FileText size={20} className="text-gray-300" />
                  <p className="text-[11px] text-gray-400 font-medium">Photo missing</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 h-24">
                  <span className="text-white font-bold text-xs drop-shadow-sm select-none">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}