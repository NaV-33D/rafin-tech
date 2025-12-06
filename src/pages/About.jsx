const About = () => {
  return (
    <div className="py-24">
      
  {/* 1. TITLE BANNER SECTION */}
  <section className="md:px-10 text-center max-w-[1440px] mr-auto ml-auto pt-32 pr-6 pb-24 pl-6">
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0B1F3A] leading-[1.1]">
        About Radintech India
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
        Empowering digital education and infrastructure across India.
      </p>
    </div>
  </section>
  {/* 2. COMPANY OVERVIEW SECTION */}
  <section className="md:py-24 md:px-10 max-w-[1440px] mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left: Image */}
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-sm group bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Radintech Office & Innovation"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="bg-gradient-to-t from-[#0B1F3A]/20 to-transparent absolute top-0 right-0 bottom-0 left-0" />
      </div>
      {/* Right: Content */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#1A4F8B] text-xs font-medium font-geist-mono uppercase tracking-wider bg-slate-100">
          Our Story
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A] tracking-tight">
          Bridging the gap between tradition and technology.
        </h2>
        <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-light">
          <p className="">
            With over{" "}
            <span className="text-[#1A4F8B] font-medium">
              10+ years of expertise
            </span>{" "}
            in the EdTech sector, Radintech India stands at the forefront of the
            digital revolution in education. We don't just supply hardware; we
            engineer learning ecosystems.
          </p>
          <p>
            From deploying Smart Classrooms in remote government schools to
            setting up advanced Centres of Excellence in top universities, our
            solutions are designed for impact. We are fully aligned with{" "}
            <span className="text-[#0B1F3A] font-medium">NEP 2020</span>,
            ensuring our content and infrastructure support the modern
            pedagogical shift towards interactive learning.
          </p>
        </div>
        <div className="pt-4 grid grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-[#1A4F8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle-2"
                className="lucide lucide-check-circle-2"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0B1F3A]">
              Government Partnerships
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-[#1A4F8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle-2"
                className="lucide lucide-check-circle-2"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0B1F3A]">
              Digital Content Dev
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-[#1A4F8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle-2"
                className="lucide lucide-check-circle-2"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0B1F3A]">
              End-to-End Maintenance
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-[#1A4F8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle-2"
                className="lucide lucide-check-circle-2"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0B1F3A]">
              Scalable Infrastructure
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 3. MISSION, VISION, VALUES */}
  <section className="py-24 bg-[#F5F5F7]">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="p-10 rounded-3xl shadow-sm border hover:shadow-md transition-all duration-300 bg-white border-slate-200/50">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#1A4F8B] mb-6 bg-blue-50">
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
              data-lucide="target"
              className="lucide lucide-target"
            >
              <circle cx={12} cy={12} r={10} />
              <circle cx={12} cy={12} r={6} />
              <circle cx={12} cy={12} r={2} />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3">
            Our Mission
          </h3>
          <p className="text-slate-500 leading-relaxed">
            To democratize access to quality education by providing robust,
            affordable, and scalable technology infrastructure to every corner
            of India.
          </p>
        </div>
        {/* Vision */}
        <div className="p-10 rounded-3xl shadow-sm border hover:shadow-md transition-all duration-300 bg-white border-slate-200/50">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-50 text-indigo-600">
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
              data-lucide="eye"
              className="lucide lucide-eye"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx={12} cy={12} r={3} />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3">
            Our Vision
          </h3>
          <p className="text-slate-500 leading-relaxed">
            To be the most trusted partner for government and private
            institutions in their journey towards complete digital
            transformation.
          </p>
        </div>
        {/* Values */}
        <div className="p-10 rounded-3xl shadow-sm border hover:shadow-md transition-all duration-300 bg-white border-slate-200/50">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-teal-50 text-teal-600">
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
              data-lucide="heart-handshake"
              className="lucide lucide-heart-handshake"
            >
              <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3">
            Core Values
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Integrity in our dealings, Excellence in our execution, and
            Innovation in our solutions. We believe in technology that works for
            people.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* 4. LEADERSHIP TEAM */}
  <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-4">
        Leadership
      </h2>
      <p className="text-lg text-slate-500 font-light">
        The minds behind the infrastructure.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Leader 1 */}
      <div className="group">
        <div className="aspect-square rounded-2xl mb-4 overflow-hidden relative bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="CEO"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h4 className="text-lg font-semibold text-[#0B1F3A]">Rajesh Kumar</h4>
        <p className="text-sm text-slate-500 font-medium">Founder &amp; CEO</p>
      </div>
      {/* Leader 2 */}
      <div className="group">
        <div className="aspect-square rounded-2xl mb-4 overflow-hidden relative bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Director"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h4 className="text-lg font-semibold text-[#0B1F3A]">Priya Sharma</h4>
        <p className="text-sm text-slate-500 font-medium">
          Director of Operations
        </p>
      </div>
      {/* Leader 3 */}
      <div className="group">
        <div className="aspect-square rounded-2xl mb-4 overflow-hidden relative bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="CTO"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h4 className="text-lg font-semibold text-[#0B1F3A]">Arun Patel</h4>
        <p className="text-sm text-slate-500 font-medium">
          Chief Technology Officer
        </p>
      </div>
      {/* Leader 4 */}
      <div className="group">
        <div className="aspect-square rounded-2xl mb-4 overflow-hidden relative bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Govt Liaison"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h4 className="text-lg font-semibold text-[#0B1F3A]">Vikram Singh</h4>
        <p className="text-sm text-slate-500 font-medium">
          Head of Govt. Relations
        </p>
      </div>
    </div>
  </section>
  {/* 5. MILESTONES TIMELINE */}
  <section className="py-24 bg-[#FAFAFA]">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-slate-500 font-light mb-8 max-w-md">
            A decade of evolution. From a small hardware vendor to a
            comprehensive system integrator for the nation's education sector.
          </p>
          <div className="hidden lg:block w-32 h-1 bg-[#1A4F8B] rounded-full" />
        </div>
        <div className="relative border-l pl-10 space-y-12 border-slate-200">
          {/* 2012 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-1 h-3 w-3 rounded-full ring-4 bg-slate-300 ring-slate-50" />
            <span className="text-sm font-semibold text-[#1A4F8B] font-geist-mono block mb-1">
              2012
            </span>
            <h4 className="text-lg font-semibold text-[#0B1F3A] mb-1">
              Foundation
            </h4>
            <p className="text-slate-500 text-sm">
              Radintech established with a focus on computer hardware supply.
            </p>
          </div>
          {/* 2016 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-1 h-3 w-3 rounded-full ring-4 bg-slate-300 ring-slate-50" />
            <span className="text-sm font-semibold text-[#1A4F8B] font-geist-mono block mb-1">
              2016
            </span>
            <h4 className="text-lg font-semibold text-[#0B1F3A] mb-1">
              Expansion into Govt Schools
            </h4>
            <p className="text-slate-500 text-sm">
              Awarded first major contract for district-level lab setups.
            </p>
          </div>
          {/* 2019 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-1 h-3 w-3 rounded-full ring-4 bg-slate-300 ring-slate-50" />
            <span className="text-sm font-semibold text-[#1A4F8B] font-geist-mono block mb-1">
              2019
            </span>
            <h4 className="text-lg font-semibold text-[#0B1F3A] mb-1">
              AV &amp; Surveillance Division
            </h4>
            <p className="text-slate-500 text-sm">
              Launched dedicated wing for smart surveillance and boardrooms.
            </p>
          </div>
          {/* 2023 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-1 h-3 w-3 rounded-full ring-4 bg-slate-300 ring-slate-50" />
            <span className="text-sm font-semibold text-[#1A4F8B] font-geist-mono block mb-1">
              2023
            </span>
            <h4 className="text-lg font-semibold text-[#0B1F3A] mb-1">
              Centre of Excellence
            </h4>
            <p className="text-slate-500 text-sm">
              Partnered with technical universities for Robotics &amp; AI labs.
            </p>
          </div>
          {/* 2024 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-1 h-3 w-3 rounded-full bg-[#1A4F8B] ring-4 ring-blue-100" />
            <span className="text-sm font-semibold text-[#1A4F8B] font-geist-mono block mb-1">
              2024
            </span>
            <h4 className="text-lg font-semibold text-[#0B1F3A] mb-1">
              Statewide Deployment
            </h4>
            <p className="text-slate-500 text-sm">
              Implementing Smart Classrooms across 2000+ locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 6. IMPACT STATS SECTION */}
  <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-8 rounded-2xl flex flex-col justify-between h-48 border bg-slate-50 border-slate-100">
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
          data-lucide="monitor"
          className="lucide lucide-monitor text-[#1A4F8B] w-6 h-6 mb-auto"
        >
          <rect width={20} height={14} x={2} y={3} rx={2} />
          <line x1={8} x2={16} y1={21} y2={21} />
          <line x1={12} x2={12} y1={17} y2={21} />
        </svg>
        <div>
          <h3 className="text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-2">
            1,000+
          </h3>
          <p className="text-slate-500 font-medium text-sm">
            Smart Classrooms Installed
          </p>
        </div>
      </div>
      <div className="p-8 rounded-2xl flex flex-col justify-between h-48 border bg-slate-50 border-slate-100">
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
          className="lucide lucide-users text-[#1A4F8B] w-6 h-6 mb-auto"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx={9} cy={7} r={4} />
        </svg>
        <div>
          <h3 className="text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-2">
            10,000+
          </h3>
          <p className="text-slate-500 font-medium text-sm">Teachers Trained</p>
        </div>
      </div>
      <div className="p-8 rounded-2xl flex flex-col justify-between h-48 border bg-slate-50 border-slate-100">
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
          className="lucide lucide-building-2 text-[#1A4F8B] w-6 h-6 mb-auto"
        >
          <path d="M10 12h4" />
          <path d="M10 8h4" />
          <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        </svg>
        <div>
          <h3 className="text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-2">
            15+
          </h3>
          <p className="text-slate-500 font-medium text-sm">
            Statewide Projects
          </p>
        </div>
      </div>
      <div className="p-8 rounded-2xl flex flex-col justify-between h-48 border bg-slate-50 border-slate-100">
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
          data-lucide="network"
          className="lucide lucide-network text-[#1A4F8B] w-6 h-6 mb-auto"
        >
          <rect x={16} y={16} width={6} height={6} rx={1} />
          <rect x={2} y={16} width={6} height={6} rx={1} />
          <rect x={9} y={2} width={6} height={6} rx={1} />
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
          <path d="M12 12V8" />
        </svg>
        <div>
          <h3 className="text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-2">
            100%
          </h3>
          <p className="text-slate-500 font-medium text-sm">
            End-to-End Solutions
          </p>
        </div>
      </div>
    </div>
  </section>


    </div>
  );
};

export default About;
