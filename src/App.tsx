import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import MentorSearch from './components/pages/MentorSearch';
import AIChat from './components/pages/AIChat';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Onboarding from './components/pages/Onboarding';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme;
  }, [theme]);

  // Mock login function for prototype
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-[#1a1c2e] to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-black'
      }`}>
        {/* Light mode ambient pattern */}
        {theme === 'light' && (
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-pink-100/40 to-blue-100/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
          </div>
        )}
        
        {/* Dark mode ambient pattern */}
        {theme === 'dark' && (
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          </div>
        )}
        
        <Navbar 
          isAuthenticated={isAuthenticated} 
          theme={theme} 
          onThemeToggle={toggleTheme}
        />
        <main className="flex-grow relative z-10 pt-16">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentors" element={<MentorSearch />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
