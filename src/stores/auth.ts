import { User } from 'firebase/auth';

import create from 'zustand';
import { devtools } from 'zustand/middleware';

type AuthState = {
  user: User | null;
  setUser: (user: User) => void;
  reset: () => void;
};

const useAuthState = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (user: User) => set(() => ({ user })),
    reset: () => set(() => ({ user: null })),
  })),
);

export { useAuthState };
