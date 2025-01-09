import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Profile Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile</h1>

        {/* User Information Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Full Name</h2>
            <p className="text-gray-600">John Doe</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Email Address</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Phone Number</h2>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">1234 Elm Street, Apt 567, City, State, ZIP</p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
