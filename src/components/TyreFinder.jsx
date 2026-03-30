import React, { useState } from 'react';
import { Search, Info, Car, Ruler, ChevronDown, HelpCircle } from 'lucide-react';

const TyreFinder = () => {
    const [activeTab, setActiveTab] = useState('size'); // 'size' or 'reg'
    const [regNumber, setRegNumber] = useState('');
    const [searching, setSearching] = useState(false);
    
    // Size Select States
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [diameter, setDiameter] = useState('');
    const [brand, setBrand] = useState('All');
    const [season, setSeason] = useState('Summer');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearching(true);
        setTimeout(() => setSearching(false), 1500);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 font-['Outfit']">
                
                {/* ── TABS ─────────────────────────────────────────────────── */}
                <div className="flex border-b border-gray-100 flex-wrap sm:flex-nowrap">
                    <button 
                        onClick={() => setActiveTab('size')}
                        className={`w-full sm:flex-1 py-4 sm:py-6 px-4 flex items-center justify-center gap-2 sm:gap-3 transition-all font-black text-xs sm:text-sm md:text-lg uppercase tracking-tight ${activeTab === 'size' ? 'bg-white text-black shadow-[inset_0_-4px_0_#FB7E10]' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                    >
                        <div className={`p-1.5 sm:p-2 rounded-lg ${activeTab === 'size' ? 'bg-[#FB7E10]/10 text-[#FB7E10]' : 'bg-gray-200 text-gray-400'}`}>
                            <Ruler size={16} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="whitespace-nowrap">Search by Size</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('reg')}
                        className={`w-full sm:flex-1 py-4 sm:py-6 px-4 flex items-center justify-center gap-2 sm:gap-3 transition-all font-black text-xs sm:text-sm md:text-lg uppercase tracking-tight ${activeTab === 'reg' ? 'bg-white text-black shadow-[inset_0_-4px_0_#FB7E10]' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                    >
                        <div className={`p-1.5 sm:p-2 rounded-lg ${activeTab === 'reg' ? 'bg-[#FB7E10]/10 text-[#FB7E10]' : 'bg-gray-200 text-gray-400'}`}>
                            <Car size={16} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="whitespace-nowrap">Search by Reg</span>
                    </button>
                </div>

                {/* ── CONTENT AREA ─────────────────────────────────────────── */}
                <div className="flex flex-col lg:flex-row p-8 lg:p-12 gap-12 items-start bg-gradient-to-br from-white to-slate-50">
                    
                    {/* Left side: Tyre Image */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#FB7E10] blur-[80px] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
                            <img 
                                src="/images/cta-bg.png" 
                                alt="Tyre" 
                                className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                                onError={(e) => { e.target.src = 'https://www.mobiletyremates.com/wp-content/themes/mobile-tyre-mates/assets/images/tyre.png'; }}
                            />
                        </div>
                    </div>

                    {/* Right side: Forms */}
                    <div className="w-full lg:w-2/3 space-y-10">
                        {activeTab === 'size' ? (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h3 className="text-3xl font-black text-black tracking-tight uppercase">
                                    Search for <span className="text-[#FB7E10]">Tyres by Size</span>
                                </h3>
                                
                                <form onSubmit={handleSearch} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Width */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Width</label>
                                            <div className="relative">
                                                <select className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                    <option>Select Width</option>
                                                    <option>205</option>
                                                    <option>225</option>
                                                    <option>245</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        {/* Height */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Height</label>
                                            <div className="relative">
                                                <select className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                    <option>Select Height</option>
                                                    <option>40</option>
                                                    <option>45</option>
                                                    <option>55</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        {/* Diameter */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Diameter</label>
                                            <div className="relative">
                                                <select className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                    <option>Select Diameter</option>
                                                    <option>R16</option>
                                                    <option>R17</option>
                                                    <option>R18</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Brand */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Brand / Product Class</label>
                                            <select className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                <option>All Brands</option>
                                                <option>Michelin</option>
                                                <option>Pirelli</option>
                                                <option>Continental</option>
                                            </select>
                                        </div>
                                        {/* Season */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Season</label>
                                            <select className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                <option>Summer</option>
                                                <option>Winter</option>
                                                <option>All Season</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-6">
                                        <div className="flex items-center gap-4 sm:gap-6 text-[#FB7E10] font-black uppercase text-[10px] tracking-widest">
                                            <button type="button" className="flex items-center gap-2 hover:underline">
                                                <HelpCircle size={14} className="sm:w-4 sm:h-4" /> Help
                                            </button>
                                            <button type="button" className="hover:underline">More filters</button>
                                        </div>
                                        <button 
                                            type="submit"
                                            className="w-full sm:w-auto bg-[#FB7E10] hover:bg-orange-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-base sm:text-lg shadow-xl shadow-orange-900/10 transition-all active:scale-95 disabled:opacity-50"
                                            disabled={searching}
                                        >
                                            {searching ? 'SEARCHING...' : 'Tyre Search'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h3 className="text-3xl font-black text-black tracking-tight uppercase">
                                    Tyre Size by <span className="text-[#FB7E10]">Reg Number</span>
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row items-end gap-6">
                                        <div className="flex-1 space-y-2 w-full">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Registration number</label>
                                            <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                                                <div className="flex items-center bg-white border-2 border-slate-100 rounded-xl px-3 sm:px-6 py-2 sm:py-4 font-black text-sm sm:text-xl text-black whitespace-nowrap shadow-sm">
                                                    BD51 SMR
                                                </div>
                                                <input 
                                                    type="text" 
                                                    placeholder="ENTER REG" 
                                                    className="flex-1 min-w-0 bg-white border-2 border-slate-100 rounded-xl px-4 sm:px-6 py-3 sm:py-4 font-bold text-sm sm:text-xl text-black focus:border-[#FB7E10] outline-none shadow-sm transition-all focus:ring-4 focus:ring-orange-100"
                                                />
                                            </div>
                                        </div>
                                        <button 
                                            className="w-full md:w-auto bg-[#FB7E10] hover:bg-orange-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-xl shadow-orange-900/10 transition-all active:scale-95"
                                            disabled={searching}
                                        >
                                            {searching ? 'FINDING...' : 'Tyre Search'}
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest animate-pulse">
                                        <span className="text-[#FB7E10]">⚡</span> SECURE DVLA VEHICLE LOOKUP ENABLED
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Tip */}
                <div className="bg-slate-50 p-6 border-t border-gray-100 text-center">
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em]">
                        Mobile Tyre Champions © 2026 • Precision Fitment GUARANTEED • 24/7 UK Emergency Response
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TyreFinder;
