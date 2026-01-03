import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminNav from '../../components/AdminNav';

interface DashboardStats {
  draftPosts: number;
  publishedPosts: number;
  newMessages: number;
  totalPublications: number;
}

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState<DashboardStats>({
    draftPosts: 0,
    publishedPosts: 0,
    newMessages: 0,
    totalPublications: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setLoading(false);
      return;
    }

    setIsAuthenticated(true);
    fetchStats(token);
  }, []);

  const fetchStats = async (token: string) => {
    try {
      const response = await fetch('/api/admin/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();
      setStats(data);
    } catch (err: any) {
      setError(err.message);
      if (err.message.includes('401')) {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-navy pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="mb-10">
            <h1 className="font-serif text-4xl text-white uppercase mb-2">Admin Dashboard</h1>
            <p className="text-steel text-sm uppercase tracking-widest">Welcome back</p>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded text-red-200 mb-6">
              {error}
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Draft Posts"
              value={stats.draftPosts}
              icon="📝"
            />
            <StatsCard
              title="Published Posts"
              value={stats.publishedPosts}
              icon="✓"
            />
            <StatsCard
              title="New Messages"
              value={stats.newMessages}
              icon="💬"
              highlight={stats.newMessages > 0}
            />
            <StatsCard
              title="Publications"
              value={stats.totalPublications}
              icon="📄"
            />
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 border border-gold/20 rounded-lg p-8">
            <h2 className="font-serif text-2xl text-white mb-6 uppercase">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminActionButton
                label="Write New Post"
                path="/admin/posts/new"
              />
              <AdminActionButton
                label="Manage Posts"
                path="/admin/posts"
              />
              <AdminActionButton
                label="Add Publication"
                path="/admin/publications/new"
              />
              <AdminActionButton
                label="View Messages"
                path="/admin/inbox"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
  highlight?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, highlight }) => {
  return (
    <div className={`p-6 rounded-lg border transition-all ${
      highlight
        ? 'bg-gold/10 border-gold'
        : 'bg-white/5 border-gold/20'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold text-steel mb-2">
            {title}
          </p>
          <p className="text-4xl font-serif text-white">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
};

interface AdminActionButtonProps {
  label: string;
  path: string;
}

const AdminActionButton: React.FC<AdminActionButtonProps> = ({ label, path }) => {
  return (
    <a
      href={`#${path}`}
      className="p-4 bg-gold/10 border border-gold/50 rounded text-gold font-semibold uppercase tracking-widest text-xs hover:bg-gold/20 transition-colors text-center"
    >
      {label}
    </a>
  );
};

export default AdminDashboard;
