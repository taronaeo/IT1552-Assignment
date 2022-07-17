import React from 'react';

import { signInWithGoogle } from '../services';

const Login: React.FC = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Click here to login</button>
    </div>
  );
};

export { Login };
