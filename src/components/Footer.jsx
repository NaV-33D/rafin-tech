import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
  return (
    <div><footer
    className="bg-[#0B1F3A] text-white pt-20 pb-10 border-t border-slate-800"
    style={{}}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div
              className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#0B1F3A] font-semibold font-geist-mono"
              style={{}}
            >
              R
            </div>
            <span
              className="text-lg font-semibold tracking-tight text-white font-geist-mono"
              style={{}}
            >
              RADINTECH
            </span>
          </div>
          <p
            className="text-slate-400 text-sm leading-relaxed max-w-sm font-geist-mono"
            style={{}}
          >
            Enabling the future of education through robust digital
            infrastructure and enterprise technology solutions.
          </p>
        </div>
        <div>
          <h5
            className="text-sm font-semibold mb-4 text-white font-geist-mono"
            style={{}}
          >
            Solutions
          </h5>
          <ul className="space-y-3 text-sm text-slate-400">
  <li>
    <Link
      to="/solutions"
      className="hover:text-white transition-colors font-geist-mono"
    >
      Smart Classroom
    </Link>
  </li>

  <li>
    <Link
      to="/solutions"
      className="hover:text-white transition-colors font-geist-mono"
    >
      Content Development
    </Link>
  </li>

  <li>
    <Link
      to="/solutions"
      className="hover:text-white transition-colors font-geist-mono"
    >
      AV Integration
    </Link>
  </li>
</ul>

        </div>
        <div>
          <h5
            className="text-sm font-semibold mb-4 text-white font-geist-mono"
            style={{}}
          >
            Company
          </h5>
         <ul className="space-y-3 text-sm text-slate-400">
  <li>
    <Link
      to="/about"
      className="hover:text-white transition-colors font-geist-mono"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link
      to="/careers"
      className="hover:text-white transition-colors font-geist-mono"
    >
      Careers
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      className="hover:text-white transition-colors font-geist-mono"
    >
      Contact
    </Link>
  </li>
</ul>

        </div>
      </div>
      <div
        className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500"
        style={{}}
      >
        <p className="font-geist-mono" style={{}}>
          © 2024 Radintech India Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
         <a
  href="https://twitter.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white font-geist-mono"
>
  Twitter
</a>

<a
  href="https://www.linkedin.com/company/radintech-india/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white font-geist-mono"
>
  LinkedIn
</a>

<a
  href="https://instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white font-geist-mono"
>
  Instagram
</a>

        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer