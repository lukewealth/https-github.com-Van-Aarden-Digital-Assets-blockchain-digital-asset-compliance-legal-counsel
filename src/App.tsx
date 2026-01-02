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
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institutional-value" element={<InstitutionalValue />} />
            <Route path="/energy-infrastructure" element={<EnergyInfrastructure />} />
            <Route path="/agriculture-infrastructure" element={<AgricultureInfrastructure />} />
            <Route path="/banking-integration" element={<BankingIntegration />} />
            <Route path="/government-sovereign" element={<GovernmentSovereign />} />
            <Route path="/market-precedent" element={<MarketPrecedent />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
