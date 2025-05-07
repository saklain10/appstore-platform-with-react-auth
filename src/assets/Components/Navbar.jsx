import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mb-5 shadow p-2">
      <div className="flex justify-between items-center">
        {/* App Name */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-gray-600">App</span>
            <span className="text-green-600">Gallery</span>
          </h1>
        </div>

        <div className="hidden md:flex nav gap-5 items-center font-semibold">
          <NavLink to="/">Apps</NavLink>
          <NavLink to="/auth/my-profile">My Profile</NavLink>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon */}
          <div className="md:hidden relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FiMenu className="text-2xl text-gray-700" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded z-10 w-36">
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Apps
                </NavLink>
                <NavLink
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  My Profile
                </NavLink>
              </div>
            )}
          </div>

          <img
            className="w-10 h-10 rounded-full"
            src="https://img.icons8.com/?size=100&id=13042&format=png&color=000000"
            alt="User Icon"
          />
          <div className='lg:block hidden'>
            <Link to='/auth/register' className="btn btn-active btn-primary bg-green-600 text-white border-none  text-center items-center">Register</Link>
          </div>          
          <Link to='/auth/login' className="btn btn-active btn-primary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
