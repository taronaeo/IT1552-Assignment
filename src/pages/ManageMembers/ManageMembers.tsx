import React from 'react';
import { Search } from '../../components';
import { MembersTable } from '.';

const ManageMembers: React.FC = () => (
  <div className="flex flex-col gap-4 mb-10">
    <h1 className="text-4xl font-bold">Manage Members</h1>

    <Search placeholder="Search Members..." />

    <MembersTable />
  </div>
);

export { ManageMembers };
