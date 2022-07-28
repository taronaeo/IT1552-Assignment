import React from 'react';

import { Search } from '../../components';
import { ParticipationsTable } from '.';

const ManageParticipations: React.FC = () => (
  <div className="flex flex-col gap-4 mb-10">
    <h1 className="text-4xl font-bold">Manage Participations</h1>

    <Search placeholder="Search participation records..." />

    <ParticipationsTable />
  </div>
);

export { ManageParticipations };
