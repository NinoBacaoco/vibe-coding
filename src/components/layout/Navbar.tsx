import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

interface NavbarProps {
  isAuthenticated: boolean;
  theme: string;
  onThemeToggle: () => void;
}

const Navbar = ({ isAuthenticated, theme, onThemeToggle }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-lg transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900/60 text-white border-gray-800/50' 
        : 'bg-white/60 text-gray-900 border-gray-200/50'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
                MentorConnect
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/mentors" className="nav-link">Find Mentors</Link>
                <Link to="/ai-chat" className="nav-link">AI Chat</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link-special">Sign Up</Link>
              </>
            )}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'text-yellow-400 hover:bg-yellow-400/10' 
                  : 'text-gray-600 hover:bg-gray-600/10'
              }`}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                theme === 'dark'
                  ? 'hover:bg-gray-800/80'
                  : 'hover:bg-gray-200/80'
              }`}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <div className={`px-4 pt-2 pb-3 space-y-1 backdrop-blur-lg ${
          theme === 'dark' 
            ? 'bg-gray-900/80' 
            : 'bg-white/80'
        }`}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="mobile-nav-link">Dashboard</Link>
              <Link to="/mentors" className="mobile-nav-link">Find Mentors</Link>
              <Link to="/ai-chat" className="mobile-nav-link">AI Chat</Link>
              <Link to="/profile" className="mobile-nav-link">Profile</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="mobile-nav-link">Login</Link>
              <Link to="/register" className="mobile-nav-link">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 