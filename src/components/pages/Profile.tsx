import { useState } from 'react';

// Mock user data for the prototype
const mockUserData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'mentee',
  interests: ['React', 'Node.js', 'System Design'],
  goals: 'Become a senior software engineer and improve system design skills.',
  mentorPreferences: {
    expertise: 'senior',
    communicationStyle: 'structured',
  },
  subscription: 'free',
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, _setUserData] = useState(mockUserData);
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'subscription'>('profile');

  const handleSave = () => {
    // In a real app, this would make an API call
    setIsEditing(false);
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={userData.name}
              readOnly={!isEditing}
              className={`mt-1 block w-full rounded-md ${
                isEditing
                  ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  : 'border-transparent bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              readOnly={!isEditing}
              className={`mt-1 block w-full rounded-md ${
                isEditing
                  ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  : 'border-transparent bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
              Career Goals
            </label>
            <textarea
              id="goals"
              rows={3}
              value={userData.goals}
              readOnly={!isEditing}
              className={`mt-1 block w-full rounded-md ${
                isEditing
                  ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  : 'border-transparent bg-gray-100'
              }`}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Areas of Interest</h3>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {userData.interests.map((interest, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Mentor Preferences</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">
              Preferred Expertise Level
            </label>
            <select
              id="expertise"
              value={userData.mentorPreferences.expertise}
              disabled={!isEditing}
              className={`mt-1 block w-full rounded-md ${
                isEditing
                  ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  : 'border-transparent bg-gray-100'
              }`}
            >
              <option value="junior">Junior (1-3 years)</option>
              <option value="mid">Mid-Level (4-7 years)</option>
              <option value="senior">Senior (8+ years)</option>
            </select>
          </div>
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700">
              Communication Style
            </label>
            <select
              id="style"
              value={userData.mentorPreferences.communicationStyle}
              disabled={!isEditing}
              className={`mt-1 block w-full rounded-md ${
                isEditing
                  ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  : 'border-transparent bg-gray-100'
              }`}
            >
              <option value="structured">Structured and formal</option>
              <option value="casual">Casual and friendly</option>
              <option value="direct">Direct and to-the-point</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubscriptionTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Current Plan</h3>
        <div className="mt-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-900 capitalize">{userData.subscription} Plan</h4>
                <p className="text-sm text-gray-500 mt-1">
                  {userData.subscription === 'free'
                    ? 'Basic access to mentorship features'
                    : 'Full access to all premium features'}
                </p>
              </div>
              {userData.subscription === 'free' && (
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Upgrade to Pro
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Available Plans</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-medium text-gray-900">Basic Premium</h4>
            <p className="text-2xl font-bold mt-2">$4.99<span className="text-sm font-normal">/month</span></p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> Access to all free mentors
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> 20 AI chat conversations/month
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> Up to 5 mentor sessions/month
              </li>
            </ul>
          </div>
          <div className="border-2 border-indigo-600 rounded-lg p-6 relative">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <h4 className="text-lg font-medium text-gray-900">Pro Premium</h4>
            <p className="text-2xl font-bold mt-2">$9.99<span className="text-sm font-normal">/month</span></p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> Access to all mentors including premium
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> Unlimited AI chat
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> Up to 10 sessions/month
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2">✓</span> Session recordings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg">
            {/* Profile Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                {activeTab === 'profile' && (
                  <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </button>
                )}
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'profile'
                      ? 'border-b-2 border-indigo-500 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('preferences')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'preferences'
                      ? 'border-b-2 border-indigo-500 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Preferences
                </button>
                <button
                  onClick={() => setActiveTab('subscription')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'subscription'
                      ? 'border-b-2 border-indigo-500 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Subscription
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="px-6 py-6">
              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'preferences' && renderPreferencesTab()}
              {activeTab === 'subscription' && renderSubscriptionTab()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile; 