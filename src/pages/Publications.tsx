import React, { useState, useEffect } from 'react';
import SeoMeta from '../components/SeoMeta';
import { brand } from '../config/brand';

interface Publication {
  id: string;
  title: string;
  type: 'whitepaper' | 'client_alert' | 'publication';
  summary: string;
  date: string;
  pdfUrl?: string;
  tags?: string[];
}

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'whitepaper' | 'client_alert'>('all');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch publications from backend
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const response = await fetch('/api/publications');
      if (!response.ok) throw new Error('Failed to fetch publications');
      const data = await response.json();
      setPublications(data);
    } catch (error) {
      console.error('Error fetching publications:', error);
      // Fallback to empty state or cached data
      setPublications([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPublications = publications.filter(pub => {
    if (activeTab === 'all') return true;
    return pub.type === activeTab;
  });

  const tabs = [
    { id: 'all', label: 'ALL PUBLICATIONS', count: publications.length },
    { id: 'whitepaper', label: 'WHITE PAPERS', count: publications.filter(p => p.type === 'whitepaper').length },
    { id: 'client_alert', label: 'CLIENT ALERTS', count: publications.filter(p => p.type === 'client_alert').length },
  ];

  return (
    <>
      <SeoMeta
        title={brand.defaultPageTitle('Publications')}
        description="Institutional publications, white papers, and client alerts from Van Aarden Digital Assets Counsel (VDAC)."
        ogTitle={brand.defaultPageTitle('Publications')}
      />

      <div className="min-h-screen bg-gradient-to-br from-navy via-navy to-slate">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl uppercase tracking-tighter mb-6">
            Publications
          </h1>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Institutional insights, market analysis, and governance frameworks for digital assets and infrastructure capital.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          {/* Tab Navigation */}
          <div className="flex border-b border-gold/30 mb-12 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 text-xs uppercase tracking-widest font-semibold whitespace-nowrap relative transition-all ${
                  activeTab === tab.id
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-steel hover:text-gold border-b-2 border-transparent'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
                <span className="ml-2 text-gold/70">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {loading ? (
              <div className="text-center py-12 text-steel">
                <p>Loading publications...</p>
              </div>
            ) : filteredPublications.length === 0 ? (
              <div className="text-center py-12 text-steel">
                <p className="text-lg">No publications available in this category.</p>
              </div>
            ) : (
              filteredPublications.map((publication) => (
                <div
                  key={publication.id}
                  className="bg-white/5 border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-all hover:bg-white/10"
                >
                  <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs uppercase tracking-widest font-semibold text-gold px-3 py-1 border border-gold/50 rounded">
                          {publication.type === 'whitepaper'
                            ? 'White Paper'
                            : publication.type === 'client_alert'
                            ? 'Client Alert'
                            : 'Publication'}
                        </span>
                        <span className="text-xs text-steel uppercase tracking-widest">
                          {new Date(publication.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-white mb-3">
                        {publication.title}
                      </h3>
                      <p className="text-steel text-sm leading-relaxed mb-4">
                        {publication.summary}
                      </p>
                      {publication.tags && publication.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {publication.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gold/70 px-2 py-1 border border-gold/30 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {publication.pdfUrl && (
                      <div className="flex-shrink-0">
                        <a
                          href={publication.pdfUrl}
                          download
                          className="inline-block px-6 py-3 bg-gold text-navy font-semibold uppercase tracking-widest text-xs rounded hover:bg-gold/90 transition-colors"
                        >
                          Download PDF
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;
