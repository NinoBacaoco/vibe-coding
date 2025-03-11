import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    background: '',
    interests: [],
    goals: '',
    mentorPreferences: {
      expertise: [],
      yearsOfExperience: '',
      availability: [],
      communicationStyle: '',
    },
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Mock completion - in a real app, this would make an API call
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Professional Background</h3>
            <div>
              <label htmlFor="background" className="block text-sm font-medium text-gray-700">
                Tell us about your background
              </label>
              <div className="mt-1">
                <textarea
                  id="background"
                  name="background"
                  rows={4}
                  value={formData.background}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your education, work experience, etc."
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Areas of Interest</h3>
            <div className="space-y-4">
              {['Technology', 'Business', 'Design', 'Marketing', 'Leadership'].map((interest) => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    id={interest}
                    name="interests"
                    value={interest}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor={interest} className="ml-3 text-sm text-gray-700">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Your Goals</h3>
            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                What do you want to achieve?
              </label>
              <div className="mt-1">
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your short-term and long-term goals..."
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Mentor Preferences</h3>
            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">
                Preferred expertise level
              </label>
              <select
                id="expertise"
                name="mentorPreferences.expertise"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
              >
                <option value="">Select level</option>
                <option value="junior">Junior (1-3 years)</option>
                <option value="mid">Mid-Level (4-7 years)</option>
                <option value="senior">Senior (8+ years)</option>
              </select>
            </div>
            <div>
              <label htmlFor="communicationStyle" className="block text-sm font-medium text-gray-700">
                Preferred communication style
              </label>
              <select
                id="communicationStyle"
                name="mentorPreferences.communicationStyle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
              >
                <option value="">Select style</option>
                <option value="structured">Structured and formal</option>
                <option value="casual">Casual and friendly</option>
                <option value="direct">Direct and to-the-point</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Complete Your Profile
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Step {step} of 4
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {renderStep()}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {step === 4 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding; 