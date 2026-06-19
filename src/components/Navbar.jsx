import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2.5 group">
          <img 
            src="assets/CareerOasis.png" 
            alt="CareerOasis Logo" 
            className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-sans text-xl font-black text-oasis-primary tracking-tighter select-none">
            CareerOasis<span className="text-oasis-accent">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          {["Features", "Demo", "Showcase", "Tech Stack"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-oasis-primary transition-colors duration-200">
              {item}
            </a>
          ))}
          <a href="#connect" className="ml-2 px-4 py-2 rounded-lg bg-oasis-primary text-white text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}