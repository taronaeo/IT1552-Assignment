import React from 'react';
import { Search } from '../../components';
import { UsersTable } from '.';

const ManageUsers: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h1 className="text-4xl font-bold">Manage Users</h1>

      <Search placeholder="Search Users..." />

      <UsersTable />
    </div>
  );
};

export { ManageUsers };
