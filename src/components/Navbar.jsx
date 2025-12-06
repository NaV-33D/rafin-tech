import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0B1F3A] rounded-lg flex items-center justify-center text-white font-semibold">
            R
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#0B1F3A]">
            RADINTECH
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-[#1A4F8B] transition-colors">Home</a>
          <a href="#solutions" className="hover:text-[#1A4F8B] transition-colors">Solutions</a>
          <a href="#about" className="hover:text-[#1A4F8B] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#1A4F8B] transition-colors">Projects</a>
          <a href="#platform" className="hover:text-[#1A4F8B] transition-colors">Platform</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#0B1F3A]">
            Log In
          </a> */}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#0B1F3A] text-white text-sm font-medium rounded-full 
            hover:bg-[#1A4F8B] transition-colors shadow-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-slate-600">
          <Menu className="w-6 h-6" />
        </button>

      </div>
    </nav>
  );
}
export { Navbar };