
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import MiningCompliance from './pages/MiningCompliance';
import BlockchainSecurity from './pages/BlockchainSecurity';
import AMLSanctions from './pages/AMLSanctions';
import DigitalAssets from './pages/DigitalAssets';
import Industries from './pages/Industries';
import RegulatoryInsight from './pages/RegulatoryInsight';
import Publications from './pages/Publications';
import About from './pages/About';
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
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/mining-compliance" element={<MiningCompliance />} />
            <Route path="/blockchain-security" element={<BlockchainSecurity />} />
            <Route path="/aml-sanctions" element={<AMLSanctions />} />
            <Route path="/digital-assets" element={<DigitalAssets />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/regulatory-insight" element={<RegulatoryInsight />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
