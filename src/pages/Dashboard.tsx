import React from 'react';

import { signOut } from '../services';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold">congratz!</h1>

      <button onClick={signOut}>sign out now</button>
    </div>
  );
};

export { Dashboard };
