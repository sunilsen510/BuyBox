import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/main-logo.svg';
import airplanes from '../assets/airplanes.svg';
import man from '../assets/man.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md py-[20px] m-px">
      <div className="max-w-8xl mx-4">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Navigation Items */}
          <nav className="md:block">
            <ul className="flex space-x-6">
              {/* Boost Your Profile */}
              <li className="flex items-center space-x-2 bg-gray-200 p-2 h-10">
                <img src={airplanes} alt="Plane" className="w-5 h-5 object-contain" />
                <div className="text-black font-medium text-sm">Boost Your Profile</div>
              </li>

              {/* Welcome Dropdown */}
              <li className="flex items-center space-x-2 relative p-2 h-10">
                <div className='flex items-center'>
                  <img src={man} alt="User" className="w-12 h-12 object-contain rounded-[50px] bg-gray-200 p-[10px]" />
                </div>
                <div className="text-black font-medium flex flex-col gap-1 text-sm">
                  Welcome
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" text-gray-700 font-semibold rounded inline-flex items-center focus:outline-none"
                  >
                    <span className="mr-1">User Name</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>

                  {isOpen && (
                    <ul className="absolute top-full mt-2 right-0 w-48 bg-white border border-gray-200 rounded shadow-md z-50 text-gray-700">
                      <li>
                        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                          One
                        </a>
                      </li>
                      <li>
                        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                          Two
                        </a>
                      </li>
                      <li>
                        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                          Three is the magic number
                        </a>
                      </li>
                    </ul>
                  )}
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