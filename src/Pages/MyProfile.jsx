import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateError, setUpdateError] = useState('');

  // Redirect krbe jdi user login na thake 
  useEffect(() => {
    if (!user) {
      setLoading(false); // stop loading if no user
      return;
    }
    setName(user.displayName || '');
    setPhotoURL(user.photoURL || '');
    setLoading(false);
  }, [user]);

  // jdi login na thake
  if (!user && !loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">You're not logged in</h2>
          <button
            onClick={() => navigate('/auth/login')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading profile...</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setName(user.displayName || '');
    setPhotoURL(user.photoURL || '');
    setIsEditing(false);
    setUpdateError('');
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    setUpdateError('');
    try {
      await updateUser({ displayName: name, photoURL });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setUpdateError('Failed to update profile. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="bg-white shadow rounded-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <img
            src={user.photoURL || 'https://img.icons8.com/?size=100&id=13042&format=png&color=000000'}
            alt={user.displayName || 'Profile'}
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.displayName || 'Unnamed User'}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit Profile
          </button>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2">Edit Information</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-gray-700 text-sm font-bold mb-2">
                Photo URL:
              </label>
              <input
                type="text"
                id="photoURL"
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>
            {updateError && <p className="text-red-500 text-sm mb-2">{updateError}</p>}
            <div className="flex gap-2">
              <button
                onClick={handleSaveProfile}
                disabled={loading}
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
