import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Search } from '../../components';
import { UsersTable } from '.';

const ManageUsers: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h1 className="text-4xl font-bold">Manage Users</h1>

      <div className="flex flex-row justify-between items-center">
        <div>
          <button className="flex flex-row items-center gap-2 text-black bg-white border border-gray-300 font-medium rounded-lg text-sm p-2 px-4">
            Add User
            <FontAwesomeIcon icon={faChevronRight} className="w-5" />
          </button>
        </div>

        <Search className="w-60" placeholder="Search for users..." />
      </div>

      <UsersTable />
    </div>
  );
};

export { ManageUsers };
