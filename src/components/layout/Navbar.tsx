import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              MentorConnect
            </Link>
          </div>
          <div className="flex space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:text-indigo-200">Dashboard</Link>
                <Link to="/mentors" className="hover:text-indigo-200">Find Mentors</Link>
                <Link to="/ai-chat" className="hover:text-indigo-200">AI Chat</Link>
                <Link to="/profile" className="hover:text-indigo-200">Profile</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-indigo-200">Login</Link>
                <Link to="/register" className="hover:text-indigo-200">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 