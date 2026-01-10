import {
  MonitorPlay,
  Layout,
  BookOpen,
  Users,
  Activity,
  Layers,
  Check,
  Mic2,
  LayoutGrid,
  Settings2,
  ArrowRight,
  Cctv,
  Microscope,
  GraduationCap,Speaker,
  Award
} from "lucide-react";


const Solutions = () => {
  return (
    <div className="">

  <section className="pt-40 pb-20 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
        Enterprise-grade infrastructure <br className="hidden md:block" /> for
        modern education.
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
        Comprehensive digital solutions designed for scalability, security, and
        seamless integration across government and private institutions.
      </p>
    </div>
  </section>
  {/* SOLUTIONS GRID */}
  <div id="solutions" className="flex flex-col gap-32 pb-28">
    {/* 1. Smart Classroom Implementation (Left Image) */}
    <section className="bg- py-10">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Smart Classroom"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover border border-slate-100"
            />
          </div>
          <div className="space-y-8">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1A4F8B] mb-2">
<MonitorPlay className="w-7 h-7 text-[#1A4F8B]" />
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F3A] mb-4 tracking-tight">
                Smart Classroom Implementation
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Transform traditional learning spaces into interactive hubs. Our
                end-to-end deployment includes hardware, software, and
                networking to ensure a glitch-free educational experience.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="feature-card p-5 rounded-2xl">
                <Layout className="w-5 h-5 text-[#1A4F8B] mb-3" />

                <h3 className="font-semibold text-[#0B1F3A] mb-1">
                  Interactive Panels
                </h3>
                <p className="text-sm text-slate-500">
                  4K touch displays with zero lag.
                </p>
              </div>
              <div className="feature-card p-5 rounded-2xl">
              <BookOpen className="w-5 h-5 text-[#1A4F8B] mb-3" />

                <h3 className="font-semibold text-[#0B1F3A] mb-1">
                  Curriculum Content
                </h3>
                <p className="text-sm text-slate-500">
                  Pre-loaded digital syllabus.
                </p>
              </div>
              <div className="feature-card p-5 rounded-2xl">
               <Users className="w-5 h-5 text-[#1A4F8B] mb-3" />

                <h3 className="font-semibold text-[#0B1F3A] mb-1">
                  Teacher Training
                </h3>
                <p className="text-sm text-slate-500">
                  Capacity building workshops.
                </p>
              </div>
              <div className="feature-card p-5 rounded-2xl">
               <Activity className="w-5 h-5 text-[#1A4F8B] mb-3" />

                <h3 className="font-semibold text-[#0B1F3A] mb-1">
                  Monitoring
                </h3>
                <p className="text-sm text-slate-500">
                  Real-time usage dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 2. Content Development (Right Image) */}
    <section className="bg-slate-50 py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="lg:order-2 relative group">
            <div className="absolute inset-0 bg-orange-50 rounded-3xl transform -rotate-1 transition-transform group-hover:-rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Digital Learning"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover border border-slate-100"
            />
          </div>
          <div className="lg:order-1 space-y-8">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-2">
              <Layers className="w-7 h-7 text-orange-600" />

            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F3A] mb-4 tracking-tight">
                Curriculum-Aligned Content
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                High-quality, visually engaging digital content tailored for the
                Indian education system. We bridge the gap between textbooks and
                digital understanding.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1F3A]">
                    NCERT &amp; State Board Aligned
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Full coverage of syllabus for Grades 1-12 across major
                    boards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1F3A]">
                    Regional Language Support
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Content available in Kannada, Hindi, Tamil, and English.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1F3A]">
                    Karnataka Govt LKG/UKG Syllabus
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Specialized early childhood modules approved by the state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 3. AV Solutions (Left Image) */}
    <section className="bg-">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Boardroom AV"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover border border-slate-100"
            />
          </div>
          <div className="space-y-8">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-2">
<Speaker className="w-7 h-7 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F3A] mb-4 tracking-tight">
                Audio Visual Solutions
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Professional-grade AV integration for corporate boardrooms,
                university auditoriums, and command centers. Crystal clear audio
                meets high-definition visuals.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="group bg-white flex items-center justify-between p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
                <div className="flex items-center gap-4">
<Mic2 className="w-6 h-6 text-indigo-600" />
                  <span className="font-semibold text-[#0B1F3A]">
                    Boardroom Conferencing Systems
                  </span>
                </div>
                {/* <ArrowRight
  className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors"
/> */}

              </div>
              <div className="group bg-white flex items-center justify-between p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
                <div className="flex items-center gap-4">
                  <LayoutGrid className="w-6 h-6 text-indigo-600" />

                  <span className="font-semibold text-[#0B1F3A]">
                    Large Format Video Walls
                  </span>
                </div>
                {/* <ArrowRight
  className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors"
/> */}

              </div>
              <div className="group bg-white flex items-center justify-between p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
                <div className="flex items-center gap-4">
                  <Settings2 className="w-6 h-6 text-indigo-600" />

                  <span className="font-semibold text-[#0B1F3A]">
                    Centralized AV Control Automation
                  </span>
                </div>
               {/* <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4. CCTV & Surveillance (Right Image) */}
    <section className="bg-slate-50 py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="lg:order-2 relative group">
            <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform -rotate-1 transition-transform group-hover:-rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Surveillance"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover border border-slate-100"
            />
          </div>
          <div className="lg:order-1 space-y-8">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-2">
