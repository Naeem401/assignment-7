import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const navItems = {
  dashboard: '/',
  incidents: '/incidents',
  locations: '/location',
  activities: '/activities',
  documents: '/documents',
  cypherAi: '/cypher-ai'
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const formatNavText = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace(' Ai', ' AI');
  };

  return (
    <div className=' bg-[#E4E4E7]'>
      <nav className="flex items-center justify-between w-[90%] mx-auto">
      {/* Left Section - Logo */}
      <img src={logo} alt="Company Logo" className="h-8" />

      {/* Center Section - Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {Object.entries(navItems).map(([key, url]) => (
          <NavLink
            key={key}
            to={url}
            className={({ isActive }) => 
              `pt-5 pb-5 transition-all border-b-2 ${
                isActive 
                  ? 'text-black font-bold border-black' 
                  : 'text-gray-700 border-transparent hover:border-gray-400'
              }`
            }
          >
            {formatNavText(key)}
          </NavLink>
        ))}
      </div>

      {/* Right Section - Profile & Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img 
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                  alt="User avatar" 
                />
              </div>
            </div>
            <div className="hidden md:block">
              <h2 className="font-semibold leading-tight">Usman Zafar</h2>
              <p className="text-sm text-gray-500">usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Links */}
      <div
        className={`fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-[#E4E4E7] md:bg-transparent z-50 shadow-xl md:shadow-none
          transform transition-transform duration-300 ease-in-out md:translate-x-0
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
          md:hidden`}
      >
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="ml-auto text-xl p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        
        <ul className="flex flex-col space-y-2 p-4">
          {Object.entries(navItems).map(([key, url]) => (
            <li key={key}>
              <NavLink
                to={url}
                className={({ isActive }) => 
                  `block p-2 rounded transition-colors border-l-4 ${
                    isActive 
                      ? 'text-black font-bold border-black bg-gray-100' 
                      : 'text-gray-700 border-transparent hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {formatNavText(key)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    <hr  className='border-b border-gray-400'/>
    </div>
    
  );
}

export default NavBar;