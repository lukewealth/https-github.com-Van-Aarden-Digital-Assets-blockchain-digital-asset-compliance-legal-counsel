import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const FloatingContactButton: React.FC = () => (
  <div className="floating-contact">
    <Link
      to="/contact"
      className="px-5 py-3 bg-gold text-navy rounded-full shadow-lg flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold"
    >
      Contact <FiArrowRight />
    </Link>
  </div>
);

export default FloatingContactButton;
