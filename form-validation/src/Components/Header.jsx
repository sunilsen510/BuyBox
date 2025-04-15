import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/main-logo.svg';
import airplanes from '../assets/airplanes.svg';
import man from '../assets/man.svg';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Navigation Items */}
          <nav className="md:block">
            <ul className="flex space-x-6">
              {/* Boost Your Profile */}
              <li className="flex items-center space-x-2">
                <img src={airplanes} alt="Plane" className="w-10 h-10 object-contain" />
                <div className="text-black font-medium">Boost Your Profile</div>
              </li>

              {/* Welcome */}
              <li className="flex items-center space-x-2">
                <img src={man} alt="User" className="w-10 h-10 object-contain" />
                <div className="text-black font-medium">Welcome
                      <div className="dropdown inline-block relative">
                        <button className="bg-white-800 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                          <span className="mr-1">User Name</span>
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                          <li className=""><a className="rounded-t bg-white-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                          <li className=""><a className="bg-white-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                          <li className=""><a className="rounded-b bg-white-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                        </ul>
                    </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;