import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import InstitutionalValue from './pages/InstitutionalValue';
import EnergyInfrastructure from './pages/EnergyInfrastructure';
import AgricultureInfrastructure from './pages/AgricultureInfrastructure';
import BankingIntegration from './pages/BankingIntegration';
import GovernmentSovereign from './pages/GovernmentSovereign';
import MarketPrecedent from './pages/MarketPrecedent';
import Team from './pages/Team';
import ExpertiseHub from './pages/ExpertiseHub';
import IndustryPractice from './pages/IndustryPractice';
import Publications from './pages/Publications';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminPosts from './pages/Admin/AdminPosts';
import AdminPostEditor from './pages/Admin/AdminPostEditor';
import AdminPublications from './pages/Admin/AdminPublications';
import AdminPublicationEditor from './pages/Admin/AdminPublicationEditor';
import AdminInbox from './pages/Admin/AdminInbox';
import AdminMedia from './pages/Admin/AdminMedia';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-gold/30">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-20 pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institutional-value" element={<InstitutionalValue />} />
            <Route path="/energy-infrastructure" element={<EnergyInfrastructure />} />
            <Route path="/agriculture-infrastructure" element={<AgricultureInfrastructure />} />
            <Route path="/banking-integration" element={<BankingIntegration />} />
            <Route path="/government-sovereign" element={<GovernmentSovereign />} />
            <Route path="/market-precedent" element={<MarketPrecedent />} />
            <Route path="/team" element={<Team />} />
            <Route path="/expertise" element={<ExpertiseHub />} />
            <Route path="/industry/:slug" element={<IndustryPractice />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            <Route path="/admin/posts/new" element={<AdminPostEditor />} />
            <Route path="/admin/posts/:id" element={<AdminPostEditor />} />
            <Route path="/admin/publications" element={<AdminPublications />} />
            <Route path="/admin/publications/new" element={<AdminPublicationEditor />} />
            <Route path="/admin/publications/:id" element={<AdminPublicationEditor />} />
            <Route path="/admin/inbox" element={<AdminInbox />} />
            <Route path="/admin/media" element={<AdminMedia />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
