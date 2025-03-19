import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, IndianRupee, BookOpen, Menu, X, Guitar as Hospital } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-primary-600' : '';
  };

  const NavLink = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition ${isActive(to)}`}
      onClick={() => setIsMenuOpen(false)}
    >
      <div className="flex items-center space-x-1">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
    </Link>
  );

  return (
    <nav className="bg-primary-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/cancer-seva-icon.jpeg" 
              alt="Cancer Seva Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold">Cancer Seva</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary-600 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" icon={Home} label="Home" />
            <NavLink to="/resources" icon={Hospital} label="Resources" />
            <NavLink to="/crowdfunding" icon={IndianRupee} label="Crowdfunding" />
            <NavLink to="/chat" icon={MessageCircle} label="CanSeva GPT" />
            <NavLink to="/ebooks" icon={BookOpen} label="Ebooks & Help" />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <NavLink to="/" icon={Home} label="Home" />
              <NavLink to="/resources" icon={Hospital} label="Resources" />
              <NavLink to="/crowdfunding" icon={IndianRupee} label="Crowdfunding" />
              <NavLink to="/chat" icon={MessageCircle} label="CanSeva GPT" />
              <NavLink to="/ebooks" icon={BookOpen} label="Ebooks & Help" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;