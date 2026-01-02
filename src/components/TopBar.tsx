import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiArrowLeft, FiSearch } from 'react-icons/fi';

type Props = {
  title?: string;
  showBack?: boolean;
};

const TopBar: React.FC<Props> = ({ title, showBack }) => {
  const navigate = useNavigate();
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
      <button
        aria-label={showBack ? "Go back" : "Open menu"}
        onClick={() => showBack ? navigate(-1) : null}
        className="p-2 text-navy"
      >
        {showBack ? <FiArrowLeft /> : <FiMenu />}
      </button>
      <div className="text-xs uppercase tracking-[0.25em] font-bold text-navy">
        {title || 'VDAC'}
      </div>
      <Link to="/expertise" aria-label="Search expertise" className="p-2 text-navy">
        <FiSearch />
      </Link>
    </header>
  );
};

export default TopBar;
