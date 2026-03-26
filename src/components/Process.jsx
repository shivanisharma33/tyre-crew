import React from 'react';

const Process = () => {
  return (
    <div className="bg-white py-10 md:py-12 px-4 sm:px-10 lg:px-20 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto border-[2.5px] border-[#3B82F6] rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col lg:row-reverse lg:flex-row-reverse bg-[#0A0A0A] shadow-2xl">
        {/* Right Content - Image */}
        <div className="lg:w-1/2 relative h-[250px] sm:h-[400px] lg:h-auto overflow-hidden">
          <img
            src="/images/fitting-step.png"
            alt="Technician fitting tire"
            className="w-full h-full object-cover grayscale brightness-75 transition-all hover:grayscale-0 duration-1000"
          />
          {/* Alignment guide effect from image (optional red dot/blue line if they wanted it as part of design, but it looks like tools) */}
        </div>

        {/* Left Content - Steps */}
        <div className="lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white uppercase italic text-center md:text-left">
            <span className="text-[#FB7E10]">FLAT TYRE?</span> REACH US INSTANTLY –<br className="hidden md:block" />NO TIME WASTED!
          </h2>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-[#1a1512] border border-[#fb7e10]/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white italic">1. Give Us a Call</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                  Got a punctured tyre? Don't stress—call us now, experts arrive within 40-60 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-[#1a1512] border border-[#fb7e10]/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h18l-2 13H5L3 7z" />
                  <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white italic">2. Receive Your Quote</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                  Contact us for a clear upfront quote covering tyre, fitting, and services costs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-[#1a1512] border border-[#fb7e10]/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white italic">3. Fast Tyre Fitting</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                  Skilled technicians replace your tyre on-site; pay easily and drive away confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
