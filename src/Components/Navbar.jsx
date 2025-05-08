import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { FiMenu } from 'react-icons/fi';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("user trying to logOut");
    logOut()
      .then(() => {
        alert("Logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const activeLinkStyle = ({ isActive }) =>
    isActive ? "text-green-600 underline font-semibold" : "text-gray-700 font-semibold";

  return (
    <div className="mb-5 shadow p-2">
      <div className="flex justify-between items-center">
        <div className='flex items-center text-center gap-1'>
          <img className='w-12' src="https://img.icons8.com/?size=100&id=63788&format=png&color=000000" alt="" />
          <h1 className="text-2xl font-bold">
            <span className="text-gray-600">App</span>
            <span className="text-green-600">Gallery</span>
          </h1>
        </div>

        <div className="hidden md:flex nav gap-5 items-center font-semibold">
          <NavLink to="/" className={activeLinkStyle}>Apps</NavLink>
          <NavLink to="/auth/my-profile" className={activeLinkStyle}>My Profile</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FiMenu className="text-2xl text-gray-700" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded z-10 w-36">
                <NavLink to="/" className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-100 ${isActive ? 'text-green-600 underline font-semibold' : 'text-gray-700'}`
                } onClick={() => setMenuOpen(false)}>Apps</NavLink>

                <NavLink to="/auth/my-profile" className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-100 ${isActive ? 'text-green-600 underline font-semibold' : 'text-gray-700'}`
                } onClick={() => setMenuOpen(false)}>My Profile</NavLink>
              </div>
            )}
          </div>

          {/* Show user email if logged in */}

          {user?.displayName && <div className="text-sm text-gray-600">{user.displayName}</div>}

          <img
            className="w-10 h-10 rounded-full"
            src={user?.photoURL || 'https://img.icons8.com/?size=100&id=13042&format=png&color=000000'}
            alt="User Icon"
          />



          <div className="lg:block hidden">
            <Link to="/auth/register" className="btn btn-active btn-primary bg-green-600 text-white border-none text-center items-center">Register</Link>
          </div>

          {
            user ? (
              <button onClick={handleLogout} className="btn btn-active btn-primary">Log Out</button>
            ) : (
              <Link to="/auth/login" className="btn btn-active btn-primary">Login</Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
