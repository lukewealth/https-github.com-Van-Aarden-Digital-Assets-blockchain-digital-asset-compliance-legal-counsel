import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';

interface Post {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

const AdminPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin');
        return;
      }

      const response = await fetch('/api/posts?status=all', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to delete post');
      setPosts(posts.filter(p => p.id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-navy pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="font-serif text-4xl text-white uppercase mb-2">Manage Posts</h1>
              <p className="text-steel text-sm uppercase tracking-widest">Blog & SEO Content</p>
            </div>
            <a
              href="#/admin/posts/new"
              className="px-6 py-3 bg-gold text-navy font-semibold uppercase tracking-widest text-xs rounded hover:bg-gold/90 transition-colors"
            >
              + New Post
            </a>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12 text-steel">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 text-steel">
              <p>No posts yet. Create your first post!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white/5 border border-gold/20 rounded-lg p-6 flex justify-between items-center hover:border-gold/50 transition-all"
                >
                  <div>
                    <h3 className="font-serif text-lg text-white mb-2">{post.title}</h3>
                    <div className="flex gap-3 text-xs text-steel uppercase tracking-widest">
                      <span>Slug: {post.slug}</span>
                      <span className={`px-2 py-1 rounded ${
                        post.status === 'published'
                          ? 'bg-green-900/20 text-green-200'
                          : 'bg-yellow-900/20 text-yellow-200'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`#/admin/posts/${post.id}`}
                      className="px-4 py-2 bg-gold/20 text-gold rounded text-xs font-semibold uppercase tracking-widest hover:bg-gold/40 transition-colors"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDelete(post.id)}
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

export default AdminPosts;
