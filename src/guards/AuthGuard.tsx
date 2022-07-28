import React from 'react';

import { useAuthState } from '../stores/auth';
import { Login } from '../pages/Login';

type AuthGuard = {
  children: JSX.Element;
};

const AuthGuard: React.FC<AuthGuard> = ({ children }) => {
  const auth = useAuthState((state) => state.user);

  if (auth === null) return <Login />;
  return children;
};

export { AuthGuard };
