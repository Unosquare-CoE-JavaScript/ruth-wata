import { useState } from 'react';

export default function SearchBox({ setEnteredName }) {
  const [enteredSearch, setEnteredSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setEnteredName(enteredSearch);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="mt-6 flex justify-center">
      <input
        type="text"
        value={enteredSearch}
        onChange={(e) => setEnteredSearch(e.target.value)}
        className="px-4 py-2 mt-2 mr-4 h-10 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="name"
      />
      <div className="">
        <button
          className={` px-4 py-2 mt-2 h-10 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 hover:bg-purple-600 rounded-md  focus:outline-none focus:bg-purple-600`}
          type="submit"

          //   disabled={!enteredUser.email && !enteredUser.password}
        >
          search
        </button>
      </div>
    </form>
  );
}

// SearchBox.defaultProps = {
//   setSearchedName: setSearchedName(),
// };
