<<<<<<< HEAD
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(AuthContext);

=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    displayName: 'Loading...',
    email: 'loading@example.com',
    photoURL: 'https://img.icons8.com/?size=100&id=13042&format=png&color=000000', 
  });
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateError, setUpdateError] = useState('');

<<<<<<< HEAD
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
=======
  useEffect(() => {

    const simulatedUser = {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      photoURL: 'https://img.icons8.com/?size=100&id=13042&format=png&color=000000',
    };

    setTimeout(() => {
      setUser(simulatedUser);
      setName(simulatedUser.displayName || '');
      setPhotoURL(simulatedUser.photoURL || '');
      setLoading(false);
    }, 500);
  }, []);
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setName(user.displayName || '');
    setPhotoURL(user.photoURL || '');
    setIsEditing(false);
    setUpdateError('');
  };

<<<<<<< HEAD
=======
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
  const handleSaveProfile = async () => {
    setLoading(true);
    setUpdateError('');
    try {
<<<<<<< HEAD
      await updateUser({ displayName: name, photoURL });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setUpdateError('Failed to update profile. Please try again.');
    }
    setLoading(false);
  };

=======
    
      console.log('Saving profile:', { name, photoURL });
      // Simulate success
      setTimeout(() => {
        setUser(prevUser => ({ ...prevUser, displayName: name, photoURL }));
        setIsEditing(false);
        setLoading(false);
      }, 1000);

      // const auth = getAuth();
      // await updateProfile(auth.currentUser, {
      //   displayName: name,
      //   photoURL: photoURL,
      // });
      // setUser(auth.currentUser);
      // setIsEditing(false);
      // setLoading(false);

    } catch (error) {
      console.error('Error updating profile:', error);
      setUpdateError('Failed to update profile. Please try again.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading profile...</div>;
  }

>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="bg-white shadow rounded-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <img
<<<<<<< HEAD
            src={user.photoURL || 'https://img.icons8.com/?size=100&id=13042&format=png&color=000000'}
=======
            src={user.photoURL || 'https://via.placeholder.com/150'}
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
            alt={user.displayName || 'Profile'}
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
<<<<<<< HEAD
            <h2 className="text-lg font-semibold">{user.displayName || 'Unnamed User'}</h2>
=======
            <h2 className="text-lg font-semibold">{user.displayName}</h2>
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEditClick}
<<<<<<< HEAD
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
=======
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
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
<<<<<<< HEAD
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
=======
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={handleNameChange}
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-gray-700 text-sm font-bold mb-2">
                Photo URL:
              </label>
              <input
                type="text"
                id="photoURL"
<<<<<<< HEAD
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
=======
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={photoURL}
                onChange={handlePhotoURLChange}
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
              />
            </div>
            {updateError && <p className="text-red-500 text-sm mb-2">{updateError}</p>}
            <div className="flex gap-2">
              <button
                onClick={handleSaveProfile}
                disabled={loading}
<<<<<<< HEAD
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
=======
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handleCancelClick}
<<<<<<< HEAD
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
=======
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
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

<<<<<<< HEAD
export default MyProfile;
=======
export default MyProfile;
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
