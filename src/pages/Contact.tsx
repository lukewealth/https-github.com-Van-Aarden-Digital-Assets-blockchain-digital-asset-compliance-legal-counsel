import React from 'react';
import TopBar from '../components/TopBar';
import SEO from '../components/Seo';

const Contact: React.FC = () => (
  <div className="bg-white min-h-screen">
    <TopBar title="Contact" showBack />
    <SEO title="Contact | VDAC" description="Schedule a consultation with VDAC." canonical="https://www.vdac.legal/contact" />
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-4">
      <h1 className="text-3xl font-serif text-navy">Request Consultation</h1>
      <p className="text-slate/80 leading-relaxed">
        Secure channel inquiries only. Please share institutional affiliation, jurisdiction, and matter type. No confidential information or private keys should be transmitted.
      </p>
      <div className="space-y-3 text-sm text-slate/80">
        <p>Email: contact@vdac.legal</p>
        <p>Signal (upon request)</p>
      </div>
    </section>
  </div>
);

export default Contact;
