import { Link } from 'react-router-dom';

// Mock data for the prototype
const upcomingSessions = [
  {
    id: 1,
    mentor: 'Sarah Johnson',
    date: '2024-03-15',
    time: '14:00',
    topic: 'Career Development Strategy',
  },
  {
    id: 2,
    mentor: 'Michael Chen',
    date: '2024-03-18',
    time: '10:30',
    topic: 'Technical Leadership',
  },
];

const recommendedMentors = [
  {
    id: 1,
    name: 'David Wilson',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    expertise: ['React', 'Node.js', 'System Design'],
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Emily Brown',
    title: 'Product Manager',
    company: 'Innovation Inc',
    expertise: ['Product Strategy', 'Agile', 'User Research'],
    rating: 4.8,
  },
  {
    id: 3,
    name: 'James Lee',
    title: 'UX Design Lead',
    company: 'Design Studio',
    expertise: ['UI/UX', 'Design Systems', 'User Testing'],
    rating: 4.7,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your mentorship journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Upcoming Sessions</h2>
              </div>
              <div className="p-5">
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900">{session.topic}</h3>
                            <p className="text-sm text-gray-500">with {session.mentor}</p>
                            <p className="text-sm text-gray-500">
                              {session.date} at {session.time}
                            </p>
                          </div>
                          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                            Join Call
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming sessions</p>
                )}
                <div className="mt-4">
                  <Link
                    to="/mentors"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    Book a new session →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/mentors"
                    className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <span className="text-2xl mb-2">🔍</span>
                    <span className="text-sm font-medium text-gray-900">Find Mentors</span>
                  </Link>
                  <Link
                    to="/ai-chat"
                    className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <span className="text-2xl mb-2">💡</span>
                    <span className="text-sm font-medium text-gray-900">AI Assistant</span>
                  </Link>
                  <Link
                    to="/profile"
                    className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <span className="text-2xl mb-2">👤</span>
                    <span className="text-sm font-medium text-gray-900">Edit Profile</span>
                  </Link>
                  <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <span className="text-2xl mb-2">📊</span>
                    <span className="text-sm font-medium text-gray-900">Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Mentors */}
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recommended Mentors</h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedMentors.map((mentor) => (
                    <div key={mentor.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                          <p className="text-sm text-gray-500">{mentor.title}</p>
                          <p className="text-sm text-gray-500">{mentor.company}</p>
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-2">
                              {mentor.expertise.map((skill, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            {mentor.rating}
                          </span>
                          <span className="ml-1 text-yellow-400">★</span>
                        </div>
                      </div>
                      <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 