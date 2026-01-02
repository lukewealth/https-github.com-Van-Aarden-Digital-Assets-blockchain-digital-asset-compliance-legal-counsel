
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in pb-32">
      <section className="py-24 bg-offwhite border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif text-navy mb-8">Secure Inquiry</h1>
          <p className="text-xl text-slate/70 leading-relaxed">
            Please use the secure form below to initiate a compliance inquiry. 
            Submissions are monitored by legal counsel directly.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-gray-100 p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy">Full Name</label>
                  <input type="text" required className="w-full bg-offwhite border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Legal Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy">Organization</label>
                  <input type="text" required className="w-full bg-offwhite border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Company or Entity" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy">Matter Type</label>
                <select className="w-full bg-offwhite border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Crypto Mining Compliance Audit</option>
                  <option>AML/Sanctions Program Review</option>
                  <option>Regulatory Defense & Inquiries</option>
                  <option>Institutional Asset Custody Structuring</option>
                  <option>Other Institutional Matter</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy">Jurisdiction</label>
                <input type="text" required className="w-full bg-offwhite border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Primary Jurisdiction of Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy">Confidential Message</label>
                <textarea rows={6} className="w-full bg-offwhite border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Briefly describe the nature of your inquiry..."></textarea>
              </div>

              <div className="bg-navy/5 p-6 border-l-4 border-navy">
                <p className="text-[11px] text-slate/70 italic leading-relaxed">
                  <strong>Privilege Disclaimer:</strong> Submission of this form does not create an attorney-client relationship. 
                  Do not send sensitive cryptographic material, private keys, or seed phrases through this web form. 
                  All initial communications are for scoping purposes only.
                </p>
              </div>

              <button type="submit" className="w-full bg-navy text-white text-xs uppercase tracking-[0.2em] font-bold py-6 hover:bg-gold transition-all">
                Submit Secure Inquiry
              </button>
            </form>
          ) : (
            <div className="bg-white border border-gray-100 p-20 text-center space-y-8 shadow-sm">
              <div className="w-20 h-20 bg-navy text-white flex items-center justify-center mx-auto rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-serif text-navy">Inquiry Received</h2>
              <p className="text-slate/60 max-w-sm mx-auto leading-relaxed">
                Your message has been received securely. Counsel will review the submission and contact you via the provided organizational channels.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-xs uppercase tracking-widest font-bold text-gold underline">Return to Form</button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Direct Communication</h4>
            <p className="text-sm text-slate/70 font-medium">counsel@firm.legal</p>
            <p className="text-sm text-slate/70 font-medium">+1 (212) 555-0199</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Alternative Channels</h4>
            <p className="text-sm text-slate/70 font-medium italic">Signal Encrypted Available Upon Request</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
