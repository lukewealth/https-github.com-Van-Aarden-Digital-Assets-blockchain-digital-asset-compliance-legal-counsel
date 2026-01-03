import React, { useState } from 'react';

type RefItem = { label: string; url: string };

type Props = {
  title?: string;
  items: RefItem[];
  disclaimer?: string;
};

const ReferencesBlock: React.FC<Props> = ({
  title = "Sources & References",
  items,
  disclaimer = "External references are informational only and do not imply endorsement."
}) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-8" aria-label={title}>
      <div className="hidden md:block border border-gray-200 bg-white/80 p-5 rounded-sm">
        <h3 className="text-sm uppercase tracking-[0.18em] font-semibold text-slate mb-2">{title}</h3>
        <p className="text-xs text-slate/60 mb-3">{disclaimer}</p>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-gold transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden border border-gray-200 bg-white/80 rounded-sm">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="refs-mobile"
          className="w-full flex items-center justify-between px-4 py-3 text-sm uppercase tracking-[0.18em] font-semibold text-slate"
          onClick={() => setOpen((prev) => !prev)}
        >
          {title}
          <span className="text-slate text-base" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        {open && (
          <div id="refs-mobile" className="px-4 pb-4 space-y-2 text-sm text-slate/80">
            <p className="text-xs text-slate/60">{disclaimer}</p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReferencesBlock;
