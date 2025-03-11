import { useState } from 'react';

// Mock data for the prototype
const mentors = [
  {
    id: 1,
    name: 'David Wilson',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    expertise: ['React', 'Node.js', 'System Design'],
    rating: 4.9,
    hourlyRate: 75,
    availability: ['Mon', 'Wed', 'Fri'],
    isPremium: true,
  },
  {
    id: 2,
    name: 'Emily Brown',
    title: 'Product Manager',
    company: 'Innovation Inc',
    expertise: ['Product Strategy', 'Agile', 'User Research'],
    rating: 4.8,
    hourlyRate: 90,
    availability: ['Tue', 'Thu'],
    isPremium: true,
  },
  {
    id: 3,
    name: 'James Lee',
    title: 'UX Design Lead',
    company: 'Design Studio',
    expertise: ['UI/UX', 'Design Systems', 'User Testing'],
    rating: 4.7,
    hourlyRate: 0,
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    isPremium: false,
  },
  // Add more mock mentors here
];

const MentorSearch = () => {
  const [filters, setFilters] = useState({
    expertise: '',
    availability: '',
    priceRange: '',
    rating: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Mock filtered mentors - in a real app, this would be more sophisticated
  const filteredMentors = mentors.filter(mentor => 
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow px-6 py-8 mb-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Perfect Mentor</h1>
              
              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search by name, expertise, or keywords..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  name="expertise"
                  value={filters.expertise}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Expertise</option>
                  <option value="tech">Technology</option>
                  <option value="business">Business</option>
                  <option value="design">Design</option>
                </select>

                <select
                  name="availability"
                  value={filters.availability}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                </select>

                <select
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Price Range</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                  <option value="premium">Premium</option>
                </select>

                <select
                  name="rating"
                  value={filters.rating}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{mentor.name}</h3>
                      <p className="text-sm text-gray-500">{mentor.title}</p>
                      <p className="text-sm text-gray-500">{mentor.company}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{mentor.rating}</span>
                      <span className="ml-1 text-yellow-400">★</span>
                    </div>
                  </div>

                  <div className="mt-4">
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

                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {mentor.hourlyRate === 0 ? (
                        <span className="text-green-600 font-medium">Free</span>
                      ) : (
                        <span>${mentor.hourlyRate}/hour</span>
                      )}
                    </div>
                    {mentor.isPremium && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        Premium
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Available on:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.availability.map((day, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                      View Profile & Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorSearch; 