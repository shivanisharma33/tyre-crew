import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => { setIsMenuOpen(false); }, [location]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Find Tyres', to: '/find-tyres', isNew: true },
    { 
      label: 'Commercial Tyres', 
      to: '#',
      dropdown: [
        { label: 'Locking Wheel Nut Removal', to: '/services/locking-wheel-nut-removal' },
        { label: 'Mobile Trailer Tyre Fitting', to: '/services/trailer-tyre-fitting' },
      ]
    },
    { label: 'Services', to: '/services' },
    { label: 'Areas We Cover', to: '/locations' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav
        className={`flex items-center justify-between px-4 md:px-10 h-20 md:h-28 transition-all duration-300 relative z-50 ${scrolled ? 'bg-white shadow-md' : 'bg-gray-100 shadow-sm' }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center h-full py-2 sm:py-3 w-1/2 sm:w-auto">
          <img 
            src="/images/MTC logo 2.png" 
            alt="Mobile Tyre Champions" 
            className="h-full w-auto max-w-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {links.map(({ label, to, isNew, dropdown }) => (
            <div key={label} className="relative group">
              <Link
                to={to}
                onClick={(e) => { if (to === '#') e.preventDefault(); }}
                className={`relative py-1 transition-colors flex items-center gap-1 ${isActive(to) ? 'text-[#FB7E10]' : 'hover:text-[#FB7E10]' } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FB7E10] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive(to) ? 'after:scale-x-100' : '' }`}
              >
                {label}
                {isNew && (
                  <span className="bg-[#FB7E10] text-white text-[8px] px-1.5 py-0.5 rounded-full font-black animate-pulse">NEW</span>
                )}
                {dropdown && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>
              {dropdown && (
                <div className="absolute top-full left-[-20px] mt-2 w-64 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="absolute top-[-6px] left-[30px] w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                  {dropdown.map((subItem) => (
                    <Link
                      key={subItem.to}
                      to={subItem.to}
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#FB7E10] hover:bg-orange-50/50 transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+447495336005"
            className="hidden lg:flex items-center gap-2 bg-[#FB7E10] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-orange-600 transition-all whitespace-nowrap"
          >
            <span>+44 7495 336 005</span>
            <Phone size={16} fill="white" />
          </a>

          <button
            className="lg:hidden p-2 text-black bg-white/50 rounded-md border border-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white fixed top-20 left-0 w-full shadow-xl border-t border-gray-100 z-40 py-4 px-6 flex flex-col space-y-2 font-semibold text-gray-800">
          {links.map(({ label, to, isNew, dropdown }) => (
            <div key={label} className="w-full">
              <Link
                to={to}
                onClick={(e) => { if (to === '#') e.preventDefault(); }}
                className={`flex items-center justify-between w-full py-3 px-2 rounded-lg transition-colors border-b border-gray-100 last:border-b-0 ${isActive(to) ? 'text-[#FB7E10] bg-orange-50' : 'hover:text-[#FB7E10] hover:bg-gray-50' }`}
              >
                <span className="flex items-center gap-2">
                  {label}
                  {isNew && (
                    <span className="bg-[#FB7E10] text-white text-[8px] px-1.5 py-0.5 rounded-full font-black underline-none">NEW</span>
                  )}
                </span>
                {dropdown && <ChevronDown size={16} className="text-gray-400" />}
              </Link>
              {dropdown && (
                <div className="flex flex-col pl-4 mt-1 border-l-2 border-orange-100 ml-4 space-y-1 mb-2">
                  {dropdown.map(subItem => (
                    <Link
                      key={subItem.to}
                      to={subItem.to}
                      className={`block py-2.5 px-3 text-sm rounded-md transition-colors ${isActive(subItem.to) ? 'text-[#FB7E10] bg-orange-50/50 font-bold' : 'text-gray-500 hover:text-[#FB7E10] hover:bg-gray-50'}`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="tel:+447495336005"
            className="flex items-center justify-center gap-2 bg-[#FB7E10] text-white w-full py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-600 transition-all mt-2"
          >
            <span>CALL: +44 7495 336 005</span>
            <Phone size={16} fill="white" />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
