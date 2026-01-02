
import React from 'react';

const Publications: React.FC = () => {
  const items = [
    {
      type: "White Paper",
      title: "The Howey Test in the Age of Proof-of-Stake: A Regulatory Analysis",
      date: "Oct 2023",
      abstract: "An in-depth analysis of recent SEC enforcement actions regarding staking-as-a-service programs and the direct implications for decentralized protocols."
    },
    {
      type: "Client Alert",
      title: "Digital Asset Custody Rule Changes: Impact on Qualified Custodians",
      date: "Sep 2023",
      abstract: "Understanding the proposed amendments to the Investment Advisers Act of 1940 and the new technological requirements for institutional custodians."
    },
    {
      type: "Conference Material",
      title: "Mining Operations & Environmental Disclosures",
      date: "Aug 2023",
      abstract: "Presentation slides from the Global Digital Mining Summit regarding ESG reporting for industrial Bitcoin mining operations."
    }
  ];

  return (
    <div className="fade-in pb-32">
      <section className="py-24 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-8 text-gold">Publications</h1>
          <p className="text-xl text-steel leading-relaxed max-w-3xl">
            A comprehensive archive of academic white papers, formal client alerts, and conference presentations addressing the frontier of digital asset law.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center space-x-6 mb-16 border-b border-gray-200 pb-8">
            <span className="text-[10px] uppercase tracking-widest font-bold text-navy border-b-2 border-navy pb-8 -mb-8">All Publications</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate/50 pb-8 -mb-8 cursor-pointer hover:text-navy transition-colors">White Papers</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate/50 pb-8 -mb-8 cursor-pointer hover:text-navy transition-colors">Client Alerts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {items.map((pub, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-10 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">{pub.type}</span>
                <h3 className="text-2xl font-serif text-navy mb-6 leading-tight h-16">{pub.title}</h3>
                <p className="text-sm text-slate/60 mb-8 leading-relaxed h-20 overflow-hidden">{pub.abstract}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-steel">{pub.date}</span>
                  <button className="flex items-center text-[10px] uppercase tracking-widest font-bold text-navy hover:text-gold">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
