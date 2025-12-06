import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-[#0B1F3A] rounded-lg flex items-center justify-center text-white font-semibold">
            R
          </div> */}
          <img src={logo} alt="" className="size-12" />
          <span className="text-lg font-semibold tracking-tight text-[#0B1F3A]">
            RADINTECH INDIA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-[#1A4F8B] transition-colors">
            Home
          </Link>

          <Link
            to="/solutions"
            className="hover:text-[#1A4F8B] transition-colors"
          >
            Solutions
          </Link>

          <Link to="/about" className="hover:text-[#1A4F8B] transition-colors">
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-[#1A4F8B] transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#1A4F8B] transition-colors"
          >
            Contact
          </Link>
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

        {/* Mobile Dropdown Menu */}
        <button
          className="md:hidden text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full 
  bg-white/97 backdrop-blur-xl border-b border-slate-200 shadow-lg 
  transition-all duration-300 overflow-hidden
  ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 py-6 space-y-4">
            <Link
              to="/"
              className="block text-lg font-medium text-[#0B1F3A] hover:text-[#1A4F8B] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/solutions"
              className="block text-lg font-medium text-[#0B1F3A] hover:text-[#1A4F8B] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Solutions
            </Link>

            <Link
              to="/about"
              className="block text-lg font-medium text-[#0B1F3A] hover:text-[#1A4F8B] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              to="/projects"
              className="block text-lg font-medium text-[#0B1F3A] hover:text-[#1A4F8B] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="block text-lg font-medium text-[#0B1F3A] hover:text-[#1A4F8B] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export { Navbar };
