import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Guitar as Hospital, MessageCircle, IndianRupee, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import ViewCounter from './components/ViewCounter';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import CrowdfundingPage from './pages/CrowdfundingPage';
import ChatbotPage from './pages/ChatbotPage';
import EbookPage from './pages/EbookPage';
import AddCampaign from './pages/AddCampaign';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/crowdfunding" element={<CrowdfundingPage />} />
            <Route path="/chat" element={<ChatbotPage />} />
            <Route path="/ebooks" element={<EbookPage />} />
            <Route path="/add-campaign" element={<AddCampaign />} />
          </Routes>
        </main>
        <ViewCounter />
        <footer className="bg-primary-500 text-white py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cancer Seva</h3>
                <p className="text-primary-100">Supporting cancer patients and their families through their journey.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-primary-100 hover:text-white">Home</Link></li>
                  <li><Link to="/resources" className="text-primary-100 hover:text-white">Resources</Link></li>
                  <li><Link to="/crowdfunding" className="text-primary-100 hover:text-white">Crowdfunding</Link></li>
                  <li><Link to="/chat" className="text-primary-100 hover:text-white">CanSeva GPT</Link></li>
                  <li><Link to="/ebooks" className="text-primary-100 hover:text-white">Ebooks & Help</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <p className="text-primary-100">24/7 Helpline: 1800-XXX-XXXX</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;