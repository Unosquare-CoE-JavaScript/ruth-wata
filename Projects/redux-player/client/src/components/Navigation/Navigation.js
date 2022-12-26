import Logout from '../Logout/Logout';
import { useState } from 'react';
import ToggleNav from './ToggleNav';

const hamburger = require('../../imgs/nav.png');

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(true);
  };

  const handleCLoseNavClick = () => {
    setShowNav(false);
  };

  return (
    <header>
      <nav>
        <ul className="flex justify-between">
          <li className="mr-6">
            {!showNav && (
              <button
                className="text-blue-500 hover:text-blue-800 mt-2 ml-2"
                onClick={handleToggleNav}
              >
                <img src={hamburger} alt="open nav bar icon" />
              </button>
            )}

            <div
              className={`w-60 h-full shadow-md bg-white  absolute top-0 left-0 -z-2 ${
                showNav ? 'translate-x-0' : '-translate-x-full '
              } ease-in-out duration-300`}
            >
              <button
                onClick={handleCLoseNavClick}
                className="z-10 whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 w-full h-12 text-gray-700 text-ellipsis"
              >
                X
              </button>
              <ToggleNav
                handleCLoseNavClick={handleCLoseNavClick}
                showNav={showNav}
              />
            </div>
          </li>
          <li className="mt-2 mr-2">
            <Logout />
          </li>
        </ul>
      </nav>
    </header>
  );
}
