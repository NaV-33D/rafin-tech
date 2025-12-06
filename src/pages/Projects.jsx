const Projects = () => {
  return (
    <div className="">
      <>
  {/* ============================================== */}
  {/* FRAME 1: PROJECTS & CASE STUDIES PAGE          */}
  {/* ============================================== */}
  <div className="bg-white min-h-screen shadow-sm border-b border-gray-200">
    {/* 1. HEADER SECTION */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 pt-24 pb-12">
      <div className="max-w-3xl">
        <span className="text-[#1A4F8B] font-semibold tracking-wide uppercase text-xs mb-4 block">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold text-[#0B1F3A] tracking-tight mb-6 leading-[1.1]">
          Our Projects &amp; <br />
          Case Studies
        </h1>
        <p className="text-xl text-slate-500 font-light leading-relaxed">
          Explore how Radintech is modernizing infrastructure across government
          institutions, universities, and private enterprises through scalable
          technology solutions.
        </p>
      </div>
    </section>
    {/* 2. FILTER & SEARCH BAR */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-16">
      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Tabs/Filter */}
        <div className="flex p-1 bg-slate-100/80 rounded-xl w-full md:w-auto">
          <button className="px-6 py-2.5 rounded-lg bg-white shadow-sm text-[#0B1F3A] text-sm font-medium border border-slate-200/50">
            All Projects
          </button>
          <button className="px-6 py-2.5 rounded-lg text-slate-500 hover:text-[#0B1F3A] text-sm font-medium transition-colors">
            Government
          </button>
          <button className="px-6 py-2.5 rounded-lg text-slate-500 hover:text-[#0B1F3A] text-sm font-medium transition-colors">
            Higher Ed
          </button>
          <button className="px-6 py-2.5 rounded-lg text-slate-500 hover:text-[#0B1F3A] text-sm font-medium transition-colors">
            Private
          </button>
        </div>
        {/* Search */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <i data-lucide="search" className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm text-[#0B1F3A] placeholder-slate-400 focus:ring-2 focus:ring-[#1A4F8B]/20 outline-none transition-all"
          />
        </div>
      </div>
    </section>
    {/* 3. HIGHLIGHT CASE STUDY (FEATURED) */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-20">
      <div className="bg-[#0B1F3A] rounded-3xl overflow-hidden grid lg:grid-cols-2 shadow-xl shadow-slate-200">
        <div className="relative h-80 lg:h-auto bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1577896334614-5012e75e5bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Govt Project"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
            GOVERNMENT
          </div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <h3 className="text-3xl text-white font-semibold tracking-tight mb-4">
            Statewide Digital Classroom Initiative
          </h3>
          <p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
            Implementation of smart interactive panels and digital content
            servers across 2,500+ government high schools, impacting over 1
            million students in rural districts.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#0B1F3A] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
              View Case Study{" "}
              <i data-lucide="arrow-right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* 4. PROJECT GRID */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
          <div className="aspect-video bg-slate-100 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1A4F8B] px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
              HIGHER EDUCATION
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2 tracking-tight">
              Technical University Robotics Lab
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light flex-grow">
              End-to-end setup of an AI &amp; Robotics Center of Excellence
              featuring industrial arms and simulation workstations.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#1A4F8B] text-sm font-medium hover:gap-2 transition-all"
            >
              Read Success Story{" "}
              <i data-lucide="arrow-right" className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
          <div className="aspect-video bg-slate-100 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1A4F8B] px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
              PRIVATE SECTOR
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2 tracking-tight">
              Corporate Boardroom Modernization
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light flex-grow">
              Unified Communication integration for a multinational HQ,
              including video walls and wireless presentation systems.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#1A4F8B] text-sm font-medium hover:gap-2 transition-all"
            >
              Read Success Story{" "}
              <i data-lucide="arrow-right" className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
          <div className="aspect-video bg-slate-100 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1A4F8B] px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
              GOVERNMENT
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2 tracking-tight">
              District Command Center
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light flex-grow">
              Surveillance and monitoring infrastructure for district
              administration, integrating 500+ IP cameras into a central video
              wall.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#1A4F8B] text-sm font-medium hover:gap-2 transition-all"
            >
              Read Success Story{" "}
              <i data-lucide="arrow-right" className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* 5. SUCCESS METRICS */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-24">
      <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-[#0B1F3A] tracking-tight mb-2">
              1,000+
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              Smart Classrooms
            </div>
          </div>
          <div className="text-center md:text-left border-l border-slate-200 pl-8 md:pl-8 border-none md:border-solid">
            <div className="text-3xl md:text-4xl font-bold text-[#0B1F3A] tracking-tight mb-2">
              10K+
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              Teachers Trained
            </div>
          </div>
          <div className="text-center md:text-left border-l border-slate-200 pl-8 md:pl-8 border-none md:border-solid">
            <div className="text-3xl md:text-4xl font-bold text-[#0B1F3A] tracking-tight mb-2">
              20+
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              Govt Projects
            </div>
          </div>
          <div className="text-center md:text-left border-l border-slate-200 pl-8 md:pl-8 border-none md:border-solid">
            <div className="text-3xl md:text-4xl font-bold text-[#0B1F3A] tracking-tight mb-2">
              98%
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              On-Time Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</>

    </div>
  );
};

export default Projects;
