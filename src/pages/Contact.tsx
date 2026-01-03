import React, { useState } from 'react';
import { brand } from '../config/brand';
import SeoMeta from '../components/SeoMeta';
import TopBar from '../components/TopBar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', organization: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <>
      <SeoMeta
        title={brand.defaultPageTitle('Contact')}
        description="Contact Van Aarden Digital Assets Counsel for institutional legal advisory."
        ogTitle={brand.defaultPageTitle('Contact')}
      />
      <div className="bg-offwhite min-h-screen">
        <TopBar title="Contact" showBack />

        <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-serif text-navy">Request Consultation</h1>
            <p className="text-lg text-slate/80 leading-relaxed max-w-2xl">
              Secure channel inquiries for institutional clients. Please provide your institutional affiliation, jurisdiction focus, and matter type. No confidential information should be transmitted via email.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs uppercase tracking-widest font-semibold text-navy mb-2">
                    Organization / Firm
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Describe your inquiry, jurisdiction, and matter type..."
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                    ✓ Thank you. Your inquiry has been received. We will respond within 24-48 hours.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 bg-navy text-white font-semibold uppercase tracking-widest text-sm rounded-sm hover:bg-navy/90 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>

                <p className="text-xs text-slate/60 uppercase tracking-widest">
                  {brand.disclaimer}
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-navy text-white p-6 rounded-sm space-y-4">
                <h3 className="text-sm font-serif uppercase">Direct Contact</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">Email</p>
                    <a
                      href="mailto:contact@vdac.legal"
                      className="text-white hover:text-gold transition-colors"
                    >
                      {brand.contactEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-sm space-y-4">
                <h3 className="text-sm font-serif uppercase text-navy">Guidelines</h3>
                <ul className="space-y-2 text-xs text-slate/70 leading-relaxed">
                  <li>• Provide your institutional affiliation</li>
                  <li>• Indicate primary jurisdiction</li>
                  <li>• Specify matter type (compliance, governance, etc.)</li>
                  <li>• No confidential files via email</li>
                  <li>• Expect response within 48 hours</li>
                </ul>
              </div>

              <div className="bg-gold/10 border border-gold/30 p-6 rounded-sm space-y-3">
                <p className="text-xs uppercase tracking-widest font-semibold text-navy">
                  Secure Communication
                </p>
                <p className="text-xs text-slate/70">
                  For sensitive matters, Signal or WhatsApp can be arranged upon initial contact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
