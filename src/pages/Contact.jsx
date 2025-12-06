import {
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-8">
     {/* ============================================== */}
  {/* FRAME 2: CONTACT US PAGE                       */}
  {/* ============================================== */}
  <div className="bg-white min-h-screen pt-24 pb-24">
    {/* 1. PAGE TITLE */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F3A] tracking-tight mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
        Whether you have a question about our solutions, need a demo, or want to
        discuss a partnership, our team is ready to help.
      </p>
    </section>
    {/* 2. TWO-COLUMN LAYOUT */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-24">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
        {/* LEFT: INFO CARD */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] h-full">
            <h3 className="text-xl font-semibold text-[#0B1F3A] mb-8">
              Get in touch
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-[#1A4F8B]">
                  <MapPin className="w-5 h-5" />

                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0B1F3A] mb-1">
                    Headquarters
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    123 Innovation Park, Tech Hub,
                    <br />
                    New Delhi, India 110020
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-[#1A4F8B]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0B1F3A] mb-1">
                    Email Us
                  </h4>
                  <p className="text-slate-500 text-sm">hello@radintech.in</p>
                  <p className="text-slate-500 text-sm">support@radintech.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-[#1A4F8B]">
                  <Phone className="w-5 h-5" />

                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0B1F3A] mb-1">
                    Call Us
                  </h4>
                  <p className="text-slate-500 text-sm">+91 11 2345 6789</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Mon-Fri, 9am - 6pm IST
                  </p>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden bg-slate-100 h-40 w-full relative group cursor-pointer border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-semibold text-[#0B1F3A] shadow-sm">
                  View on Map
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT: CONTACT FORM */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-slate-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input-base w-full px-4 py-3.5 rounded-xl border border-slate-200 text-[#0B1F3A] placeholder-slate-400 focus:border-[#1A4F8B] focus:outline-none bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="input-base w-full px-4 py-3.5 rounded-xl border border-slate-200 text-[#0B1F3A] placeholder-slate-400 focus:border-[#1A4F8B] focus:outline-none bg-slate-50/50"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="input-base w-full px-4 py-3.5 rounded-xl border border-slate-200 text-[#0B1F3A] placeholder-slate-400 focus:border-[#1A4F8B] focus:outline-none bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select className="input-base w-full px-4 py-3.5 rounded-xl border border-slate-200 text-[#0B1F3A] focus:border-[#1A4F8B] focus:outline-none bg-slate-50/50 appearance-none cursor-pointer">
                      <option>Sales &amp; Partnerships</option>
                      <option>Technical Support</option>
                      <option>Government Tender</option>
                      <option>General Inquiry</option>
                    </select>
                    <i
                      data-lucide="chevron-down"
                      className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="input-base w-full px-4 py-3.5 rounded-xl border border-slate-200 text-[#0B1F3A] placeholder-slate-400 focus:border-[#1A4F8B] focus:outline-none bg-slate-50/50 resize-none"
                  defaultValue={""}
                />
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-[#1CB5A3] text-white font-semibold text-sm hover:bg-[#17a090] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#1CB5A3]/20 flex justify-center items-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* 3. FAQ SECTION */}
    <section className="max-w-[1440px] mx-auto px-6 md:px-10">
      <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-8 text-center tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {/* FAQ 1 */}
        <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:ring-1 open:ring-[#1A4F8B]/20 transition-all">
          <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
            <span className="text-lg font-medium text-[#0B1F3A]">
              How can I request a product demo?
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-open:rotate-180 transition-transform duration-300">
              <ChevronDown className="w-4 h-4" />

            </div>
          </summary>
          <div className="px-6 pb-6 text-slate-500 font-light leading-relaxed">
            You can request a demo by selecting "Sales &amp; Partnerships" in
            the contact form above. Our team typically schedules demos within 48
            hours for institutions.
          </div>
        </details>
        {/* FAQ 2 */}
        <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:ring-1 open:ring-[#1A4F8B]/20 transition-all">
          <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
            <span className="text-lg font-medium text-[#0B1F3A]">
              Do you provide Annual Maintenance Contracts (AMC)?
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-open:rotate-180 transition-transform duration-300">
              <ChevronDown className="w-4 h-4" />

            </div>
          </summary>
          <div className="px-6 pb-6 text-slate-500 font-light leading-relaxed">
            Yes, we offer comprehensive AMC packages for all our hardware
            installations, including onsite support and remote troubleshooting
            for software components.
          </div>
        </details>
        {/* FAQ 3 */}
        <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:ring-1 open:ring-[#1A4F8B]/20 transition-all">
          <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
            <span className="text-lg font-medium text-[#0B1F3A]">
              Are your solutions GeM (Government e-Marketplace) listed?
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-open:rotate-180 transition-transform duration-300">
              <ChevronDown className="w-4 h-4" />

            </div>
          </summary>
          <div className="px-6 pb-6 text-slate-500 font-light leading-relaxed">
            Absolutely. Most of our hardware and smart classroom solutions are
            listed on GeM to facilitate easy procurement for government
            departments and PSUs.
          </div>
        </details>
      </div>
    </section>
  </div>
    </div>
  );
};

export default Contact;
