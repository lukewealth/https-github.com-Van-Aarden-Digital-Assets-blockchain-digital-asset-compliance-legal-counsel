import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type Item = { title: string; content: React.ReactNode };

const Accordion: React.FC<{ items: Item[] }> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
      {items.map((item, idx) => (
        <div key={item.title}>
          <button
            type="button"
            aria-expanded={open === idx}
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <span className="font-serif text-navy">{item.title}</span>
            <FiChevronDown className={`transition-transform ${open === idx ? 'rotate-180' : ''}`} />
          </button>
          {open === idx && (
            <div className="px-4 pb-4 text-sm text-slate/80">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
