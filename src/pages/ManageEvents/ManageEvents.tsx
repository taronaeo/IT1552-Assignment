import React from 'react';

import { Search } from '../../components';
import { EventsTable } from '.';

const ManageEvents: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h1 className="text-4xl font-bold">Manage Events</h1>

      <div className="flex flex-row justify-between items-center">
        <div className="inline-flex rounded-md" role="group">
          <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200">
            Add Event
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200">
            Edit Event
          </button>
        </div>

        <Search className="w-60" placeholder="Search for events..." />
      </div>

      <EventsTable />
    </div>
  );
};

export { ManageEvents };
