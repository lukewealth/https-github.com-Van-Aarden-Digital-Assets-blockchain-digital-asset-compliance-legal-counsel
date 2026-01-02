
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Expertise', path: '/expertise' },
    { name: 'Mining Compliance', path: '/mining-compliance' },
    { name: 'Industries', path: '/industries' },
    { name: 'Regulatory Insight', path: '/regulatory-insight' },
    { name: 'Publications', path: '/publications' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className="text-navy font-serif text-xl tracking-tight font-bold uppercase">John Doe, Esq.</span>
          <span className="text-steel text-[10px] uppercase tracking-[0.2em] font-medium group-hover:text-gold transition-colors">Blockchain & Compliance Counsel</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors ${
                location.pathname === link.path ? 'text-gold' : 'text-slate'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 py-6">
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs uppercase tracking-widest font-semibold text-slate"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
