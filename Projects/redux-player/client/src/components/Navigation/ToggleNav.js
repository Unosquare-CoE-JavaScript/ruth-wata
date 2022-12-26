import { Link } from 'react-router-dom';

export default function ToggleNav({ showNav, handleCLoseNavClick }) {
  return (
    <ul className="relative">
      <li className="relative">
        <a
          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Home
        </a>
      </li>
      <li className="relative">
        <a
          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Profile
        </a>
      </li>
      <li className="relative">
        <a
          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Posts
        </a>
      </li>
    </ul>
  );
}
