import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Mentor
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with experienced professionals who can guide you on your journey
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-100"
              >
                Get Started
              </Link>
              <Link
                to="/mentors"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700"
              >
                Browse Mentors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MentorConnect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Find Your Perfect Match</h3>
              <p className="text-gray-600">
                Our intelligent matching system connects you with mentors who align with your goals and interests.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Guidance</h3>
              <p className="text-gray-600">
                Get instant support from our AI assistant while finding the right mentor for your needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">Expert Mentorship</h3>
              <p className="text-gray-600">
                Connect with industry professionals who have real-world experience in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who have found their perfect mentor match.
          </p>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 