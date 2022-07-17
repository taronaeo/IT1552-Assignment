import React from 'react';

import { signOut } from '../services';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>congratz!</h1>

      <button onClick={signOut}>sign out now bitch</button>
    </div>
  );
};

export { Dashboard };
