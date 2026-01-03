import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SeoMeta from '../../components/SeoMeta';
import { brand } from '../../config/brand';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already authenticated
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error('Invalid password');
      }

      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('tokenExpiry', data.expiresAt);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SeoMeta title={brand.defaultPageTitle('Admin')} />
      <div className="min-h-screen bg-navy flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl text-white mb-2 uppercase">VDAC Admin</h1>
            <p className="text-steel text-sm uppercase tracking-widest">Secure Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-xs uppercase tracking-widest font-semibold text-white mb-3">
                Admin Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white placeholder-steel/50 rounded focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter password"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gold text-navy font-semibold uppercase tracking-widest text-sm rounded hover:bg-gold/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gold/20 text-center">
            <p className="text-xs text-steel uppercase tracking-widest">
              Van Aarden Digital Assets Counsel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
