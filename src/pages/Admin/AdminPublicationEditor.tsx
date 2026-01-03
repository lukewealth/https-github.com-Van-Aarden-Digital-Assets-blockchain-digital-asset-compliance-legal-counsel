import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';

interface PublicationData {
  title: string;
  type: 'whitepaper' | 'client_alert' | 'publication';
  summary: string;
  pdf_url: string;
  tags: string[];
  featured_image: string;
}

const AdminPublicationEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PublicationData>({
    title: '',
    type: 'publication',
    summary: '',
    pdf_url: '',
    tags: [],
    featured_image: '',
  });
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    if (id) {
      fetchPublication();
    }
  }, [id]);

  const fetchPublication = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/publications/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setFormData({
        ...data,
        tags: data.tags ? JSON.parse(data.tags) : [],
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag),
    }));
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const method = id ? 'PUT' : 'POST';
      const url = id ? `/api/publications/${id}` : '/api/publications';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save');
      navigate('/admin/publications');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <AdminNav />
        <div className="min-h-screen bg-navy pt-24 flex items-center justify-center">
          <p className="text-white">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-navy pt-24">
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="mb-10">
            <h1 className="font-serif text-4xl text-white uppercase mb-2">
              {id ? 'Edit Publication' : 'Create Publication'}
            </h1>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                placeholder="Publication title"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
              >
                <option value="publication">Publication</option>
                <option value="whitepaper">White Paper</option>
                <option value="client_alert">Client Alert</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Summary
              </label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                placeholder="Publication summary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                  PDF URL
                </label>
                <input
                  type="text"
                  name="pdf_url"
                  value={formData.pdf_url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                  placeholder="/uploads/document.pdf"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                  Featured Image URL
                </label>
                <input
                  type="text"
                  name="featured_image"
                  value={formData.featured_image}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                  placeholder="/assets/images/featured.webp"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  className="flex-1 px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                  placeholder="Add tag"
                />
                <button
                  onClick={handleAddTag}
                  className="px-6 py-3 bg-gold/20 text-gold rounded font-semibold uppercase tracking-widest text-xs hover:bg-gold/40 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gold/20 border border-gold/50 text-gold rounded text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
                  >
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)} className="hover:text-gold/70">
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-gold/20">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-widest text-sm rounded hover:bg-gold/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
              <a
                href="#/admin/publications"
                className="px-8 py-3 bg-white/5 border border-gold/30 text-gold font-semibold uppercase tracking-widest text-sm rounded hover:bg-white/10 transition-colors"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPublicationEditor;
