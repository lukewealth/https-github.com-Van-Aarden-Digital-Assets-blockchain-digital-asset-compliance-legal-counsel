import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { brand } from '../config/brand';

const AdminNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }).catch(console.error);
    }
    localStorage.removeItem('adminToken');
    localStorage.removeItem('tokenExpiry');
    navigate('/admin');
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Posts', path: '/admin/posts' },
    { name: 'Publications', path: '/admin/publications' },
    { name: 'Messages', path: '/admin/inbox' },
    { name: 'Media', path: '/admin/media' },
  ];

  return (
    <nav className="fixed w-full bg-navy border-b border-gold/30 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#/admin" className="flex items-center gap-3 group">
          <span className="text-xl font-serif uppercase font-bold text-gold">
            {brand.shortName} Admin
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded transition-colors ${
                isActive(link.path)
                  ? 'bg-gold/20 text-gold'
                  : 'text-steel hover:text-gold hover:bg-gold/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/#/"
            className="text-xs uppercase tracking-widest font-semibold text-steel hover:text-gold transition-colors"
          >
            Back to Site
          </a>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-xs uppercase tracking-widest font-semibold bg-red-900/20 text-red-200 rounded hover:bg-red-900/40 transition-colors"
          >
            Logout
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-gold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy border-b border-gold/30 py-4 px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              className={`block text-xs uppercase tracking-widest font-semibold rounded py-2 px-3 transition-colors ${
                isActive(link.path)
                  ? 'bg-gold/20 text-gold'
                  : 'text-steel hover:text-gold hover:bg-gold/10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-gold/20 space-y-2">
            <a
              href="/#/"
              className="block text-xs uppercase tracking-widest font-semibold text-steel hover:text-gold py-2"
              onClick={() => setIsOpen(false)}
            >
              Back to Site
            </a>
            <button
              onClick={handleLogout}
              className="w-full px-3 py-2 text-xs uppercase tracking-widest font-semibold bg-red-900/20 text-red-200 rounded hover:bg-red-900/40 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;
