import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';

interface Publication {
  id: string;
  title: string;
  type: 'whitepaper' | 'client_alert' | 'publication';
  created_at: string;
}

const AdminPublications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin');
        return;
      }

      const response = await fetch('/api/publications', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch publications');
      const data = await response.json();
      setPublications(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/publications/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to delete');
      setPublications(publications.filter(p => p.id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  const typeLabel = (type: string) => {
    switch(type) {
      case 'whitepaper': return 'White Paper';
      case 'client_alert': return 'Client Alert';
      default: return 'Publication';
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-navy pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="font-serif text-4xl text-white uppercase mb-2">Publications</h1>
              <p className="text-steel text-sm uppercase tracking-widest">White Papers & Client Alerts</p>
            </div>
            <a
              href="#/admin/publications/new"
              className="px-6 py-3 bg-gold text-navy font-semibold uppercase tracking-widest text-xs rounded hover:bg-gold/90 transition-colors"
            >
              + New Publication
            </a>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12 text-steel">Loading...</div>
          ) : publications.length === 0 ? (
            <div className="text-center py-12 text-steel">
              <p>No publications yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white/5 border border-gold/20 rounded-lg p-6 flex justify-between items-center hover:border-gold/50 transition-all"
                >
                  <div>
                    <h3 className="font-serif text-lg text-white mb-2">{pub.title}</h3>
                    <span className="text-xs text-gold/70 uppercase tracking-widest px-2 py-1 bg-gold/10 rounded">
                      {typeLabel(pub.type)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`#/admin/publications/${pub.id}`}
                      className="px-4 py-2 bg-gold/20 text-gold rounded text-xs font-semibold uppercase tracking-widest hover:bg-gold/40 transition-colors"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDelete(pub.id)}
                      className="px-4 py-2 bg-red-900/20 text-red-200 rounded text-xs font-semibold uppercase tracking-widest hover:bg-red-900/40 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPublications;
