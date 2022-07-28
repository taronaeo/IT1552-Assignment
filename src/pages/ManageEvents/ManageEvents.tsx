import React from 'react';

import { Search } from '../../components';
import { EventsTable } from '.';

const ManageEvents: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h1 className="text-4xl font-bold">Manage Events</h1>

      <Search placeholder="Search Events..." />

      <EventsTable />
    </div>
  );
};

export { ManageEvents };
