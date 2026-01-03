import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';

interface PostData {
  title: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string[];
  featured_image: string;
  status: 'draft' | 'published';
  seo_title: string;
  seo_description: string;
}

const AdminPostEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostData>({
    title: '',
    excerpt: '',
    body: '',
    category: '',
    tags: [],
    featured_image: '',
    status: 'draft',
    seo_title: '',
    seo_description: '',
  });
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch post');
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
      const url = id ? `/api/posts/${id}` : '/api/posts';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save post');
      navigate('/admin/posts');
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
              {id ? 'Edit Post' : 'Create New Post'}
            </h1>
            <p className="text-steel text-sm uppercase tracking-widest">SEO-optimized blog post</p>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Post Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter post title"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                placeholder="Brief summary of the post"
              />
            </div>

            {/* Body */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Post Body *
              </label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                rows={12}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors font-mono text-sm"
                placeholder="Write your post (Markdown supported)"
              />
            </div>

            {/* SEO Section */}
            <div className="bg-white/5 border border-gold/20 rounded-lg p-6">
              <h3 className="font-serif text-xl text-white mb-4 uppercase">SEO Optimization</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seo_title"
                    value={formData.seo_title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors text-sm"
                    placeholder="Page title for search engines"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                    SEO Description
                  </label>
                  <textarea
                    name="seo_description"
                    value={formData.seo_description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors text-sm"
                    placeholder="Meta description for search engines (max 160 chars)"
                  />
                </div>
              </div>
            </div>

            {/* Category & Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select category</option>
                  <option value="regulatory">Regulatory</option>
                  <option value="governance">Governance</option>
                  <option value="compliance">Compliance</option>
                  <option value="infrastructure">Infrastructure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
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
                  placeholder="Add tag and press Enter"
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
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-gold/70"
                    >
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
                {saving ? 'Saving...' : 'Save Post'}
              </button>
              <a
                href="#/admin/posts"
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

export default AdminPostEditor;
