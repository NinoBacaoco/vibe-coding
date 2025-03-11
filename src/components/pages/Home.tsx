import { Link } from 'react-router-dom';

interface HomeProps {
  theme: string;
}

const Home = ({ theme }: HomeProps) => {
  const isLightMode = theme === 'light';

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className={`w-full relative overflow-hidden ${isLightMode ? 'bg-white text-black' : ''}`}>
        {/* Background for dark mode or hero section in light mode */}
        <div className={`absolute inset-0 ${
          isLightMode 
            ? 'bg-gradient-to-br from-blue-500/10 via-indigo-400/10 to-purple-500/10' 
            : 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 opacity-90'
        }`} />
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-10" />
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isLightMode ? 'text-black' : 'text-white'}`}>
                Find Your Perfect Mentor
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${isLightMode ? 'text-gray-800' : 'text-white'}`}>
                Connect with experienced professionals who can guide you on your journey
              </p>
              <div className="space-x-4">
                <Link
                  to="/register"
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg ${
                    isLightMode 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/25'
                      : 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:opacity-90'
                  }`}
                >
                  Get Started
                </Link>
                <Link
                  to="/mentors"
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isLightMode
                      ? 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                      : 'bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-indigo-700'
                  }`}
                >
                  Browse Mentors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`w-full py-24 relative overflow-hidden ${
        isLightMode ? 'bg-gray-50' : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
            isLightMode ? 'text-black' : 'text-white'
          }`}>
            Why Choose MentorConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className={`shadow-lg rounded-xl p-8 text-center hover-lift border ${
              isLightMode 
                ? 'bg-white border-gray-200' 
                : 'bg-gray-800 border-gray-700'
            }`}>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className={`text-xl font-bold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
                Find Your Perfect Match
              </h3>
              <p className={isLightMode ? 'text-black' : 'text-white'}>
                Our intelligent matching system connects you with mentors who align with your goals and interests.
              </p>
            </div>
            <div className={`shadow-lg rounded-xl p-8 text-center hover-lift border ${
              isLightMode 
                ? 'bg-white border-gray-200' 
                : 'bg-gray-800 border-gray-700'
            }`}>
              <div className="text-5xl mb-6">💡</div>
              <h3 className={`text-xl font-bold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
                AI-Powered Guidance
              </h3>
              <p className={isLightMode ? 'text-black' : 'text-white'}>
                Get instant support from our AI assistant while finding the right mentor for your needs.
              </p>
            </div>
            <div className={`shadow-lg rounded-xl p-8 text-center hover-lift border ${
              isLightMode 
                ? 'bg-white border-gray-200' 
                : 'bg-gray-800 border-gray-700'
            }`}>
              <div className="text-5xl mb-6">🤝</div>
              <h3 className={`text-xl font-bold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
                Expert Mentorship
              </h3>
              <p className={isLightMode ? 'text-black' : 'text-white'}>
                Connect with industry professionals who have real-world experience in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full relative overflow-hidden ${
        isLightMode ? 'bg-white' : 'bg-gray-800'
      }`}>
        <div className={`absolute inset-0 ${
          isLightMode 
            ? 'bg-gradient-to-br from-indigo-100/50 to-purple-100/50' 
            : 'bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20'
        }`} />
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isLightMode ? 'text-black' : 'text-white'
            }`}>
              Ready to Start Your Journey?
            </h2>
            <p className={`text-xl mb-12 ${isLightMode ? 'text-black' : 'text-white'}`}>
              Join thousands of professionals who have found their perfect mentor match.
            </p>
            <Link
              to="/register"
              className={`inline-flex items-center px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 ${
                isLightMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/30'
                  : 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white'
              }`}
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 