<Cctv className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F3A] mb-4 tracking-tight">
                CCTV &amp; Surveillance
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Ensuring safety across campus networks. We specialize in
                large-scale government school deployments and sensitive lab
                monitoring with AI-driven analytics.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">
                  24/7
                </h4>
                <p className="font-medium text-[#0B1F3A]">
                  Real-time Monitoring
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  Remote access via secure cloud
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">AI</h4>
                <p className="font-medium text-[#0B1F3A]">Intelligent Alerts</p>
                <p className="text-xs text-slate-400 mt-2">
                  Motion detection &amp; intrusion
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 border-l-4 border-emerald-500 pl-4 py-1 italic">
              Trusted by Department of Public Instruction for district-wide
              exams.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 5. Centre of Excellence (Left Image) */}
    <section className="bg-">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-teal-50 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Robotics Lab"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover border border-slate-100"
            />
          </div>
          <div className="space-y-8">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-2">
<Microscope className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F3A] mb-4 tracking-tight">
                Centre of Excellence
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Advanced infrastructure for higher education. We build
                state-of-the-art labs for Universities and Technical Institutes
                to foster innovation and research.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1.5 h-full min-h-[50px] bg-teal-200 rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#0B1F3A] text-lg">
                    University-Level Labs
                  </h4>
                  <p className="text-slate-500">
                    Robotics, IoT, and Computer Science labs equipped with
                    industry-standard tools.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-full min-h-[50px] bg-teal-200 rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#0B1F3A] text-lg">
                    Digital Learning Infrastructure
                  </h4>
                  <p className="text-slate-500">
                    High-performance computing clusters and server rooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 6. Teacher Training (Right Image) */}
    <section className="bg-slate-50 py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="lg:order-2 relative group">
            <div className="absolute inset-0 bg-pink-50 rounded-3xl transform -rotate-1 transition-transform group-hover:-rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b955?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Teacher Workshop"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover border border-slate-100"
            />
          </div>
          <div className="lg:order-1 space-y-8">
            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-2">
              <GraduationCap className="w-7 h-7 text-pink-600" />

            </div>
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F3A] mb-4 tracking-tight">
                Teacher Training Programs
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Technology is only as good as its user. We empower educators
                with the skills to effectively use digital tools in the
                classroom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase">
                    Training Completed
                  </p>
                  <p className="text-2xl font-bold text-[#0B1F3A]">
                    15,000+ Educators
                  </p>
                </div>
                <div className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                  <Award className="w-5 h-5 text-pink-600" />

                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <p className="font-semibold text-[#0B1F3A] mb-2">
                  Hands-on Workshops
                </p>
                <p className="text-xs text-slate-500">
                  Practical device usage &amp; software demos.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <p className="font-semibold text-[#0B1F3A] mb-2">
                  Pedagogy Support
                </p>
                <p className="text-xs text-slate-500">
                  Integrating tech into lesson plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* COMPREHENSIVE PRODUCTS & SERVICES */}
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A] tracking-tight mb-4">
          Our Products &amp; Services
        </h2>
        <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
          Comprehensive solutions for education, governance, and smart infrastructure.
        </p>
      </div>

      {/* Smart Solutions */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-6 border-b border-slate-200 pb-3">
          Smart Solutions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Smart Classroom Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Smart City Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Smart Parking Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Integrated Control Command Center</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Smart Anganwadi</p>
          </div>
        </div>
      </div>

      {/* Education Technology */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-6 border-b border-slate-200 pb-3">
          Education Technology
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Interactive Flat Panel Displays</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Interactive Boards</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Multimedia Projectors</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Visualizers</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Podiums</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Language Lab Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Virtual Classroom Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Video Conferencing Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">3D Science Lab</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Institutional Furniture</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Text Book with Q.R. Code &amp; Video Enabled Features (Anganwadi to K-12 &amp; Competitive Exams)</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Content for Schools (Kannada/English Language)</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Library Solution</p>
          </div>
        </div>
      </div>

      {/* Digital Signage & Display */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-6 border-b border-slate-200 pb-3">
          Digital Signage &amp; Display
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">LED Indoor and Outdoor</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Vertical Signage Displays</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Information Kiosks</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Large Format Displays - Professional Display</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Video Wall</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Touch Tables</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Token System</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Electronic Lectern-Podium - Vertical Signage Solution</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Audio Podium</p>
          </div>
        </div>
      </div>

      {/* Security & Surveillance */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-6 border-b border-slate-200 pb-3">
          Security &amp; Surveillance
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">CCTV Cameras and Accessories</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Body Worn Cameras</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Mobile Surveillance</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">CCTV Surveillance</p>
          </div>
        </div>
      </div>

      {/* Printing Services */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-6 border-b border-slate-200 pb-3">
          Printing Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Digital Photo Copier</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <p className="text-sm font-medium text-[#0B1F3A]">Off-Set, Digital &amp; Large Format Printing Services Under One Roof</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA BANNER */}
  <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A4F8B] rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1cb5a3] rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
    <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
        Need a Custom Solution?
      </h2>
      <p className="text-blue-100 text-xl mb-10 font-light">
        Schedule a consultation with our government liaison team to discuss your
        infrastructure needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="px-8 py-4 bg-white text-[#0B1F3A] font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg shadow-black/10"
        >
          Contact Us Today
        </a>
        <a
          href="#"
          className="px-8 py-4 bg-[#1A4F8B] border border-blue-400/30 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors"
        >
          Download Brochure
        </a>
      </div>
    </div>
  </section>


    </div>
  );
};

export default Solutions;
