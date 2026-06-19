import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-10 relative z-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            
            <div className="flex items-center justify-center md:justify-start gap-3 select-none">
              <img 
                src="assets/CareerOasis.png" 
                alt="CareerOasis Logo" 
                className="h-7 w-auto object-contain"
              />
              <span className="font-sans text-2xl font-black text-oasis-primary tracking-tighter">
                CareerOasis<span className="text-oasis-accent">.</span>
              </span>
            </div>

            <p className="text-gray-400 text-xs md:text-sm mt-4 max-w-sm leading-relaxed font-medium">
              An end-to-end intelligent career platform leveraging structured inference pipelines and optimized data validation to transform raw resumes into actionable, personalized career pathways.
            </p>
          </div>

          {/* 社交链接 —— 绑定你真实的 GitHub 与 LinkedIn 个人主页 */}
          <div className="flex items-center gap-3.5">
            <a 
              href="https://github.com/Gee0410" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100/60 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-oasis-primary hover:border-oasis-light hover:shadow-md hover:shadow-gray-100 hover:-translate-y-0.5"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sin-rou-gee-2484563bb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100/60 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-oasis-primary hover:border-oasis-light hover:shadow-md hover:shadow-gray-100 hover:-translate-y-0.5"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-gray-400/80">
          <p className="text-center md:text-left select-none">
            © 2026 GEE SIN ROU. FINAL YEAR PROJECT.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="hover:text-gray-600 transition-colors cursor-default">UNIVERSITI UTARA MALAYSIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}