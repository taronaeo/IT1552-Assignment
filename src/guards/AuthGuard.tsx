import React from 'react';

import { useAuthState } from '../stores/auth';
import { Login } from '../pages/Login';

type AuthGuard = {
  Page: React.FC;
};

const AuthGuard: React.FC<AuthGuard> = ({ Page }) => {
  const auth = useAuthState((state) => state.user);

  if (auth === null) return <Login />;
  return <Page />;
};

export { AuthGuard };
