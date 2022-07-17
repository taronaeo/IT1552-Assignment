import React from 'react';

import { signOut } from '../services';
import { useAuthState } from '../stores/auth';

type HeaderProps = {
  className: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const user = useAuthState((state) => state.user);

  if (!user) return null;

  return (
    <header {...props}>
      <div className="w-full max-w-7xl flex flex-col">
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
      </div>
    </header>
  );
};

export { Header };
