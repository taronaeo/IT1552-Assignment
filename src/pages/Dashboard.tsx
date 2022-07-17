import React from 'react';

import { signOut } from '../services';
import { useAuthState } from '../stores/auth';

const Dashboard: React.FC = () => {
  const user = useAuthState((state) => state.user);

  return (
    <div className="w-full max-w-7xl flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex gap-4 justify-between items-center">
          <h1 className="flex gap-4 items-center text-4xl font-medium">
            <img
              src={user?.photoURL as string}
              alt="Profile Picture"
              className="w-16 h-16 border-2 rounded-full"
            />

            {user?.displayName}
          </h1>

          <div className="flex flex-row gap-6 justify-between items-center">
            <button
              className="px-6 py-2 border-2 rounded-full"
              onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
