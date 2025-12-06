import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
        <>
    <div>


  {/* NAVIGATION */}
    {/* <Navbar /> */}
  {/* PAGE 1: HERO SECTION */}
  <section
    id="home"
    className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white"
  >
    <div className="bg-gradient-to-br from-cyan-50/50 via-white to-white z-0 absolute top-0 right-0 bottom-0 left-0" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#1A4F8B] text-xs font-semibold tracking-wide uppercase font-geist-mono"
            style={{}}
          >
            <span className="w-2 h-2 rounded-full bg-[#1A4F8B]" />
            Govt Approved Partner
          </div>
          <h1
            className="text-5xl lg:text-6xl tracking-tight text-[#0B1F3A] leading-[1.1] font-geist-mono font-semibold"
            style={{}}
          >
            Transforming Education Through Technology.
          </h1>
          <p
            className="text-lg text-slate-500 max-w-lg leading-relaxed font-geist-mono"
            style={{}}
          >
            Radintech delivers premium digital infrastructure, smart classrooms,
            and enterprise AV solutions for government institutions and higher
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#solutions"
              className="px-8 py-3.5 bg-[#1A4F8B] text-white font-medium rounded-lg hover:bg-[#0B1F3A] transition-colors shadow-lg shadow-cyan-900/10 text-center font-geist-mono"
              style={{}}
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-colors text-center font-geist-mono"
              style={{}}
            >
              Contact Sales
            </a>
          </div>
        </div>
        {/* Right Visual */}
        <div className="relative">
          <div
            className="absolute -inset-4 bg-gradient-to-r from-cyan-100 to-amber-50 rounded-3xl blur-2xl opacity-40"
            style={{}}
          />
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Smart Classroom"
            className="relative rounded-2xl shadow-2xl border border-slate-100 object-cover w-full h-[400px] lg:h-[500px]"
            style={{}}
          />
          {/* Floating Badge */}
          <div
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-xl flex items-center gap-4 max-w-xs"
            style={{}}
          >
            <div
              className="bg-green-100 p-2 rounded-lg text-green-700"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle-2"
                className="lucide lucide-check-circle-2 w-6 h-6"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <p
                className="text-xs text-slate-500 font-medium uppercase font-geist-mono"
                style={{}}
              >
                Deployment
              </p>
              <p
                className="text-sm font-semibold text-[#0B1F3A] font-geist-mono"
                style={{}}
              >
                1,000+ Smart Classes Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CLIENTS SECTION */}
  <section className="py-10 border-y border-slate-200 bg-slate-50" style={{}}>
    <div className="max-w-7xl mx-auto px-6">
      <p
        className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest font-geist-mono"
        style={{}}
      >
        Trusted by Leading Institutions
      </p>
      <div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Text based logos representing clients */}
        <span
          className="text-xl font-bold text-slate-700 tracking-tighter font-geist-mono"
          style={{}}
        >
          VTU
        </span>
        <span
          className="text-xl font-bold text-slate-700 tracking-tighter font-geist-mono"
          style={{}}
        >
          JSS GROUP
        </span>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="building-2"
            className="lucide lucide-building-2 w-6 h-6"
          >
            <path d="M10 12h4" />
            <path d="M10 8h4" />
            <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
          </svg>
          <span
            className="text-lg font-bold text-slate-700 font-geist-mono"
            style={{}}
          >
            GOVT OF KARNATAKA
          </span>
        </div>
        <span
          className="text-xl font-bold text-slate-700 tracking-tighter font-geist-mono"
          style={{}}
        >
          MINORITY MINISTRY
        </span>
        <span
          className="text-xl font-bold text-slate-700 tracking-tighter font-geist-mono"
          style={{}}
        >
          UNIVERSITY OF MYSORE
        </span>
      </div>
    </div>
  </section>
  {/* SOLUTIONS OVERVIEW */}
  <section id="solutions" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className="text-3xl lg:text-4xl text-[#0B1F3A] mb-4 tracking-tight font-geist-mono font-semibold"
          style={{}}
        >
          Enterprise-Grade Solutions
        </h2>
        <p className="text-slate-500 text-lg font-geist-mono" style={{}}>
          Integrated ecosystems designed for modern education and governance.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div
          className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300"
          style={{}}
        >
          <div
            className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-[#1A4F8B] mb-6 group-hover:scale-110 transition-transform"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="monitor-play"
              className="lucide lucide-monitor-play w-6 h-6"
            >
              <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
              <rect x={2} y={3} width={20} height={14} rx={2} />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Smart Classroom
          </h3>
          <p
            className="text-slate-500 text-sm leading-relaxed mb-6 font-geist-mono"
            style={{}}
          >
            Interactive panels, digital podiums, and seamless device integration
            for next-gen learning.
          </p>
          <a
            href="#"
            className="text-[#1A4F8B] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all font-geist-mono"
            style={{}}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        {/* Card 2 */}
        <div
          className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-amber-100 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300"
          style={{}}
        >
          <div
            className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#1CB5A3] mb-6 group-hover:scale-110 transition-transform"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="book-open"
              className="lucide lucide-book-open w-6 h-6"
            >
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Content Development
          </h3>
          <p
            className="text-slate-500 text-sm leading-relaxed mb-6 font-geist-mono"
            style={{}}
          >
            NCERT-aligned digital curriculum, K-12 interactive modules, and
            regional language support.
          </p>
          <a
            href="#"
            className="text-[#1CB5A3] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all font-geist-mono"
            style={{}}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        {/* Card 3 */}
        <div
          className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
          style={{}}
        >
          <div
            className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#FF8A3D] mb-6 group-hover:scale-110 transition-transform"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="speaker"
              className="lucide lucide-speaker w-6 h-6"
            >
              <rect width={16} height={20} x={4} y={2} rx={2} />
              <path d="M12 6h.01" />
              <circle cx={12} cy={14} r={4} />
              <path d="M12 14h.01" />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            AV Solutions
          </h3>
          <p
            className="text-slate-500 text-sm leading-relaxed mb-6 font-geist-mono"
            style={{}}
          >
            Professional audio-visual setups for boardrooms, auditoriums, and
            large lecture halls.
          </p>
          <a
            href="#"
            className="text-[#FF8A3D] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all font-geist-mono"
            style={{}}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        {/* Card 4 */}
        <div
          className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300"
          style={{}}
        >
          <div
            className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="cctv"
              className="lucide lucide-cctv w-6 h-6"
            >
              <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
              <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
              <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
              <path d="M2 21v-4" />
              <path d="M7 9h.01" />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            CCTV &amp; Surveillance
          </h3>
          <p
            className="text-slate-500 text-sm leading-relaxed mb-6 font-geist-mono"
            style={{}}
          >
            Centralized monitoring systems ensuring safety across campus
            networks and government schools.
          </p>
          <a
            href="#"
            className="text-slate-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all font-geist-mono"
            style={{}}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        {/* Card 5 */}
        <div
          className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300"
          style={{}}
        >
          <div
            className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="microscope"
              className="lucide lucide-microscope w-6 h-6"
            >
              <path d="M6 18h8" />
              <path d="M3 22h18" />
              <path d="M14 22a7 7 0 1 0 0-14h-1" />
              <path d="M9 14h2" />
              <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
              <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Centre of Excellence
          </h3>
          <p
            className="text-slate-500 text-sm leading-relaxed mb-6 font-geist-mono"
            style={{}}
          >
            Advanced labs and research centers equipped with cutting-edge
            industry tools.
          </p>
          <a
            href="#"
            className="text-green-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all font-geist-mono"
            style={{}}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        {/* Card 6 */}
        <div
          className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300"
          style={{}}
        >
          <div
            className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="users"
              className="lucide lucide-users w-6 h-6"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle cx={9} cy={7} r={4} />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Teacher Training
          </h3>
          <p
            className="text-slate-500 text-sm leading-relaxed mb-6 font-geist-mono"
            style={{}}
          >
            Capacity building workshops to empower educators with digital
            pedagogy skills.
          </p>
          <a
            href="#"
            className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all font-geist-mono"
            style={{}}
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* PAGE 2: ABOUT & TIMELINE */}
  <section
    id="about"
    className="py-24 bg-slate-50 border-t border-slate-200"
    style={{}}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2
            className="text-3xl text-[#0B1F3A] mb-6 tracking-tight font-geist-mono font-semibold"
            style={{}}
          >
            Empowering Institutions Since 2012
          </h2>
          <p
            className="text-slate-600 mb-6 leading-relaxed font-geist-mono"
            style={{}}
          >
            Radintech India stands at the intersection of pedagogy and
            technology. Our mission is to bridge the digital divide in India's
            education sector by providing robust, scalable, and easy-to-use
            infrastructure.
          </p>
          <p
            className="text-slate-600 mb-8 leading-relaxed font-geist-mono"
            style={{}}
          >
            With over a decade of experience working with state governments and
            premier technical universities, we understand the nuance of public
            sector requirements and enterprise-grade delivery.
          </p>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div
              className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm"
              style={{}}
            >
              <p
                className="text-3xl text-[#1CB5A3] mb-1 font-geist-mono font-semibold"
                style={{}}
              >
                10+
              </p>
              <p
                className="text-xs text-slate-500 font-medium uppercase font-geist-mono"
                style={{}}
              >
                Years Experience
              </p>
            </div>
            <div
              className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm"
              style={{}}
            >
              <p
                className="text-3xl text-[#1A4F8B] mb-1 font-geist-mono font-semibold"
                style={{}}
              >
                5k+
              </p>
              <p
                className="text-xs text-slate-500 font-medium uppercase font-geist-mono"
                style={{}}
              >
                Classrooms
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Meeting"
            className="rounded-2xl shadow-lg object-cover h-full w-full grayscale-[20%]"
          />
        </div>
      </div>
      {/* Leadership / Values */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border-t-4 border-[#1A4F8B] shadow-sm">
          <h4
            className="text-lg font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Our Mission
          </h4>
          <p className="text-sm text-slate-500 font-geist-mono" style={{}}>
            To digitize 100,000 classrooms by 2025, ensuring every student has
            access to interactive learning tools.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border-t-4 border-[#1CB5A3] shadow-sm">
          <h4
            className="text-lg font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Our Vision
          </h4>
          <p className="text-sm text-slate-500 font-geist-mono" style={{}}>
            Creating a seamless educational ecosystem where technology is an
            enabler, not a barrier.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border-t-4 border-[#FF8A3D] shadow-sm">
          <h4
            className="text-lg font-semibold text-[#0B1F3A] mb-3 font-geist-mono"
            style={{}}
          >
            Core Values
          </h4>
          <p className="text-sm text-slate-500 font-geist-mono" style={{}}>
            Integrity in government partnerships, innovation in solutions, and
            inclusivity in content.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* PAGE 3: DETAILED SOLUTIONS (Alternating) */}
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 space-y-32">
      {/* Item 1 */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div
            className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-[#1A4F8B] mb-6"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="presentation"
              className="lucide lucide-presentation w-6 h-6"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
          </div>
          <h3
            className="text-3xl text-[#0B1F3A] mb-4 tracking-tight font-geist-mono font-semibold"
            style={{}}
          >
            Interactive Smart Classrooms
          </h3>
          <p
            className="text-slate-500 mb-8 leading-relaxed font-geist-mono"
            style={{}}
          >
            We transform traditional setups into dynamic learning environments.
            Our solution includes 4K interactive flat panels, durable digital
            podiums, and synchronized student devices.
          </p>
          <ul className="space-y-3">
            <li
              className="flex items-center gap-3 text-sm text-slate-700 font-geist-mono"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-5 h-5 text-[#1CB5A3]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
              Real-time annotation and screen sharing
            </li>
            <li
              className="flex items-center gap-3 text-sm text-slate-700 font-geist-mono"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-5 h-5 text-[#1CB5A3]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
              Integration with LMS platforms
            </li>
            <li
              className="flex items-center gap-3 text-sm text-slate-700 font-geist-mono"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-5 h-5 text-[#1CB5A3]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
              Ruggedized hardware for heavy usage
            </li>
          </ul>
        </div>
        <div
          className="order-1 lg:order-2 bg-slate-100 rounded-2xl p-2"
          style={{}}
        >
          <img
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            className="rounded-xl w-full object-cover h-80 lg:h-96 shadow-sm"
            alt="Smart Class"
          />
        </div>
      </div>
      {/* Item 2 */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="bg-slate-100 rounded-2xl p-2" style={{}}>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            className="rounded-xl w-full object-cover h-80 lg:h-96 shadow-sm"
            alt="Dashboard Monitoring"
          />
        </div>
        <div>
          <div
            className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-6"
            style={{}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="activity"
              className="lucide lucide-activity w-6 h-6"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
          </div>
          <h3
            className="text-3xl text-[#0B1F3A] mb-4 tracking-tight font-geist-mono font-semibold"
            style={{}}
          >
            Centralized Monitoring &amp; CCTV
          </h3>
          <p
            className="text-slate-500 mb-8 leading-relaxed font-geist-mono"
            style={{}}
          >
            Ensuring accountability and safety. Our centralized command centers
            allow administrators to view classroom activity, track device usage,
            and ensure infrastructure security across districts.
          </p>
          <ul className="space-y-3">
            <li
              className="flex items-center gap-3 text-sm text-slate-700 font-geist-mono"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-5 h-5 text-[#1CB5A3]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
              IP-based surveillance with AI alerts
            </li>
            <li
              className="flex items-center gap-3 text-sm text-slate-700 font-geist-mono"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-5 h-5 text-[#1CB5A3]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
              Bandwidth-optimized video streaming
            </li>
            <li
              className="flex items-center gap-3 text-sm text-slate-700 font-geist-mono"
              style={{}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-5 h-5 text-[#1CB5A3]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>{" "}
              Remote device management (MDM)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* PAGE 4: PROJECTS */}
  <section
    id="projects"
    className="py-24 bg-slate-50 border-t border-slate-200"
    style={{}}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2
            className="text-3xl text-[#0B1F3A] mb-2 tracking-tight font-geist-mono font-semibold"
            style={{}}
          >
            Featured Case Studies
          </h2>
          <p className="text-slate-500 font-geist-mono" style={{}}>
            Delivering impact at scale across the public sector.
          </p>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-[#1A4F8B] font-medium text-sm hover:gap-3 transition-all font-geist-mono"
          style={{}}
        >
          View all projects{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="arrow-right"
            className="lucide lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Large Project */}
        <div
          className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
          style={{}}
        >
          <div className="aspect-video lg:aspect-[2/1] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="University Project"
            />
          </div>
          <div className="p-8">
            <span
              className="text-xs font-bold text-[#1CB5A3] uppercase tracking-wider mb-2 block font-geist-mono"
              style={{}}
            >
              Government
            </span>
            <h3
              className="text-2xl text-[#0B1F3A] mb-3 font-geist-mono font-semibold"
              style={{}}
            >
              Karnataka State Smart Class Initiative
            </h3>
            <p
              className="text-slate-500 mb-6 max-w-2xl font-geist-mono"
              style={{}}
            >
              Deployed 500+ smart classrooms across rural districts with
              localized content and solar-powered backup systems.
            </p>
            <span
              className="text-sm font-medium text-[#1A4F8B] flex items-center gap-2 font-geist-mono"
              style={{}}
            >
              Read Case Study{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="arrow-right"
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        {/* Smaller Projects Stack */}
        <div className="space-y-8">
          <div
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{}}
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Lab"
              />
            </div>
            <div className="p-6">
              <span
                className="text-xs font-bold text-green-500 uppercase tracking-wider mb-1 block font-geist-mono"
                style={{}}
              >
                Higher Ed
              </span>
              <h3
                className="text-lg font-semibold text-[#0B1F3A] mb-2 font-geist-mono"
                style={{}}
              >
                VTU Centre of Excellence
              </h3>
              <p className="text-slate-500 text-sm font-geist-mono" style={{}}>
                Advanced robotics lab setup.
              </p>
            </div>
          </div>
          <div
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{}}
          >
            <div className="p-6 h-full flex flex-col justify-center">
              <div
                className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4"
                style={{}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="award"
                  className="lucide lucide-award w-5 h-5"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx={12} cy={8} r={6} />
                </svg>
              </div>
              <span
                className="text-xs font-bold text-green-500 uppercase tracking-wider mb-1 block font-geist-mono"
                style={{}}
              >
                Training
              </span>
              <h3
                className="text-lg font-semibold text-[#0B1F3A] mb-2 font-geist-mono"
                style={{}}
              >
                Minority Ministry Workshop
              </h3>
              <p
                className="text-slate-500 text-sm mb-4 font-geist-mono"
                style={{}}
              >
                Upskilling 2,000 teachers in digital aids.
              </p>
              <span
                className="text-sm font-medium text-[#1A4F8B] flex items-center gap-2 font-geist-mono"
                style={{}}
              >
                View Details{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* PAGE 5: DASHBOARD DEMO */}
  
  {/* PAGE 6: CONTACT */}
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="">
          <h2
            className="text-3xl text-[#0B1F3A] mb-6 tracking-tight font-geist-mono font-semibold"
            style={{}}
          >
            Partner With Us
          </h2>
          <p
            className="text-slate-500 mb-10 leading-relaxed font-geist-mono"
            style={{}}
          >
            Ready to upgrade your infrastructure? Contact our government liaison
            team for a consultation and demo.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-[#1A4F8B] shrink-0"
                style={{}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="map-pin"
                  className="lucide lucide-map-pin w-5 h-5"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold text-[#0B1F3A] block mb-1 font-geist-mono"
                  style={{}}
                >
                  Headquarters
                </h4>
                <p
                  className="text-slate-500 text-sm font-geist-mono"
                  style={{}}
                >
                  Radintech India Pvt LtdTech Park, Electronic CityBangalore,
                  Karnataka 560100
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-[#1A4F8B] shrink-0"
                style={{}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="mail"
                  className="lucide lucide-mail w-5 h-5"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x={2} y={4} width={20} height={16} rx={2} />
                </svg>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold text-[#0B1F3A] block mb-1 font-geist-mono"
                  style={{}}
                >
                  Email
                </h4>
                <a
                  href="mailto:contact@radintech.in"
                  className="text-slate-500 text-sm hover:text-[#1A4F8B] font-geist-mono"
                  style={{}}
                >
                  contact@radintech.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-[#1A4F8B] shrink-0"
                style={{}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="phone"
                  className="lucide lucide-phone w-5 h-5"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold text-[#0B1F3A] block mb-1 font-geist-mono"
                  style={{}}
                >
                  Phone
                </h4>
                <p
                  className="text-slate-500 text-sm font-geist-mono"
                  style={{}}
                >
                  +91 80 1234 5678
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div
          className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
          style={{}}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-xs font-semibold text-slate-700 uppercase font-geist-mono"
                  style={{}}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4F8B] focus:border-transparent text-sm transition-shadow"
                  style={{}}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs font-semibold text-slate-700 uppercase font-geist-mono"
                  style={{}}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4F8B] focus:border-transparent text-sm transition-shadow"
                  style={{}}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-xs font-semibold text-slate-700 uppercase font-geist-mono"
                style={{}}
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4F8B] focus:border-transparent text-sm transition-shadow"
                style={{}}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-xs font-semibold text-slate-700 uppercase font-geist-mono"
                style={{}}
              >
                Interested Solution
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4F8B] focus:border-transparent text-sm appearance-none"
                  style={{}}
                >
                  <option className="font-geist-mono" style={{}}>
                    Smart Classroom
                  </option>
                  <option className="font-geist-mono" style={{}}>
                    AV Solutions
                  </option>
                  <option className="font-geist-mono" style={{}}>
                    CCTV &amp; Surveillance
                  </option>
                  <option className="font-geist-mono" style={{}}>
                    Teacher Training
                  </option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="chevron-down"
                  className="lucide lucide-chevron-down absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none"
                  style={{}}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-xs font-semibold text-slate-700 uppercase font-geist-mono"
                style={{}}
              >
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4F8B] focus:border-transparent text-sm transition-shadow"
                style={{}}
                defaultValue={""}
              />
            </div>
            <button
              type="button"
              className="w-full py-3.5 bg-[#0B1F3A] text-white font-medium rounded-lg hover:bg-[#1A4F8B] transition-colors shadow-lg shadow-cyan-900/10 font-geist-mono"
              style={{}}
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* FOOTER */}
  {/* <Footer /> */}
</div>
</>
  )
}

export default Home