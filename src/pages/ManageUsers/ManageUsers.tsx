import React from 'react';

import { Search } from '../../components';
import { UsersTable } from '.';

const ManageUsers: React.FC = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-4xl font-bold">Manage Users</h1>

    <div className="flex flex-row justify-between items-center">
      <div className="inline-flex rounded-md" role="group">
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200">
          Suspend User
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200">
          Delete User
        </button>
      </div>

      <Search className="w-60" placeholder="Search for users..." />
    </div>

    <UsersTable />
  </div>
);

export { ManageUsers };
