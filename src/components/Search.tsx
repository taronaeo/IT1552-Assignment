import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type SearchProps = {
  className: string;
  placeholder: string;
};

const Search: React.FC<SearchProps> = ({ className, placeholder }) => (
  <div className={['relative', className].join(' ')}>
    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
    </div>
    <input
      id="search"
      type="search"
      className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
    />
  </div>
);

export { Search };
