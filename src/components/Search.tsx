import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type SearchProps = {
  placeholder: string;
};

const Search: React.FC<SearchProps> = ({ placeholder }) => (
  <div className="relative">
    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
    </div>
    <input
      id="search"
      type="search"
      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300"
      placeholder={placeholder}
    />
    <button className="absolute text-white right-2.5 bottom-2 bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
      Search
    </button>
  </div>
);

export { Search };
