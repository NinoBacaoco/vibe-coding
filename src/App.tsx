import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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

  // Mock login function for prototype
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated={isAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentors" element={<MentorSearch />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
