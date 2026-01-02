import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

type Practice = { title: string; subtitle: string; href: string };

const PracticeList: React.FC<{ items: Practice[] }> = ({ items }) => (
  <div className="bg-white border border-gray-200 rounded-md divide-y divide-gray-100 shadow-sm">
    {items.map((item) => (
      <Link key={item.title} to={item.href} className="list-row px-4">
        <div>
          <p className="text-sm font-serif text-navy">{item.title}</p>
          <p className="text-xs text-slate/70">{item.subtitle}</p>
        </div>
        <FiChevronRight className="chevron text-steel" />
      </Link>
    ))}
  </div>
);

export default PracticeList;
