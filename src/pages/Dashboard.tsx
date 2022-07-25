import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faUsers,
  faCalendarDays,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="w-full max-w-7xl flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="flex gap-4 items-center text-4xl font-medium">
            <img
              src={user?.photoURL as string}
              className="w-16 h-16 border-2 border-white/50 rounded-full"
              alt="Profile Picture"
            />

            {user?.displayName}
          </h1>

          <button
            className="px-6 py-2 border-2 rounded-full hover:bg-sky-600/25"
            onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div> */}

      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-row items-center gap-4 p-4 text-black bg-white rounded-xl">
          <FontAwesomeIcon icon={faUser} className="h-5" />
          <div className="flex flex-col">
            <div>100</div>
            <div className="font-bold">users</div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 p-4 text-black bg-white rounded-xl">
          <FontAwesomeIcon icon={faUsers} className="h-5" />
          <div className="flex flex-col">
            <div>100</div>
            <div className="font-bold">members</div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 p-4 text-black bg-white rounded-xl">
          <FontAwesomeIcon icon={faCalendarDays} className="h-5" />
          <div className="flex flex-col">
            <div>100</div>
            <div className="font-bold">events</div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 p-4 text-black bg-white rounded-xl">
          <FontAwesomeIcon icon={faClock} className="h-5" />
          <div className="flex flex-col">
            <div>100</div>
            <div className="font-bold">participations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
